import type { Resolvers } from "@repo/api";
import { prisma } from "./db";

export const resolvers: Pick<Resolvers, "Query" | "Mutation"> = {
  Query: {
    artists: async (_parent, args, ctx) =>
      await prisma.artist.findMany({
        where: {
          ...(args.ArtistId
            ? {
              ArtistId: args.ArtistId,
            }
            : {}),
        },
      }),
    albums: async (_, args) =>
      await prisma.album.findMany({
        where: {
          ...(args.ArtistId
            ? {
              ArtistId: args.ArtistId,
            }
            : {}),
        },
      }),
    album: async (_, args) =>
      await prisma.album.findFirst({
        where: {
          AlbumId: args.AlbumId,
        },
      }),
    playlistTracks: async (_, args) => {
      const { PlaylistId } = args;
      return await prisma.playlistTrack.findMany({
        where: {
          ...(PlaylistId
            ? {
              PlaylistId,
            }
            : {}),
        },
      });
    },
    artistAlbums: async (_parent, args) => {
      // const albums =
      const res = await prisma.artist.findMany({
        include: {
          Album: true,
        },
        where: {
          ...(args.ArtistId
            ? {
              ArtistId: args.ArtistId,
            }
            : {}),
        },
      });

      return res.map((e) => {
        const { Album, ...artist } = e;
        return {
          artist,
          albums: Album,
        };
      });
    },
  },
  Mutation: {
    deletePlaylistTrack: async (_, args) => {
      return await prisma.playlistTrack
        .delete({
          where: {
            PlaylistId_TrackId: args,
          },
        })
        .catch(() => {
          return null;
        });
    },
  },
};

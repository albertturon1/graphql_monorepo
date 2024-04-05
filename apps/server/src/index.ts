import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { Resolvers, typeDefs } from '@repo/api';

// export const prisma = new PrismaClient();

// const resolvers: Pick<Resolvers, 'Query' | 'Mutation'> = {
const resolvers = {
  // Query: {
  //   artists: async (_parent, args, ctx) => await prisma.artist.findMany({
  //     where: {
  //       ArtistId: args.ArtistId
  //     }
  //   }),
  //   albums: async (_, args) => await prisma.album.findMany({
  //     where: {
  //       ArtistId: args.ArtistId
  //     }
  //   }),
  //   album: async (_, args) => await prisma.album.findFirst({
  //     where: {
  //       AlbumId: args.AlbumId
  //     }
  //   }),
  //   playlistTracks: async (_, args) => await prisma.playlistTrack.findMany({
  //     where: {
  //       PlaylistId: args.PlaylistId
  //     }
  //   }),
  //   artistAlbums: async (_parent, args) => {
  //     // const albums = 
  //     const res = await prisma.artist.findMany({
  //       include: {
  //         Album: true
  //       },
  //       where: {
  //         ArtistId: args.ArtistId
  //       }
  //     })

  //     return res.map(e => {
  //       const { Album, ...artist } = e;
  //       return {
  //         artist,
  //         albums: Album
  //       }
  //     })
  //   },
  // },
  // Mutation: {
  //   deletePlaylistTrack: async (_, args) => {
  //     // return await prisma.artist.findFirst({
  //     //   where: {
  //     //     ArtistId: args.ArtistId
  //     //   }
  //     // })
  //     return await prisma.playlistTrack.delete({
  //       where: {
  //         PlaylistId_TrackId: args
  //       },
  //     }).catch(() => {
  //       return null
  //     });
  //   }
  // }
}


// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests
const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
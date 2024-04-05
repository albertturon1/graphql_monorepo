import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Album = {
  __typename?: 'Album';
  AlbumId: Scalars['Int']['output'];
  ArtistId: Scalars['Int']['output'];
  Title: Scalars['String']['output'];
};

export type Artist = {
  __typename?: 'Artist';
  ArtistId: Scalars['Int']['output'];
  Name: Maybe<Scalars['String']['output']>;
};

export type ArtistAlbums = {
  __typename?: 'ArtistAlbums';
  albums: Array<Album>;
  artist: Artist;
};

export type Customer = {
  __typename?: 'Customer';
  Address: Maybe<Scalars['String']['output']>;
  City: Maybe<Scalars['String']['output']>;
  Company: Maybe<Scalars['String']['output']>;
  Country: Maybe<Scalars['String']['output']>;
  CustomerId: Scalars['Int']['output'];
  Email: Scalars['String']['output'];
  Fax: Maybe<Scalars['String']['output']>;
  FirstName: Scalars['String']['output'];
  LastName: Scalars['String']['output'];
  Phone: Maybe<Scalars['String']['output']>;
  PostalCode: Maybe<Scalars['String']['output']>;
  State: Maybe<Scalars['String']['output']>;
};

export type Employee = {
  __typename?: 'Employee';
  Address: Maybe<Scalars['String']['output']>;
  City: Maybe<Scalars['String']['output']>;
  Country: Maybe<Scalars['String']['output']>;
  Email: Maybe<Scalars['String']['output']>;
  EmployeeId: Scalars['Int']['output'];
  Fax: Maybe<Scalars['String']['output']>;
  FirstName: Scalars['String']['output'];
  LastName: Scalars['String']['output'];
  Phone: Maybe<Scalars['String']['output']>;
  PostalCode: Maybe<Scalars['String']['output']>;
  ReportsTo: Maybe<Scalars['Int']['output']>;
  State: Maybe<Scalars['String']['output']>;
  Title: Maybe<Scalars['String']['output']>;
};

export type Genre = {
  __typename?: 'Genre';
  GenreId: Scalars['Int']['output'];
  Name: Maybe<Scalars['String']['output']>;
};

export type Invoice = {
  __typename?: 'Invoice';
  BillingAddress: Maybe<Scalars['String']['output']>;
  BillingCity: Maybe<Scalars['String']['output']>;
  BillingCountry: Maybe<Scalars['String']['output']>;
  BillingPostalCode: Maybe<Scalars['String']['output']>;
  BillingState: Maybe<Scalars['String']['output']>;
  CustomerId: Scalars['Int']['output'];
  InvoiceId: Scalars['Int']['output'];
  Total: Scalars['Int']['output'];
};

export type InvoiceLine = {
  __typename?: 'InvoiceLine';
  InvoiceId: Scalars['Int']['output'];
  InvoiceLineId: Scalars['Int']['output'];
  Quantity: Scalars['Int']['output'];
  TrackId: Scalars['Int']['output'];
  UnitPrice: Scalars['Int']['output'];
};

export type MediaType = {
  __typename?: 'MediaType';
  MediaTypeId: Scalars['Int']['output'];
  Name: Maybe<Scalars['String']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  deletePlaylistTrack: Maybe<PlaylistTrack>;
};


export type MutationDeletePlaylistTrackArgs = {
  PlaylistId: Scalars['Int']['input'];
  TrackId: Scalars['Int']['input'];
};

export type Playlist = {
  __typename?: 'Playlist';
  Name: Maybe<Scalars['String']['output']>;
  PlaylistId: Scalars['Int']['output'];
};

export type PlaylistTrack = {
  __typename?: 'PlaylistTrack';
  PlaylistId: Scalars['Int']['output'];
  TrackId: Scalars['Int']['output'];
};

export type Query = {
  __typename?: 'Query';
  album: Maybe<Album>;
  albums: Array<Album>;
  artistAlbums: Array<ArtistAlbums>;
  artists: Array<Artist>;
  playlistTracks: Array<Maybe<PlaylistTrack>>;
};


export type QueryAlbumArgs = {
  AlbumId: Scalars['Int']['input'];
};


export type QueryAlbumsArgs = {
  ArtistId: InputMaybe<Scalars['Int']['input']>;
};


export type QueryArtistAlbumsArgs = {
  ArtistId: InputMaybe<Scalars['Int']['input']>;
};


export type QueryArtistsArgs = {
  ArtistId: InputMaybe<Scalars['Int']['input']>;
};


export type QueryPlaylistTracksArgs = {
  PlaylistId: InputMaybe<Scalars['Int']['input']>;
};

export type Track = {
  __typename?: 'Track';
  AlbumId: Maybe<Scalars['Int']['output']>;
  Bytes: Maybe<Scalars['Int']['output']>;
  Composer: Maybe<Scalars['String']['output']>;
  GenreId: Maybe<Scalars['Int']['output']>;
  MediaTypeId: Scalars['Int']['output'];
  Milliseconds: Scalars['Int']['output'];
  Name: Scalars['String']['output'];
  TrackId: Scalars['Int']['output'];
  UnitPrice: Scalars['Int']['output'];
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Album: ResolverTypeWrapper<Album>;
  Artist: ResolverTypeWrapper<Artist>;
  ArtistAlbums: ResolverTypeWrapper<ArtistAlbums>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Customer: ResolverTypeWrapper<Customer>;
  Employee: ResolverTypeWrapper<Employee>;
  Genre: ResolverTypeWrapper<Genre>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Invoice: ResolverTypeWrapper<Invoice>;
  InvoiceLine: ResolverTypeWrapper<InvoiceLine>;
  MediaType: ResolverTypeWrapper<MediaType>;
  Mutation: ResolverTypeWrapper<{}>;
  Playlist: ResolverTypeWrapper<Playlist>;
  PlaylistTrack: ResolverTypeWrapper<PlaylistTrack>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Track: ResolverTypeWrapper<Track>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Album: Album;
  Artist: Artist;
  ArtistAlbums: ArtistAlbums;
  Boolean: Scalars['Boolean']['output'];
  Customer: Customer;
  Employee: Employee;
  Genre: Genre;
  Int: Scalars['Int']['output'];
  Invoice: Invoice;
  InvoiceLine: InvoiceLine;
  MediaType: MediaType;
  Mutation: {};
  Playlist: Playlist;
  PlaylistTrack: PlaylistTrack;
  Query: {};
  String: Scalars['String']['output'];
  Track: Track;
};

export type AlbumResolvers<ContextType = any, ParentType extends ResolversParentTypes['Album'] = ResolversParentTypes['Album']> = {
  AlbumId: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  ArtistId: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  Title: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ArtistResolvers<ContextType = any, ParentType extends ResolversParentTypes['Artist'] = ResolversParentTypes['Artist']> = {
  ArtistId: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  Name: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ArtistAlbumsResolvers<ContextType = any, ParentType extends ResolversParentTypes['ArtistAlbums'] = ResolversParentTypes['ArtistAlbums']> = {
  albums: Resolver<Array<ResolversTypes['Album']>, ParentType, ContextType>;
  artist: Resolver<ResolversTypes['Artist'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CustomerResolvers<ContextType = any, ParentType extends ResolversParentTypes['Customer'] = ResolversParentTypes['Customer']> = {
  Address: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  City: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  Company: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  Country: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  CustomerId: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  Email: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  Fax: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  FirstName: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  LastName: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  Phone: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  PostalCode: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  State: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EmployeeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Employee'] = ResolversParentTypes['Employee']> = {
  Address: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  City: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  Country: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  Email: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  EmployeeId: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  Fax: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  FirstName: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  LastName: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  Phone: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  PostalCode: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ReportsTo: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  State: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  Title: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GenreResolvers<ContextType = any, ParentType extends ResolversParentTypes['Genre'] = ResolversParentTypes['Genre']> = {
  GenreId: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  Name: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type InvoiceResolvers<ContextType = any, ParentType extends ResolversParentTypes['Invoice'] = ResolversParentTypes['Invoice']> = {
  BillingAddress: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  BillingCity: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  BillingCountry: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  BillingPostalCode: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  BillingState: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  CustomerId: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  InvoiceId: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  Total: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type InvoiceLineResolvers<ContextType = any, ParentType extends ResolversParentTypes['InvoiceLine'] = ResolversParentTypes['InvoiceLine']> = {
  InvoiceId: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  InvoiceLineId: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  Quantity: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  TrackId: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  UnitPrice: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MediaTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MediaType'] = ResolversParentTypes['MediaType']> = {
  MediaTypeId: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  Name: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  deletePlaylistTrack: Resolver<Maybe<ResolversTypes['PlaylistTrack']>, ParentType, ContextType, RequireFields<MutationDeletePlaylistTrackArgs, 'PlaylistId' | 'TrackId'>>;
};

export type PlaylistResolvers<ContextType = any, ParentType extends ResolversParentTypes['Playlist'] = ResolversParentTypes['Playlist']> = {
  Name: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  PlaylistId: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PlaylistTrackResolvers<ContextType = any, ParentType extends ResolversParentTypes['PlaylistTrack'] = ResolversParentTypes['PlaylistTrack']> = {
  PlaylistId: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  TrackId: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  album: Resolver<Maybe<ResolversTypes['Album']>, ParentType, ContextType, RequireFields<QueryAlbumArgs, 'AlbumId'>>;
  albums: Resolver<Array<ResolversTypes['Album']>, ParentType, ContextType, QueryAlbumsArgs>;
  artistAlbums: Resolver<Array<ResolversTypes['ArtistAlbums']>, ParentType, ContextType, QueryArtistAlbumsArgs>;
  artists: Resolver<Array<ResolversTypes['Artist']>, ParentType, ContextType, QueryArtistsArgs>;
  playlistTracks: Resolver<Array<Maybe<ResolversTypes['PlaylistTrack']>>, ParentType, ContextType, QueryPlaylistTracksArgs>;
};

export type TrackResolvers<ContextType = any, ParentType extends ResolversParentTypes['Track'] = ResolversParentTypes['Track']> = {
  AlbumId: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  Bytes: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  Composer: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  GenreId: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  MediaTypeId: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  Milliseconds: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  Name: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  TrackId: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  UnitPrice: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Album: AlbumResolvers<ContextType>;
  Artist: ArtistResolvers<ContextType>;
  ArtistAlbums: ArtistAlbumsResolvers<ContextType>;
  Customer: CustomerResolvers<ContextType>;
  Employee: EmployeeResolvers<ContextType>;
  Genre: GenreResolvers<ContextType>;
  Invoice: InvoiceResolvers<ContextType>;
  InvoiceLine: InvoiceLineResolvers<ContextType>;
  MediaType: MediaTypeResolvers<ContextType>;
  Mutation: MutationResolvers<ContextType>;
  Playlist: PlaylistResolvers<ContextType>;
  PlaylistTrack: PlaylistTrackResolvers<ContextType>;
  Query: QueryResolvers<ContextType>;
  Track: TrackResolvers<ContextType>;
};


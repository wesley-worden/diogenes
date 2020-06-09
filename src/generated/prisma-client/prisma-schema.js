module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type AggregateChannel {
  count: Int!
}

type AggregateShitpost {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Channel {
  id: ID!
  owner: User!
  createdAt: DateTime!
  members(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  shitposts(where: ShitpostWhereInput, orderBy: ShitpostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Shitpost!]
}

type ChannelConnection {
  pageInfo: PageInfo!
  edges: [ChannelEdge]!
  aggregate: AggregateChannel!
}

input ChannelCreateInput {
  id: ID
  owner: UserCreateOneWithoutOwnerOfChannelsInput!
  members: UserCreateManyWithoutMemberOfChannelsInput
  shitposts: ShitpostCreateManyWithoutChannelInput
}

input ChannelCreateManyWithoutMembersInput {
  create: [ChannelCreateWithoutMembersInput!]
  connect: [ChannelWhereUniqueInput!]
}

input ChannelCreateManyWithoutOwnerInput {
  create: [ChannelCreateWithoutOwnerInput!]
  connect: [ChannelWhereUniqueInput!]
}

input ChannelCreateOneWithoutShitpostsInput {
  create: ChannelCreateWithoutShitpostsInput
  connect: ChannelWhereUniqueInput
}

input ChannelCreateWithoutMembersInput {
  id: ID
  owner: UserCreateOneWithoutOwnerOfChannelsInput!
  shitposts: ShitpostCreateManyWithoutChannelInput
}

input ChannelCreateWithoutOwnerInput {
  id: ID
  members: UserCreateManyWithoutMemberOfChannelsInput
  shitposts: ShitpostCreateManyWithoutChannelInput
}

input ChannelCreateWithoutShitpostsInput {
  id: ID
  owner: UserCreateOneWithoutOwnerOfChannelsInput!
  members: UserCreateManyWithoutMemberOfChannelsInput
}

type ChannelEdge {
  node: Channel!
  cursor: String!
}

enum ChannelOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
}

type ChannelPreviousValues {
  id: ID!
  createdAt: DateTime!
}

input ChannelScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  AND: [ChannelScalarWhereInput!]
  OR: [ChannelScalarWhereInput!]
  NOT: [ChannelScalarWhereInput!]
}

type ChannelSubscriptionPayload {
  mutation: MutationType!
  node: Channel
  updatedFields: [String!]
  previousValues: ChannelPreviousValues
}

input ChannelSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ChannelWhereInput
  AND: [ChannelSubscriptionWhereInput!]
  OR: [ChannelSubscriptionWhereInput!]
  NOT: [ChannelSubscriptionWhereInput!]
}

input ChannelUpdateInput {
  owner: UserUpdateOneRequiredWithoutOwnerOfChannelsInput
  members: UserUpdateManyWithoutMemberOfChannelsInput
  shitposts: ShitpostUpdateManyWithoutChannelInput
}

input ChannelUpdateManyWithoutMembersInput {
  create: [ChannelCreateWithoutMembersInput!]
  delete: [ChannelWhereUniqueInput!]
  connect: [ChannelWhereUniqueInput!]
  set: [ChannelWhereUniqueInput!]
  disconnect: [ChannelWhereUniqueInput!]
  update: [ChannelUpdateWithWhereUniqueWithoutMembersInput!]
  upsert: [ChannelUpsertWithWhereUniqueWithoutMembersInput!]
  deleteMany: [ChannelScalarWhereInput!]
}

input ChannelUpdateManyWithoutOwnerInput {
  create: [ChannelCreateWithoutOwnerInput!]
  delete: [ChannelWhereUniqueInput!]
  connect: [ChannelWhereUniqueInput!]
  set: [ChannelWhereUniqueInput!]
  disconnect: [ChannelWhereUniqueInput!]
  update: [ChannelUpdateWithWhereUniqueWithoutOwnerInput!]
  upsert: [ChannelUpsertWithWhereUniqueWithoutOwnerInput!]
  deleteMany: [ChannelScalarWhereInput!]
}

input ChannelUpdateOneRequiredWithoutShitpostsInput {
  create: ChannelCreateWithoutShitpostsInput
  update: ChannelUpdateWithoutShitpostsDataInput
  upsert: ChannelUpsertWithoutShitpostsInput
  connect: ChannelWhereUniqueInput
}

input ChannelUpdateWithoutMembersDataInput {
  owner: UserUpdateOneRequiredWithoutOwnerOfChannelsInput
  shitposts: ShitpostUpdateManyWithoutChannelInput
}

input ChannelUpdateWithoutOwnerDataInput {
  members: UserUpdateManyWithoutMemberOfChannelsInput
  shitposts: ShitpostUpdateManyWithoutChannelInput
}

input ChannelUpdateWithoutShitpostsDataInput {
  owner: UserUpdateOneRequiredWithoutOwnerOfChannelsInput
  members: UserUpdateManyWithoutMemberOfChannelsInput
}

input ChannelUpdateWithWhereUniqueWithoutMembersInput {
  where: ChannelWhereUniqueInput!
  data: ChannelUpdateWithoutMembersDataInput!
}

input ChannelUpdateWithWhereUniqueWithoutOwnerInput {
  where: ChannelWhereUniqueInput!
  data: ChannelUpdateWithoutOwnerDataInput!
}

input ChannelUpsertWithoutShitpostsInput {
  update: ChannelUpdateWithoutShitpostsDataInput!
  create: ChannelCreateWithoutShitpostsInput!
}

input ChannelUpsertWithWhereUniqueWithoutMembersInput {
  where: ChannelWhereUniqueInput!
  update: ChannelUpdateWithoutMembersDataInput!
  create: ChannelCreateWithoutMembersInput!
}

input ChannelUpsertWithWhereUniqueWithoutOwnerInput {
  where: ChannelWhereUniqueInput!
  update: ChannelUpdateWithoutOwnerDataInput!
  create: ChannelCreateWithoutOwnerInput!
}

input ChannelWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  owner: UserWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  members_every: UserWhereInput
  members_some: UserWhereInput
  members_none: UserWhereInput
  shitposts_every: ShitpostWhereInput
  shitposts_some: ShitpostWhereInput
  shitposts_none: ShitpostWhereInput
  AND: [ChannelWhereInput!]
  OR: [ChannelWhereInput!]
  NOT: [ChannelWhereInput!]
}

input ChannelWhereUniqueInput {
  id: ID
}

scalar DateTime

scalar Long

type Mutation {
  createChannel(data: ChannelCreateInput!): Channel!
  updateChannel(data: ChannelUpdateInput!, where: ChannelWhereUniqueInput!): Channel
  upsertChannel(where: ChannelWhereUniqueInput!, create: ChannelCreateInput!, update: ChannelUpdateInput!): Channel!
  deleteChannel(where: ChannelWhereUniqueInput!): Channel
  deleteManyChannels(where: ChannelWhereInput): BatchPayload!
  createShitpost(data: ShitpostCreateInput!): Shitpost!
  updateShitpost(data: ShitpostUpdateInput!, where: ShitpostWhereUniqueInput!): Shitpost
  updateManyShitposts(data: ShitpostUpdateManyMutationInput!, where: ShitpostWhereInput): BatchPayload!
  upsertShitpost(where: ShitpostWhereUniqueInput!, create: ShitpostCreateInput!, update: ShitpostUpdateInput!): Shitpost!
  deleteShitpost(where: ShitpostWhereUniqueInput!): Shitpost
  deleteManyShitposts(where: ShitpostWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  channel(where: ChannelWhereUniqueInput!): Channel
  channels(where: ChannelWhereInput, orderBy: ChannelOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Channel]!
  channelsConnection(where: ChannelWhereInput, orderBy: ChannelOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ChannelConnection!
  shitpost(where: ShitpostWhereUniqueInput!): Shitpost
  shitposts(where: ShitpostWhereInput, orderBy: ShitpostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Shitpost]!
  shitpostsConnection(where: ShitpostWhereInput, orderBy: ShitpostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ShitpostConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Shitpost {
  id: ID!
  postedBy: User!
  createdAt: DateTime!
  encryptedContent: String!
  channel: Channel!
}

type ShitpostConnection {
  pageInfo: PageInfo!
  edges: [ShitpostEdge]!
  aggregate: AggregateShitpost!
}

input ShitpostCreateInput {
  id: ID
  postedBy: UserCreateOneInput!
  encryptedContent: String!
  channel: ChannelCreateOneWithoutShitpostsInput!
}

input ShitpostCreateManyWithoutChannelInput {
  create: [ShitpostCreateWithoutChannelInput!]
  connect: [ShitpostWhereUniqueInput!]
}

input ShitpostCreateWithoutChannelInput {
  id: ID
  postedBy: UserCreateOneInput!
  encryptedContent: String!
}

type ShitpostEdge {
  node: Shitpost!
  cursor: String!
}

enum ShitpostOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  encryptedContent_ASC
  encryptedContent_DESC
}

type ShitpostPreviousValues {
  id: ID!
  createdAt: DateTime!
  encryptedContent: String!
}

input ShitpostScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  encryptedContent: String
  encryptedContent_not: String
  encryptedContent_in: [String!]
  encryptedContent_not_in: [String!]
  encryptedContent_lt: String
  encryptedContent_lte: String
  encryptedContent_gt: String
  encryptedContent_gte: String
  encryptedContent_contains: String
  encryptedContent_not_contains: String
  encryptedContent_starts_with: String
  encryptedContent_not_starts_with: String
  encryptedContent_ends_with: String
  encryptedContent_not_ends_with: String
  AND: [ShitpostScalarWhereInput!]
  OR: [ShitpostScalarWhereInput!]
  NOT: [ShitpostScalarWhereInput!]
}

type ShitpostSubscriptionPayload {
  mutation: MutationType!
  node: Shitpost
  updatedFields: [String!]
  previousValues: ShitpostPreviousValues
}

input ShitpostSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ShitpostWhereInput
  AND: [ShitpostSubscriptionWhereInput!]
  OR: [ShitpostSubscriptionWhereInput!]
  NOT: [ShitpostSubscriptionWhereInput!]
}

input ShitpostUpdateInput {
  postedBy: UserUpdateOneRequiredInput
  encryptedContent: String
  channel: ChannelUpdateOneRequiredWithoutShitpostsInput
}

input ShitpostUpdateManyDataInput {
  encryptedContent: String
}

input ShitpostUpdateManyMutationInput {
  encryptedContent: String
}

input ShitpostUpdateManyWithoutChannelInput {
  create: [ShitpostCreateWithoutChannelInput!]
  delete: [ShitpostWhereUniqueInput!]
  connect: [ShitpostWhereUniqueInput!]
  set: [ShitpostWhereUniqueInput!]
  disconnect: [ShitpostWhereUniqueInput!]
  update: [ShitpostUpdateWithWhereUniqueWithoutChannelInput!]
  upsert: [ShitpostUpsertWithWhereUniqueWithoutChannelInput!]
  deleteMany: [ShitpostScalarWhereInput!]
  updateMany: [ShitpostUpdateManyWithWhereNestedInput!]
}

input ShitpostUpdateManyWithWhereNestedInput {
  where: ShitpostScalarWhereInput!
  data: ShitpostUpdateManyDataInput!
}

input ShitpostUpdateWithoutChannelDataInput {
  postedBy: UserUpdateOneRequiredInput
  encryptedContent: String
}

input ShitpostUpdateWithWhereUniqueWithoutChannelInput {
  where: ShitpostWhereUniqueInput!
  data: ShitpostUpdateWithoutChannelDataInput!
}

input ShitpostUpsertWithWhereUniqueWithoutChannelInput {
  where: ShitpostWhereUniqueInput!
  update: ShitpostUpdateWithoutChannelDataInput!
  create: ShitpostCreateWithoutChannelInput!
}

input ShitpostWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  postedBy: UserWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  encryptedContent: String
  encryptedContent_not: String
  encryptedContent_in: [String!]
  encryptedContent_not_in: [String!]
  encryptedContent_lt: String
  encryptedContent_lte: String
  encryptedContent_gt: String
  encryptedContent_gte: String
  encryptedContent_contains: String
  encryptedContent_not_contains: String
  encryptedContent_starts_with: String
  encryptedContent_not_starts_with: String
  encryptedContent_ends_with: String
  encryptedContent_not_ends_with: String
  channel: ChannelWhereInput
  AND: [ShitpostWhereInput!]
  OR: [ShitpostWhereInput!]
  NOT: [ShitpostWhereInput!]
}

input ShitpostWhereUniqueInput {
  id: ID
}

type Subscription {
  channel(where: ChannelSubscriptionWhereInput): ChannelSubscriptionPayload
  shitpost(where: ShitpostSubscriptionWhereInput): ShitpostSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  name: String!
  memberOfChannels(where: ChannelWhereInput, orderBy: ChannelOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Channel!]
  ownerOfChannels(where: ChannelWhereInput, orderBy: ChannelOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Channel!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  id: ID
  name: String!
  memberOfChannels: ChannelCreateManyWithoutMembersInput
  ownerOfChannels: ChannelCreateManyWithoutOwnerInput
}

input UserCreateManyWithoutMemberOfChannelsInput {
  create: [UserCreateWithoutMemberOfChannelsInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutOwnerOfChannelsInput {
  create: UserCreateWithoutOwnerOfChannelsInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutMemberOfChannelsInput {
  id: ID
  name: String!
  ownerOfChannels: ChannelCreateManyWithoutOwnerInput
}

input UserCreateWithoutOwnerOfChannelsInput {
  id: ID
  name: String!
  memberOfChannels: ChannelCreateManyWithoutMembersInput
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
}

type UserPreviousValues {
  id: ID!
  name: String!
}

input UserScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  AND: [UserScalarWhereInput!]
  OR: [UserScalarWhereInput!]
  NOT: [UserScalarWhereInput!]
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateDataInput {
  name: String
  memberOfChannels: ChannelUpdateManyWithoutMembersInput
  ownerOfChannels: ChannelUpdateManyWithoutOwnerInput
}

input UserUpdateInput {
  name: String
  memberOfChannels: ChannelUpdateManyWithoutMembersInput
  ownerOfChannels: ChannelUpdateManyWithoutOwnerInput
}

input UserUpdateManyDataInput {
  name: String
}

input UserUpdateManyMutationInput {
  name: String
}

input UserUpdateManyWithoutMemberOfChannelsInput {
  create: [UserCreateWithoutMemberOfChannelsInput!]
  delete: [UserWhereUniqueInput!]
  connect: [UserWhereUniqueInput!]
  set: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutMemberOfChannelsInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutMemberOfChannelsInput!]
  deleteMany: [UserScalarWhereInput!]
  updateMany: [UserUpdateManyWithWhereNestedInput!]
}

input UserUpdateManyWithWhereNestedInput {
  where: UserScalarWhereInput!
  data: UserUpdateManyDataInput!
}

input UserUpdateOneRequiredInput {
  create: UserCreateInput
  update: UserUpdateDataInput
  upsert: UserUpsertNestedInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredWithoutOwnerOfChannelsInput {
  create: UserCreateWithoutOwnerOfChannelsInput
  update: UserUpdateWithoutOwnerOfChannelsDataInput
  upsert: UserUpsertWithoutOwnerOfChannelsInput
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutMemberOfChannelsDataInput {
  name: String
  ownerOfChannels: ChannelUpdateManyWithoutOwnerInput
}

input UserUpdateWithoutOwnerOfChannelsDataInput {
  name: String
  memberOfChannels: ChannelUpdateManyWithoutMembersInput
}

input UserUpdateWithWhereUniqueWithoutMemberOfChannelsInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutMemberOfChannelsDataInput!
}

input UserUpsertNestedInput {
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserUpsertWithoutOwnerOfChannelsInput {
  update: UserUpdateWithoutOwnerOfChannelsDataInput!
  create: UserCreateWithoutOwnerOfChannelsInput!
}

input UserUpsertWithWhereUniqueWithoutMemberOfChannelsInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutMemberOfChannelsDataInput!
  create: UserCreateWithoutMemberOfChannelsInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  memberOfChannels_every: ChannelWhereInput
  memberOfChannels_some: ChannelWhereInput
  memberOfChannels_none: ChannelWhereInput
  ownerOfChannels_every: ChannelWhereInput
  ownerOfChannels_some: ChannelWhereInput
  ownerOfChannels_none: ChannelWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
}
`
      }
    
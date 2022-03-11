export const schema = gql`
  type JobProfile {
    id: Int!
    email: String!
    portfolioUrl: String!
    name: String!
    photo: String!
    status: String!
    title: String!
    locations: [String!]!
    about: String!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    jobProfiles(limit: Int): [JobProfile!]! @skipAuth
    jobProfile(id: Int!): JobProfile @skipAuth
  }

  input CreateJobProfileInput {
    email: String!
    portfolioUrl: String!
    name: String!
    photo: String!
    title: String!
    locations: [String!]!
    about: String!
    status: String!
  }

  input UpdateJobProfileInput {
    token: String
    email: String
    portfolioUrl: String
    name: String
    photo: String
    status: String
    title: String
    locations: String
    about: String
  }

  type Mutation {
    createJobProfile(input: CreateJobProfileInput!): JobProfile! @skipAuth
    updateJobProfile(id: Int!, input: UpdateJobProfileInput!): JobProfile!
      @requireAuth
    deleteJobProfile(id: Int!): JobProfile! @requireAuth
  }
`

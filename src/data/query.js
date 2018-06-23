import gql from "graphql-tag";

export const trendingRepositoriesGQLQuery = gql`
  query search($query: String!, $cursor: String) {
    search(first: 15, query: $query, type: REPOSITORY, after: $cursor) {
      pageInfo {
        startCursor
        endCursor
        hasNextPage
        hasPreviousPage
      }

      repositoryCount
      edges {
        node {
          ... on Repository {
            name
            owner {
              login
            }
            description
            stargazers {
              totalCount
            }
            primaryLanguage {
              name
            }
          }
        }
      }
    }
  }
`;

/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getMarketplace = /* GraphQL */ `
  query GetMarketplace($id: ID!) {
    getMarketplace(id: $id) {
      id
      address
      name
      description
      image
      likes
      popularity
      url
      properties
    }
  }
`;
export const listMarketplaces = /* GraphQL */ `
  query ListMarketplaces(
    $filter: ModelMarketplaceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMarketplaces(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        image
        popularity
        url
        properties
      }
      nextToken
      startedAt
    }
  }
`;
export const syncMarketplaces = /* GraphQL */ `
  query SyncMarketplaces(
    $filter: ModelMarketplaceFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncMarketplaces(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        address
        name
        description
        image
        likes
        popularity
        url
        properties
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;

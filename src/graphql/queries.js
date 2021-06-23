/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getMarketplace = /* GraphQL */ `
  query GetMarketplace($id: ID!) {
    getMarketplace(id: $id) {
      id
      collectionAddress
      name
      description
      image
      likes
      popularity
      url
      properties
      walletAddress
      collectionID
      tokenID
      tokenIndex
      ownerAddress
      creatorAddress
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
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
        collectionAddress
        name
        description
        image
        likes
        popularity
        url
        properties
        walletAddress
        collectionID
        tokenID
        tokenIndex
        ownerAddress
        creatorAddress
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
export const popularity = /* GraphQL */ `
  query Popularity(
    $likes: Int
    $popularity: ModelFloatKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelMarketplaceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    popularity(
      likes: $likes
      popularity: $popularity
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        collectionAddress
        name
        description
        image
        likes
        popularity
        url
        properties
        walletAddress
        collectionID
        tokenID
        tokenIndex
        ownerAddress
        creatorAddress
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
        collectionAddress
        name
        description
        image
        likes
        popularity
        url
        properties
        walletAddress
        collectionID
        tokenID
        tokenIndex
        ownerAddress
        creatorAddress
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

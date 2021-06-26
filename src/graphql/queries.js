/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCollection = /* GraphQL */ `
  query GetCollection($blockChain: String!, $collectionID: Int!) {
    getCollection(blockChain: $blockChain, collectionID: $collectionID) {
      blockChain
      collectionID
      address
      name
      description
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listCollections = /* GraphQL */ `
  query ListCollections(
    $blockChain: String
    $collectionID: ModelIntKeyConditionInput
    $filter: ModelCollectionFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listCollections(
      blockChain: $blockChain
      collectionID: $collectionID
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        blockChain
        collectionID
        address
        name
        description
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
export const address = /* GraphQL */ `
  query Address(
    $blockChain: String
    $address: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCollectionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    address(
      blockChain: $blockChain
      address: $address
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        blockChain
        collectionID
        address
        name
        description
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
export const syncCollections = /* GraphQL */ `
  query SyncCollections(
    $filter: ModelCollectionFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCollections(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        blockChain
        collectionID
        address
        name
        description
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
export const getNft = /* GraphQL */ `
  query GetNft($collectionID: Int!, $tokenID: Int!) {
    getNft(collectionID: $collectionID, tokenID: $tokenID) {
      collectionID
      tokenID
      tokenIndex
      name
      description
      image
      url
      properties
      likes
      popularity
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
export const listNfts = /* GraphQL */ `
  query ListNfts(
    $collectionID: Int
    $tokenID: ModelIntKeyConditionInput
    $filter: ModelNftFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listNfts(
      collectionID: $collectionID
      tokenID: $tokenID
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        collectionID
        tokenID
        tokenIndex
        name
        description
        image
        url
        properties
        likes
        popularity
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
export const syncNfts = /* GraphQL */ `
  query SyncNfts(
    $filter: ModelNftFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncNfts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        collectionID
        tokenID
        tokenIndex
        name
        description
        image
        url
        properties
        likes
        popularity
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

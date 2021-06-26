/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBlockchain = /* GraphQL */ `
  query GetBlockchain($id: ID!) {
    getBlockchain(id: $id) {
      id
      name
      description
      explorer
      nativeToken
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Collections {
        nextToken
        startedAt
      }
    }
  }
`;
export const listBlockchains = /* GraphQL */ `
  query ListBlockchains(
    $filter: ModelBlockchainFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBlockchains(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        explorer
        nativeToken
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
export const syncBlockchains = /* GraphQL */ `
  query SyncBlockchains(
    $filter: ModelBlockchainFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncBlockchains(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        description
        explorer
        nativeToken
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
export const getCollection = /* GraphQL */ `
  query GetCollection($id: ID!) {
    getCollection(id: $id) {
      id
      blockchainID
      name
      description
      address
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
    $filter: ModelCollectionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCollections(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        blockchainID
        name
        description
        address
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
        id
        blockchainID
        name
        description
        address
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
export const getNftItem = /* GraphQL */ `
  query GetNftItem($collectionID: ID!, $tokenID: Int!) {
    getNftItem(collectionID: $collectionID, tokenID: $tokenID) {
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
export const listNftItems = /* GraphQL */ `
  query ListNftItems(
    $collectionID: ID
    $tokenID: ModelIntKeyConditionInput
    $filter: ModelNftItemFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listNftItems(
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
export const syncNftItems = /* GraphQL */ `
  query SyncNftItems(
    $filter: ModelNftItemFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncNftItems(
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

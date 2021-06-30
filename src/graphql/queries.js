/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCollection = /* GraphQL */ `
  query GetCollection($blockchain: String!, $collectionID: Int!) {
    getCollection(blockchain: $blockchain, collectionID: $collectionID) {
      blockchain
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
    $blockchain: String
    $collectionID: ModelIntKeyConditionInput
    $filter: ModelCollectionFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listCollections(
      blockchain: $blockchain
      collectionID: $collectionID
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        blockchain
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
export const collectionByAddress = /* GraphQL */ `
  query CollectionByAddress(
    $blockchain: String
    $address: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCollectionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    collectionByAddress(
      blockchain: $blockchain
      address: $address
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        blockchain
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
        blockchain
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
      creationBlock
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
        creationBlock
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
export const nftsByCreationBlock = /* GraphQL */ `
  query NftsByCreationBlock(
    $creationBlock: String
    $sortDirection: ModelSortDirection
    $filter: ModelNftFilterInput
    $limit: Int
    $nextToken: String
  ) {
    nftsByCreationBlock(
      creationBlock: $creationBlock
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
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
        creationBlock
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
export const nftsByOwner = /* GraphQL */ `
  query NftsByOwner(
    $ownerAddress: String
    $sortDirection: ModelSortDirection
    $filter: ModelNftFilterInput
    $limit: Int
    $nextToken: String
  ) {
    nftsByOwner(
      ownerAddress: $ownerAddress
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
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
        creationBlock
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
export const nftsByCreator = /* GraphQL */ `
  query NftsByCreator(
    $creatorAddress: String
    $sortDirection: ModelSortDirection
    $filter: ModelNftFilterInput
    $limit: Int
    $nextToken: String
  ) {
    nftsByCreator(
      creatorAddress: $creatorAddress
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
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
        creationBlock
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
export const nftsByPopularity = /* GraphQL */ `
  query NftsByPopularity(
    $popularity: Int
    $sortDirection: ModelSortDirection
    $filter: ModelNftFilterInput
    $limit: Int
    $nextToken: String
  ) {
    nftsByPopularity(
      popularity: $popularity
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
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
        creationBlock
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
        creationBlock
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
export const getTransfer = /* GraphQL */ `
  query GetTransfer($blockNumber: String!, $logIndex: Int!) {
    getTransfer(blockNumber: $blockNumber, logIndex: $logIndex) {
      blockNumber
      logIndex
      transactionHash
      collectionID
      tokenID
      fromAddress
      toAddress
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listTransfers = /* GraphQL */ `
  query ListTransfers(
    $blockNumber: String
    $logIndex: ModelIntKeyConditionInput
    $filter: ModelTransferFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listTransfers(
      blockNumber: $blockNumber
      logIndex: $logIndex
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        blockNumber
        logIndex
        transactionHash
        collectionID
        tokenID
        fromAddress
        toAddress
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
export const transfersByToken = /* GraphQL */ `
  query TransfersByToken(
    $collectionID: Int
    $tokenID: ModelIntKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelTransferFilterInput
    $limit: Int
    $nextToken: String
  ) {
    transfersByToken(
      collectionID: $collectionID
      tokenID: $tokenID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        blockNumber
        logIndex
        transactionHash
        collectionID
        tokenID
        fromAddress
        toAddress
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
export const transfersBySender = /* GraphQL */ `
  query TransfersBySender(
    $fromAddress: String
    $sortDirection: ModelSortDirection
    $filter: ModelTransferFilterInput
    $limit: Int
    $nextToken: String
  ) {
    transfersBySender(
      fromAddress: $fromAddress
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        blockNumber
        logIndex
        transactionHash
        collectionID
        tokenID
        fromAddress
        toAddress
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
export const transfersByReciever = /* GraphQL */ `
  query TransfersByReciever(
    $toAddress: String
    $sortDirection: ModelSortDirection
    $filter: ModelTransferFilterInput
    $limit: Int
    $nextToken: String
  ) {
    transfersByReciever(
      toAddress: $toAddress
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        blockNumber
        logIndex
        transactionHash
        collectionID
        tokenID
        fromAddress
        toAddress
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
export const syncTransfers = /* GraphQL */ `
  query SyncTransfers(
    $filter: ModelTransferFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTransfers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        blockNumber
        logIndex
        transactionHash
        collectionID
        tokenID
        fromAddress
        toAddress
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

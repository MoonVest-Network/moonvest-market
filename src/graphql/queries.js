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
  query GetNft($collectionID: Int!, $tokenID: String!) {
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
      keywords
      creationBlock
      lastTransferBlock
    }
  }
`;
export const listNfts = /* GraphQL */ `
  query ListNfts(
    $collectionID: Int
    $tokenID: ModelStringKeyConditionInput
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
        keywords
        creationBlock
        lastTransferBlock
      }
      nextToken
      startedAt
    }
  }
`;
export const nftsByCreationBlock = /* GraphQL */ `
  query NftsByCreationBlock(
    $creationBlock: Int
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
        keywords
        creationBlock
        lastTransferBlock
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
        keywords
        creationBlock
        lastTransferBlock
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
        keywords
        creationBlock
        lastTransferBlock
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
        keywords
        creationBlock
        lastTransferBlock
      }
      nextToken
      startedAt
    }
  }
`;
export const nftsByKeywords = /* GraphQL */ `
  query NftsByKeywords(
    $keywords: String
    $sortDirection: ModelSortDirection
    $filter: ModelNftFilterInput
    $limit: Int
    $nextToken: String
  ) {
    nftsByKeywords(
      keywords: $keywords
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
        keywords
        creationBlock
        lastTransferBlock
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
        keywords
        creationBlock
        lastTransferBlock
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
    $tokenID: ModelStringKeyConditionInput
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
export const getWallet = /* GraphQL */ `
  query GetWallet($address: String!) {
    getWallet(address: $address) {
      address
      name
      description
      popularity
      bnbBalance
      ethBalance
      mvnBalance
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listWallets = /* GraphQL */ `
  query ListWallets(
    $address: String
    $filter: ModelWalletFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listWallets(
      address: $address
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        address
        name
        description
        popularity
        bnbBalance
        ethBalance
        mvnBalance
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
export const syncWallets = /* GraphQL */ `
  query SyncWallets(
    $filter: ModelWalletFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncWallets(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        address
        name
        description
        popularity
        bnbBalance
        ethBalance
        mvnBalance
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
export const getLike = /* GraphQL */ `
  query GetLike($address: String!, $collectionID: Int!, $tokenID: String!) {
    getLike(address: $address, collectionID: $collectionID, tokenID: $tokenID) {
      address
      collectionID
      tokenID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listLikes = /* GraphQL */ `
  query ListLikes(
    $address: String
    $collectionIDTokenID: ModelLikePrimaryCompositeKeyConditionInput
    $filter: ModelLikeFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listLikes(
      address: $address
      collectionIDTokenID: $collectionIDTokenID
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        address
        collectionID
        tokenID
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
export const syncLikes = /* GraphQL */ `
  query SyncLikes(
    $filter: ModelLikeFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncLikes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        address
        collectionID
        tokenID
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
export const getFollow = /* GraphQL */ `
  query GetFollow($followerAddress: String!, $targetAddress: String!) {
    getFollow(
      followerAddress: $followerAddress
      targetAddress: $targetAddress
    ) {
      followerAddress
      targetAddress
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listFollows = /* GraphQL */ `
  query ListFollows(
    $followerAddress: String
    $targetAddress: ModelStringKeyConditionInput
    $filter: ModelFollowFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listFollows(
      followerAddress: $followerAddress
      targetAddress: $targetAddress
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        followerAddress
        targetAddress
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
export const followers = /* GraphQL */ `
  query Followers(
    $targetAddress: String
    $sortDirection: ModelSortDirection
    $filter: ModelFollowFilterInput
    $limit: Int
    $nextToken: String
  ) {
    followers(
      targetAddress: $targetAddress
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        followerAddress
        targetAddress
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
export const syncFollows = /* GraphQL */ `
  query SyncFollows(
    $filter: ModelFollowFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncFollows(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        followerAddress
        targetAddress
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

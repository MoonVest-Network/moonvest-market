/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getNftItem = /* GraphQL */ `
  query GetNftItem($id: ID!) {
    getNftItem(id: $id) {
      id
      nftcollectionID
      tokenId
      name
      description
      image
      url
      properties
      qty
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      wallets {
        nextToken
        startedAt
      }
    }
  }
`;
export const listNftItems = /* GraphQL */ `
  query ListNftItems(
    $filter: ModelNftItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNftItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        nftcollectionID
        tokenId
        name
        description
        image
        url
        properties
        qty
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
        id
        nftcollectionID
        tokenId
        name
        description
        image
        url
        properties
        qty
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
export const getNftCollection = /* GraphQL */ `
  query GetNftCollection($id: ID!) {
    getNftCollection(id: $id) {
      id
      address
      name
      description
      url
      totalSupply
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      NftItems {
        nextToken
        startedAt
      }
    }
  }
`;
export const listNftCollections = /* GraphQL */ `
  query ListNftCollections(
    $filter: ModelNftCollectionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNftCollections(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        address
        name
        description
        url
        totalSupply
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
export const syncNftCollections = /* GraphQL */ `
  query SyncNftCollections(
    $filter: ModelNftCollectionFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncNftCollections(
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
        url
        totalSupply
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
  query GetWallet($id: ID!) {
    getWallet(id: $id) {
      id
      address
      name
      bnbBalance
      mvnBalance
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      WalletNftItems {
        nextToken
        startedAt
      }
    }
  }
`;
export const listWallets = /* GraphQL */ `
  query ListWallets(
    $filter: ModelWalletFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWallets(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        address
        name
        bnbBalance
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
        id
        address
        name
        bnbBalance
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
export const syncWalletNftItems = /* GraphQL */ `
  query SyncWalletNftItems(
    $filter: ModelWalletNftItemFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncWalletNftItems(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        walletID
        nftitemID
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

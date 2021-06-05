/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getNftCollection = /* GraphQL */ `
  query GetNftCollection($id: ID!) {
    getNftCollection(id: $id) {
      id
      address
      name
      description
      url
      createdAt
      updatedAt
      NftItems {
        nextToken
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
        createdAt
        updatedAt
      }
      nextToken
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
      createdAt
      updatedAt
      WalletNftItems {
        nextToken
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
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
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
      createdAt
      updatedAt
      wallets {
        nextToken
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
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;

/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createNftCollection = /* GraphQL */ `
  mutation CreateNftCollection(
    $input: CreateNftCollectionInput!
    $condition: ModelNftCollectionConditionInput
  ) {
    createNftCollection(input: $input, condition: $condition) {
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
export const updateNftCollection = /* GraphQL */ `
  mutation UpdateNftCollection(
    $input: UpdateNftCollectionInput!
    $condition: ModelNftCollectionConditionInput
  ) {
    updateNftCollection(input: $input, condition: $condition) {
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
export const deleteNftCollection = /* GraphQL */ `
  mutation DeleteNftCollection(
    $input: DeleteNftCollectionInput!
    $condition: ModelNftCollectionConditionInput
  ) {
    deleteNftCollection(input: $input, condition: $condition) {
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
export const createWallet = /* GraphQL */ `
  mutation CreateWallet(
    $input: CreateWalletInput!
    $condition: ModelWalletConditionInput
  ) {
    createWallet(input: $input, condition: $condition) {
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
export const updateWallet = /* GraphQL */ `
  mutation UpdateWallet(
    $input: UpdateWalletInput!
    $condition: ModelWalletConditionInput
  ) {
    updateWallet(input: $input, condition: $condition) {
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
export const deleteWallet = /* GraphQL */ `
  mutation DeleteWallet(
    $input: DeleteWalletInput!
    $condition: ModelWalletConditionInput
  ) {
    deleteWallet(input: $input, condition: $condition) {
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
export const createNftItem = /* GraphQL */ `
  mutation CreateNftItem(
    $input: CreateNftItemInput!
    $condition: ModelNftItemConditionInput
  ) {
    createNftItem(input: $input, condition: $condition) {
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
export const updateNftItem = /* GraphQL */ `
  mutation UpdateNftItem(
    $input: UpdateNftItemInput!
    $condition: ModelNftItemConditionInput
  ) {
    updateNftItem(input: $input, condition: $condition) {
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
export const deleteNftItem = /* GraphQL */ `
  mutation DeleteNftItem(
    $input: DeleteNftItemInput!
    $condition: ModelNftItemConditionInput
  ) {
    deleteNftItem(input: $input, condition: $condition) {
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
export const createWalletNftItem = /* GraphQL */ `
  mutation CreateWalletNftItem(
    $input: CreateWalletNftItemInput!
    $condition: ModelWalletNftItemConditionInput
  ) {
    createWalletNftItem(input: $input, condition: $condition) {
      id
      walletID
      nftitemID
      createdAt
      updatedAt
      wallet {
        id
        address
        name
        bnbBalance
        mvnBalance
        createdAt
        updatedAt
      }
      nftitem {
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
    }
  }
`;
export const updateWalletNftItem = /* GraphQL */ `
  mutation UpdateWalletNftItem(
    $input: UpdateWalletNftItemInput!
    $condition: ModelWalletNftItemConditionInput
  ) {
    updateWalletNftItem(input: $input, condition: $condition) {
      id
      walletID
      nftitemID
      createdAt
      updatedAt
      wallet {
        id
        address
        name
        bnbBalance
        mvnBalance
        createdAt
        updatedAt
      }
      nftitem {
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
    }
  }
`;
export const deleteWalletNftItem = /* GraphQL */ `
  mutation DeleteWalletNftItem(
    $input: DeleteWalletNftItemInput!
    $condition: ModelWalletNftItemConditionInput
  ) {
    deleteWalletNftItem(input: $input, condition: $condition) {
      id
      walletID
      nftitemID
      createdAt
      updatedAt
      wallet {
        id
        address
        name
        bnbBalance
        mvnBalance
        createdAt
        updatedAt
      }
      nftitem {
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
    }
  }
`;

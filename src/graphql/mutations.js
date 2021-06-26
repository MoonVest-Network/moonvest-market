/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBlockchain = /* GraphQL */ `
  mutation CreateBlockchain(
    $input: CreateBlockchainInput!
    $condition: ModelBlockchainConditionInput
  ) {
    createBlockchain(input: $input, condition: $condition) {
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
export const updateBlockchain = /* GraphQL */ `
  mutation UpdateBlockchain(
    $input: UpdateBlockchainInput!
    $condition: ModelBlockchainConditionInput
  ) {
    updateBlockchain(input: $input, condition: $condition) {
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
export const deleteBlockchain = /* GraphQL */ `
  mutation DeleteBlockchain(
    $input: DeleteBlockchainInput!
    $condition: ModelBlockchainConditionInput
  ) {
    deleteBlockchain(input: $input, condition: $condition) {
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
export const createCollection = /* GraphQL */ `
  mutation CreateCollection(
    $input: CreateCollectionInput!
    $condition: ModelCollectionConditionInput
  ) {
    createCollection(input: $input, condition: $condition) {
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
export const updateCollection = /* GraphQL */ `
  mutation UpdateCollection(
    $input: UpdateCollectionInput!
    $condition: ModelCollectionConditionInput
  ) {
    updateCollection(input: $input, condition: $condition) {
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
export const deleteCollection = /* GraphQL */ `
  mutation DeleteCollection(
    $input: DeleteCollectionInput!
    $condition: ModelCollectionConditionInput
  ) {
    deleteCollection(input: $input, condition: $condition) {
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
export const createNftItem = /* GraphQL */ `
  mutation CreateNftItem(
    $input: CreateNftItemInput!
    $condition: ModelNftItemConditionInput
  ) {
    createNftItem(input: $input, condition: $condition) {
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
export const updateNftItem = /* GraphQL */ `
  mutation UpdateNftItem(
    $input: UpdateNftItemInput!
    $condition: ModelNftItemConditionInput
  ) {
    updateNftItem(input: $input, condition: $condition) {
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
export const deleteNftItem = /* GraphQL */ `
  mutation DeleteNftItem(
    $input: DeleteNftItemInput!
    $condition: ModelNftItemConditionInput
  ) {
    deleteNftItem(input: $input, condition: $condition) {
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
export const createMarketplace = /* GraphQL */ `
  mutation CreateMarketplace(
    $input: CreateMarketplaceInput!
    $condition: ModelMarketplaceConditionInput
  ) {
    createMarketplace(input: $input, condition: $condition) {
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
export const updateMarketplace = /* GraphQL */ `
  mutation UpdateMarketplace(
    $input: UpdateMarketplaceInput!
    $condition: ModelMarketplaceConditionInput
  ) {
    updateMarketplace(input: $input, condition: $condition) {
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
export const deleteMarketplace = /* GraphQL */ `
  mutation DeleteMarketplace(
    $input: DeleteMarketplaceInput!
    $condition: ModelMarketplaceConditionInput
  ) {
    deleteMarketplace(input: $input, condition: $condition) {
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

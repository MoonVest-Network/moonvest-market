/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCollection = /* GraphQL */ `
  mutation CreateCollection(
    $input: CreateCollectionInput!
    $condition: ModelCollectionConditionInput
  ) {
    createCollection(input: $input, condition: $condition) {
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
export const updateCollection = /* GraphQL */ `
  mutation UpdateCollection(
    $input: UpdateCollectionInput!
    $condition: ModelCollectionConditionInput
  ) {
    updateCollection(input: $input, condition: $condition) {
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
export const deleteCollection = /* GraphQL */ `
  mutation DeleteCollection(
    $input: DeleteCollectionInput!
    $condition: ModelCollectionConditionInput
  ) {
    deleteCollection(input: $input, condition: $condition) {
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
export const createNft = /* GraphQL */ `
  mutation CreateNft(
    $input: CreateNftInput!
    $condition: ModelNftConditionInput
  ) {
    createNft(input: $input, condition: $condition) {
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
  }
`;
export const updateNft = /* GraphQL */ `
  mutation UpdateNft(
    $input: UpdateNftInput!
    $condition: ModelNftConditionInput
  ) {
    updateNft(input: $input, condition: $condition) {
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
  }
`;
export const deleteNft = /* GraphQL */ `
  mutation DeleteNft(
    $input: DeleteNftInput!
    $condition: ModelNftConditionInput
  ) {
    deleteNft(input: $input, condition: $condition) {
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
  }
`;
export const createTransfer = /* GraphQL */ `
  mutation CreateTransfer(
    $input: CreateTransferInput!
    $condition: ModelTransferConditionInput
  ) {
    createTransfer(input: $input, condition: $condition) {
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
export const updateTransfer = /* GraphQL */ `
  mutation UpdateTransfer(
    $input: UpdateTransferInput!
    $condition: ModelTransferConditionInput
  ) {
    updateTransfer(input: $input, condition: $condition) {
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
export const deleteTransfer = /* GraphQL */ `
  mutation DeleteTransfer(
    $input: DeleteTransferInput!
    $condition: ModelTransferConditionInput
  ) {
    deleteTransfer(input: $input, condition: $condition) {
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

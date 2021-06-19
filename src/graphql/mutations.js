/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;

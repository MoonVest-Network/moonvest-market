/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateBlockchain = /* GraphQL */ `
  subscription OnCreateBlockchain {
    onCreateBlockchain {
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
export const onUpdateBlockchain = /* GraphQL */ `
  subscription OnUpdateBlockchain {
    onUpdateBlockchain {
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
export const onDeleteBlockchain = /* GraphQL */ `
  subscription OnDeleteBlockchain {
    onDeleteBlockchain {
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
export const onCreateCollection = /* GraphQL */ `
  subscription OnCreateCollection {
    onCreateCollection {
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
export const onUpdateCollection = /* GraphQL */ `
  subscription OnUpdateCollection {
    onUpdateCollection {
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
export const onDeleteCollection = /* GraphQL */ `
  subscription OnDeleteCollection {
    onDeleteCollection {
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
export const onCreateNftItem = /* GraphQL */ `
  subscription OnCreateNftItem {
    onCreateNftItem {
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
export const onUpdateNftItem = /* GraphQL */ `
  subscription OnUpdateNftItem {
    onUpdateNftItem {
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
export const onDeleteNftItem = /* GraphQL */ `
  subscription OnDeleteNftItem {
    onDeleteNftItem {
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
export const onCreateMarketplace = /* GraphQL */ `
  subscription OnCreateMarketplace {
    onCreateMarketplace {
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
export const onUpdateMarketplace = /* GraphQL */ `
  subscription OnUpdateMarketplace {
    onUpdateMarketplace {
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
export const onDeleteMarketplace = /* GraphQL */ `
  subscription OnDeleteMarketplace {
    onDeleteMarketplace {
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

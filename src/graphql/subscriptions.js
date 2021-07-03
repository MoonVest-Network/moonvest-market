/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCollection = /* GraphQL */ `
  subscription OnCreateCollection {
    onCreateCollection {
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
export const onUpdateCollection = /* GraphQL */ `
  subscription OnUpdateCollection {
    onUpdateCollection {
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
export const onDeleteCollection = /* GraphQL */ `
  subscription OnDeleteCollection {
    onDeleteCollection {
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
export const onCreateNft = /* GraphQL */ `
  subscription OnCreateNft {
    onCreateNft {
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
export const onUpdateNft = /* GraphQL */ `
  subscription OnUpdateNft {
    onUpdateNft {
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
export const onDeleteNft = /* GraphQL */ `
  subscription OnDeleteNft {
    onDeleteNft {
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
export const onCreateTransfer = /* GraphQL */ `
  subscription OnCreateTransfer {
    onCreateTransfer {
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
export const onUpdateTransfer = /* GraphQL */ `
  subscription OnUpdateTransfer {
    onUpdateTransfer {
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
export const onDeleteTransfer = /* GraphQL */ `
  subscription OnDeleteTransfer {
    onDeleteTransfer {
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
export const onCreateWallet = /* GraphQL */ `
  subscription OnCreateWallet {
    onCreateWallet {
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
export const onUpdateWallet = /* GraphQL */ `
  subscription OnUpdateWallet {
    onUpdateWallet {
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
export const onDeleteWallet = /* GraphQL */ `
  subscription OnDeleteWallet {
    onDeleteWallet {
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
export const onCreateLike = /* GraphQL */ `
  subscription OnCreateLike {
    onCreateLike {
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
export const onUpdateLike = /* GraphQL */ `
  subscription OnUpdateLike {
    onUpdateLike {
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
export const onDeleteLike = /* GraphQL */ `
  subscription OnDeleteLike {
    onDeleteLike {
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
export const onCreateFollow = /* GraphQL */ `
  subscription OnCreateFollow {
    onCreateFollow {
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
export const onUpdateFollow = /* GraphQL */ `
  subscription OnUpdateFollow {
    onUpdateFollow {
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
export const onDeleteFollow = /* GraphQL */ `
  subscription OnDeleteFollow {
    onDeleteFollow {
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

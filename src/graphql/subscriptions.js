/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateNftCollection = /* GraphQL */ `
  subscription OnCreateNftCollection {
    onCreateNftCollection {
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
export const onUpdateNftCollection = /* GraphQL */ `
  subscription OnUpdateNftCollection {
    onUpdateNftCollection {
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
export const onDeleteNftCollection = /* GraphQL */ `
  subscription OnDeleteNftCollection {
    onDeleteNftCollection {
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
export const onCreateWallet = /* GraphQL */ `
  subscription OnCreateWallet {
    onCreateWallet {
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
export const onUpdateWallet = /* GraphQL */ `
  subscription OnUpdateWallet {
    onUpdateWallet {
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
export const onDeleteWallet = /* GraphQL */ `
  subscription OnDeleteWallet {
    onDeleteWallet {
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
export const onCreateNftItem = /* GraphQL */ `
  subscription OnCreateNftItem {
    onCreateNftItem {
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
export const onUpdateNftItem = /* GraphQL */ `
  subscription OnUpdateNftItem {
    onUpdateNftItem {
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
export const onDeleteNftItem = /* GraphQL */ `
  subscription OnDeleteNftItem {
    onDeleteNftItem {
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
export const onCreateWalletNftItem = /* GraphQL */ `
  subscription OnCreateWalletNftItem {
    onCreateWalletNftItem {
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
export const onUpdateWalletNftItem = /* GraphQL */ `
  subscription OnUpdateWalletNftItem {
    onUpdateWalletNftItem {
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
export const onDeleteWalletNftItem = /* GraphQL */ `
  subscription OnDeleteWalletNftItem {
    onDeleteWalletNftItem {
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

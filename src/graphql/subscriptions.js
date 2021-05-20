/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
export const onCreateNftCollection = /* GraphQL */ `
  subscription OnCreateNftCollection {
    onCreateNftCollection {
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
export const onUpdateNftCollection = /* GraphQL */ `
  subscription OnUpdateNftCollection {
    onUpdateNftCollection {
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
export const onDeleteNftCollection = /* GraphQL */ `
  subscription OnDeleteNftCollection {
    onDeleteNftCollection {
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
export const onCreateWallet = /* GraphQL */ `
  subscription OnCreateWallet {
    onCreateWallet {
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
export const onUpdateWallet = /* GraphQL */ `
  subscription OnUpdateWallet {
    onUpdateWallet {
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
export const onDeleteWallet = /* GraphQL */ `
  subscription OnDeleteWallet {
    onDeleteWallet {
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
export const onCreateWalletNftItem = /* GraphQL */ `
  subscription OnCreateWalletNftItem {
    onCreateWalletNftItem {
      id
      walletID
      nftitemID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      nftitem {
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
      wallet {
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
    }
  }
`;
export const onUpdateWalletNftItem = /* GraphQL */ `
  subscription OnUpdateWalletNftItem {
    onUpdateWalletNftItem {
      id
      walletID
      nftitemID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      nftitem {
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
      wallet {
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
    }
  }
`;
export const onDeleteWalletNftItem = /* GraphQL */ `
  subscription OnDeleteWalletNftItem {
    onDeleteWalletNftItem {
      id
      walletID
      nftitemID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      nftitem {
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
      wallet {
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
    }
  }
`;

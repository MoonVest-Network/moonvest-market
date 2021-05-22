import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class NftItem {
  readonly id: string;
  readonly nftcollectionID: string;
  readonly tokenId: number;
  readonly name?: string;
  readonly description?: string;
  readonly image?: string;
  readonly url?: string;
  readonly properties?: string;
  readonly qty?: number;
  readonly wallets?: (WalletNftItem | null)[];
  constructor(init: ModelInit<NftItem>);
  static copyOf(source: NftItem, mutator: (draft: MutableModel<NftItem>) => MutableModel<NftItem> | void): NftItem;
}

export declare class WalletNftItem {
  readonly id: string;
  readonly wallet: Wallet;
  readonly nftitem: NftItem;
  constructor(init: ModelInit<WalletNftItem>);
  static copyOf(source: WalletNftItem, mutator: (draft: MutableModel<WalletNftItem>) => MutableModel<WalletNftItem> | void): WalletNftItem;
}

export declare class Wallet {
  readonly id: string;
  readonly address: string;
  readonly name?: string;
  readonly bnbBalance?: number;
  readonly mvnBalance?: number;
  readonly WalletNftItems?: (WalletNftItem | null)[];
  constructor(init: ModelInit<Wallet>);
  static copyOf(source: Wallet, mutator: (draft: MutableModel<Wallet>) => MutableModel<Wallet> | void): Wallet;
}

export declare class NftCollection {
  readonly id: string;
  readonly address: string;
  readonly name?: string;
  readonly description?: string;
  readonly url?: string;
  readonly totalSupply?: number;
  readonly NftItems?: (NftItem | null)[];
  constructor(init: ModelInit<NftCollection>);
  static copyOf(source: NftCollection, mutator: (draft: MutableModel<NftCollection>) => MutableModel<NftCollection> | void): NftCollection;
}
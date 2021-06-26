import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Blockchain {
  readonly id: string;
  readonly name?: string;
  readonly description?: string;
  readonly explorer?: string;
  readonly nativeToken?: string;
  readonly Collections?: (Collection | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Blockchain>);
  static copyOf(source: Blockchain, mutator: (draft: MutableModel<Blockchain>) => MutableModel<Blockchain> | void): Blockchain;
}

export declare class Collection {
  readonly id: string;
  readonly blockchainID?: string;
  readonly name?: string;
  readonly description?: string;
  readonly address?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Collection>);
  static copyOf(source: Collection, mutator: (draft: MutableModel<Collection>) => MutableModel<Collection> | void): Collection;
}

export declare class NftItem {
  readonly id: string;
  readonly collectionID: string;
  readonly tokenID: number;
  readonly tokenIndex?: number;
  readonly name?: string;
  readonly description?: string;
  readonly image?: string;
  readonly url?: string;
  readonly properties?: string;
  readonly likes?: number;
  readonly popularity?: number;
  readonly ownerAddress?: string;
  readonly creatorAddress?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<NftItem>);
  static copyOf(source: NftItem, mutator: (draft: MutableModel<NftItem>) => MutableModel<NftItem> | void): NftItem;
}

export declare class Marketplace {
  readonly id: string;
  readonly collectionAddress?: string;
  readonly name?: string;
  readonly description?: string;
  readonly image?: string;
  readonly likes?: number;
  readonly popularity?: number;
  readonly url?: string;
  readonly properties?: string;
  readonly walletAddress?: string;
  readonly collectionID?: number;
  readonly tokenID?: number;
  readonly tokenIndex?: number;
  readonly ownerAddress?: string;
  readonly creatorAddress?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Marketplace>);
  static copyOf(source: Marketplace, mutator: (draft: MutableModel<Marketplace>) => MutableModel<Marketplace> | void): Marketplace;
}
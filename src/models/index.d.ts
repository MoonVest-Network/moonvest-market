import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Collection {
  readonly id: string;
  readonly blockChain: string;
  readonly collectionID: number;
  readonly address?: string;
  readonly name?: string;
  readonly description?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Collection>);
  static copyOf(source: Collection, mutator: (draft: MutableModel<Collection>) => MutableModel<Collection> | void): Collection;
}

export declare class Nft {
  readonly id: string;
  readonly collectionID: number;
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
  constructor(init: ModelInit<Nft>);
  static copyOf(source: Nft, mutator: (draft: MutableModel<Nft>) => MutableModel<Nft> | void): Nft;
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
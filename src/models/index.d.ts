import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Collection {
  readonly id: string;
  readonly collectionID: number;
  readonly blockchain?: string;
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
  readonly tokenID: string;
  readonly tokenIndex?: number;
  readonly name?: string;
  readonly description?: string;
  readonly image?: string;
  readonly url?: string;
  readonly properties?: string;
  readonly likes?: number;
  readonly popularity?: number;
  readonly tier?: number;
  readonly ownerAddress?: string;
  readonly creatorAddress?: string;
  readonly topTag?: string;
  readonly tags?: string;
  readonly keywords?: string;
  readonly creationBlock?: number;
  readonly creationTimestamp?: number;
  readonly creationHash?: string;
  readonly lastTransferBlock?: number;
  readonly lastTransferTimestamp?: number;
  readonly lastTransferHash?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Nft>);
  static copyOf(source: Nft, mutator: (draft: MutableModel<Nft>) => MutableModel<Nft> | void): Nft;
}

export declare class Transfer {
  readonly id: string;
  readonly blockNumber: string;
  readonly logIndex: number;
  readonly transactionHash: string;
  readonly collectionID: number;
  readonly tokenID: string;
  readonly blockTimestamp?: number;
  readonly fromAddress?: string;
  readonly toAddress?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Transfer>);
  static copyOf(source: Transfer, mutator: (draft: MutableModel<Transfer>) => MutableModel<Transfer> | void): Transfer;
}

export declare class Wallet {
  readonly id: string;
  readonly address: string;
  readonly name?: string;
  readonly description?: string;
  readonly popularity?: number;
  readonly bnbBalance?: number;
  readonly ethBalance?: number;
  readonly mvnBalance?: number;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Wallet>);
  static copyOf(source: Wallet, mutator: (draft: MutableModel<Wallet>) => MutableModel<Wallet> | void): Wallet;
}

export declare class Like {
  readonly id: string;
  readonly address: string;
  readonly collectionID: number;
  readonly tokenID: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Like>);
  static copyOf(source: Like, mutator: (draft: MutableModel<Like>) => MutableModel<Like> | void): Like;
}

export declare class Follow {
  readonly id: string;
  readonly followerAddress: string;
  readonly targetAddress: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Follow>);
  static copyOf(source: Follow, mutator: (draft: MutableModel<Follow>) => MutableModel<Follow> | void): Follow;
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
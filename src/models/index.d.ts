import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Marketplace {
  readonly id: string;
  readonly address?: string;
  readonly name?: string;
  readonly description?: string;
  readonly image?: string;
  readonly likes?: number;
  readonly popularity?: number;
  readonly url?: string;
  readonly properties?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Marketplace>);
  static copyOf(source: Marketplace, mutator: (draft: MutableModel<Marketplace>) => MutableModel<Marketplace> | void): Marketplace;
}
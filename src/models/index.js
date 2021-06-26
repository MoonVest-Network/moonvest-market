// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Blockchain, Collection, NftItem, Marketplace } = initSchema(schema);

export {
  Blockchain,
  Collection,
  NftItem,
  Marketplace
};
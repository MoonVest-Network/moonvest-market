// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Collection, Nft, Transfer, Wallet, Like, Follow, Marketplace } = initSchema(schema);

export {
  Collection,
  Nft,
  Transfer,
  Wallet,
  Like,
  Follow,
  Marketplace
};
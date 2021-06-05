// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { NftCollection, NftItem, WalletNftItem, Wallet } = initSchema(schema);

export {
  NftCollection,
  NftItem,
  WalletNftItem,
  Wallet
};
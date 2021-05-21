// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { NftItem, WalletNftItem, Wallet, NftCollection } = initSchema(schema);

export {
  NftItem,
  WalletNftItem,
  Wallet,
  NftCollection
};
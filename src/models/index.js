// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Marketplace } = initSchema(schema);

export {
  Marketplace
};
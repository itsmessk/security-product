import { Client, Account, Databases} from 'appwrite';
 
export const client = new Client();
 
client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('67640d980035a729d6d0'); // Replace with your project ID
 
export const account = new Account(client);
export const databases = new Databases(client);
 
export const databaseId = '677661490001ec9b5c9a';
export const collectionId = '6776615d00342aba9a6f';
 
export { ID } from 'appwrite';

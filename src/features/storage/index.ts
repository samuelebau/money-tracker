export enum StorageEntity {
  Accounts = 'accounts',
  Settings = 'settings',
  Transactions = 'transactions'
}

export interface StorageCredentials {
  username: string;
  password: string;
  url: Record<StorageEntity, string>;
}

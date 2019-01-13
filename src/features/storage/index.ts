export enum StorageEntity {
  Settings = 'settings',
  Transactions = 'transactions',
  Categories = 'categories',
  Accounts = 'accounts',
  AccountGroups = 'account_groups'
}

export interface StorageCredentials {
  username: string;
  password: string;
  url: Record<StorageEntity, string>;
}

import { observable } from 'mobx';
import { StorageCredentials } from 'features/storage';

export enum SessionMode {
  Demo,
  Live
}

interface SessionT {
  mode: SessionMode;
  authToken: string;
  credentials: StorageCredentials;
}

export default class Session {
  @observable mode: SessionMode;
  @observable authToken: string;
  @observable credentials: StorageCredentials;

  constructor({ mode, authToken, credentials }: SessionT) {
    this.mode = mode;
    this.authToken = authToken;
    this.credentials = credentials;
  }
}

import { observable, action, Lambda, IObservableArray } from 'mobx';
import { SettingsDB } from './SettingsDB';

export interface AccountGroupT {
  id: string;
  name: string;
  order: number;
}

export class GroupSettingsStore {
  groups: IObservableArray<AccountGroupT>;
  private onChangeDisposer: Lambda;

  constructor(groups: AccountGroupT[]) {
    this.groups = observable(groups);

    this.onChangeDisposer = this.groups.observe(change => {
      console.log('group change', change);
    });
  }

  @action addGroup(group: AccountGroupT) {
    this.groups.push(group);
  }

  map<U>(
    callback: (
      value: AccountGroupT,
      index: number,
      array: AccountGroupT[]
    ) => U,
    thisArg?: any
  ): U[] {
    return this.groups.map(callback, thisArg);
  }

  discard() {
    this.onChangeDisposer();
  }
}

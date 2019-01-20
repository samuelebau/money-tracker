import { observable, observe, action, toJS, Lambda } from 'mobx';

export interface CategoryT {
  id: string;
  name: string;
  kind: 'Income' | 'Expense';
  visible: boolean;
  color: string;
  icon: string;
  order: number;
}

export class CategorySettingsStore {
  @observable cateogires: CategoryT[];

  constructor(categories: CategoryT[]) {
    this.cateogires = categories;
  }
}

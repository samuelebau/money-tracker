import { observable } from 'mobx';
import { SymbolT } from 'features/symbol';

enum TransactionKind {
  Expense,
  Transfer,
  Income
}

interface RegularTransactionT {
  id: string;
  kind: TransactionKind.Expense | TransactionKind.Income;
  date: number;
  note?: string;
  categoryId: string;
  accountId: string;
  amount: number;
  symbol: SymbolT;
}

interface TransferTransactionT {
  id: string;
  kind: TransactionKind.Transfer;
  date: number;
  note?: string;
  accountId: string;
  amount: number;
  symbol: SymbolT;
  linkedAccountId: string;
  linkedAmount: number;
  linkedSymbol: SymbolT;
}

type TransactionT = RegularTransactionT | TransferTransactionT;

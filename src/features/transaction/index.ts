import { MoneyCode } from 'features/money';

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
  code: MoneyCode;
}

interface TransferTransactionT {
  id: string;
  kind: TransactionKind.Transfer;
  date: number;
  note?: string;
  accountId: string;
  amount: number;
  code: MoneyCode;
  linkedAccountId: string;
  linkedAmount: number;
  linkedCode: MoneyCode;
}

type TransactionT = RegularTransactionT | TransferTransactionT;

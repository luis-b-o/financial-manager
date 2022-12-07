import { AggregateID } from '@src/libs/ddd';

export interface AccountProps {
  name: string;
  description: string;
  balance: number;
  type: AccountTypes;
  bank: AggregateID;
  owner: AggregateID;
  creditCards: AggregateID[];
}

export interface CreateAccountProps {
  name: string;
  description: string;
  type: AccountTypes;
  bank: AggregateID;
  owner: AggregateID;
}

export enum AccountTypes {
  wallet = 'wallet',
  checking = 'checking',
  saving = 'saving',
  investiment = 'investiment',
  other = 'other',
}

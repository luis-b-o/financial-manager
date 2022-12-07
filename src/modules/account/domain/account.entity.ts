import { AggregateID, AggregateRoot } from '@src/libs/ddd';
import {
  AccountProps,
  CreateAccountProps,
} from '@src/modules/account/domain/account.types';
import { v4 } from 'uuid';

export class AccountEntity extends AggregateRoot<AccountProps> {
  protected readonly _id: AggregateID;

  static create(create: CreateAccountProps): AccountEntity {
    const id = v4();

    const props: AccountProps = { ...create, balance: 0, creditCards: [] };
    const account = new AccountEntity({ id, props });

    return account;
  }

  validate(): void {
    // entity business rules validation to protect it's invariant before saving entity to a database
  }
}

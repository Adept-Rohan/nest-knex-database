import { InjectKnex, KnexMutationBase } from '@org4/knex';
import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { Knex } from 'knex';

@Injectable()
export class UserService extends KnexMutationBase<
  CreateUserInput,
  UpdateUserInput
>('user') {
  constructor(@InjectKnex() readonly knex: Knex) {
    super(knex);
  }

  async findById(id: number) {
    const user = await this.table.where({ id });
    return user;
  }
}

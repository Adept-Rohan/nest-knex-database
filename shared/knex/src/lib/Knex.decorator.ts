import { Inject } from '@nestjs/common';
import { DEFAULT_KNEX_TOKEN } from './contsant';

export const InjectKnex = Inject(DEFAULT_KNEX_TOKEN);

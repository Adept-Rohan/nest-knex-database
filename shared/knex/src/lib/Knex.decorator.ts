import { Inject } from '@nestjs/common';
import { DEFAULT_KNEX_TOKEN, getKnexProviderToken } from './contsant';

export function InjectKnex(token = DEFAULT_KNEX_TOKEN) {
  return Inject(getKnexProviderToken(token));
}

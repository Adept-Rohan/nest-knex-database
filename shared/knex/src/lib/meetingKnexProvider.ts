import { Logger, Provider } from '@nestjs/common';
import knex from 'knex';
import { DEFAULT_KNEX_TOKEN } from './contsant';
import { join } from 'path';

export const MeetingKnexProvider: Provider = {
  provide: DEFAULT_KNEX_TOKEN,
  useFactory: () => {
    const logger = new Logger('LocalKnexProvider');

    const instance = knex({
      client: 'mysql',
      debug: true,
      connection: {
        host: 'devdb.channakyasoft.com',
        port: 3306,
        database: 'meeting_demo',
        user: 'channakya',
        password: 'Ch@nn@ky@123#',
      },
      pool: {
        min: 2,
        max: 10,
      },
      migrations: {
        tableName: 'knex_migrations',
        directory: join(__dirname, 'migrations'),
      },
      log: {
        debug: (m) => logger.debug(m),
        error: (m) => logger.error(m),
        warn: (m) => logger.warn(m),
      },
    });
    return instance
      .raw('select 1+1 as result')
      .then(() => {
        logger.log('Local Datbase succesfully connected');
        return instance;
      })
      .catch((err) => {
        logger.error(err);
        process.exit(1);
      });
  },
};

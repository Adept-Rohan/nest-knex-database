import { ConfigurableModuleBuilder, Provider } from '@nestjs/common';
import { Knex } from 'knex';
export const DEFAULT_KNEX_TOKEN = 'default-knex';

export const {
  ConfigurableModuleClass,
  ASYNC_OPTIONS_TYPE,
  MODULE_OPTIONS_TOKEN,
  OPTIONS_TYPE,
} = new ConfigurableModuleBuilder<Knex.Config>()
  .setClassMethodName('forRoot')
  .setExtras({ connectionName: '' }, (defination, extras) => {
    const optionProvider = defination.providers![0] as Provider;
    extras.connectionName ||= DEFAULT_KNEX_TOKEN;

    if ('provide' in optionProvider)
      optionProvider.provide = `${optionProvider.provide.toString()}-options-${
        extras.connectionName
      }`;

    return defination;
  })
  .build();

export function getKnexOptionsToken(connectionName = DEFAULT_KNEX_TOKEN) {
  return `${MODULE_OPTIONS_TOKEN.toString()}-options-${connectionName}`;
}

export function getKnexProviderToken(connectionName = DEFAULT_KNEX_TOKEN) {
  return `${MODULE_OPTIONS_TOKEN.toString()}-provider-${connectionName}`;
}

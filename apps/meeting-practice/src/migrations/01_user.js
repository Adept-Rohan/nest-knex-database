/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = function (knex) {
  return knex.schema.createTable('user', (table) => {
    table.increments('id');
    table.string('userName').notNullable();
    table.string('email').notNullable();
    table.string('address').notNullable();
    table.number('phoneNumber').notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.down = function (knex) {
  return knex.schema.dropTable('user');
};

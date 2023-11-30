import { Knex } from 'knex';

// Knex base function that takes tableName as a parameter and return a class
export function KnexFindBase(tableName: string) {
  // KnexFindBaseService is the class that is returned from the knexFindBase function
  return class KnexFindBaseService {
    // The class has the property tableName which is initialized and is passed on by the KnexFindBase function.
    tableName = tableName;

    //The given constructor takes Knex instance as a parameter and can be used in the function
    constructor(readonly knex: Knex) {}

    // The get table function return  knex query builder which helps us to access the table.
    get table() {
      return this.knex(this.tableName);
    }

    //performs a select query to access all the data from the table
    findAll() {
      return this.table.select();
    }

    //performs a where query to select a particular data accesing it's id and gives us the first matching data
    findOne(id: number) {
      return this.table.where({ id }).first();
    }
  };
}

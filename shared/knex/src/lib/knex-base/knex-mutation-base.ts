import { Knex } from 'knex';
import { KnexFindBase } from './knex-find-base';

//This is a Knex Mutatuon Base function that takes table name as a parameter nd returns a KnexMutationBaseService. The function takes two config type as cretedtobase ,updatedtobase
export function KnexMutationBase<CreateDtoBase, UpdateDtoBase>(
  tableName: string
) {
  // The knexMutationBaseService is the class that is being retunred from the function KnexMutation base.
  return class KnexMutationBaseService extends KnexFindBase(tableName) {
    // The constructor takes knex instance as a parameter and calls the constructor of parent class knex find base using super(knex)
    constructor(readonly knex: Knex) {
      super(knex);
    }

    // performs a raw insert method of the data from create-dto
    createRaw(dto: CreateDtoBase) {
      return this.table.insert(dto);
    }

    // calls the createRaw method to perform insert method and uses the retunred id to fetch the newly created record using the id from the find One method inherited from the Knex find base.
    create(dto: CreateDtoBase) {
      return this.createRaw(dto).then((id) => this.findOne(id[0]));
    }

    // performs a raw update method of the data from the specified id coming from update-to-base
    updateRaw(id: number, dto: UpdateDtoBase) {
      return this.table.update(dto).where({ id });
    }

    // calls the updateRaw method to perform update method and uses the retunred id to fetch the newly updated record using the id from the find One method inherited from the Knex find base.
    update(id: number, dto: UpdateDtoBase) {
      return this.updateRaw(id, dto).then((id) => this.findOne(id[0]));
    }
  };
}

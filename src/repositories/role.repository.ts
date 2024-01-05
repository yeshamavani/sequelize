import {inject} from '@loopback/core';
import {SequelizeCrudRepository} from '@loopback/sequelize';
import {DbDataSource} from '../datasources';
import {Role, RoleRelations} from '../models';

export class RoleRepository extends SequelizeCrudRepository<
  Role,
  typeof Role.prototype.id,
  RoleRelations
> {
  constructor(@inject('datasources.db') dataSource: DbDataSource) {
    super(Role, dataSource);
  }
}

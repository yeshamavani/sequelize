import {Entity, model, property} from '@loopback/repository';

@model({
  name: 'roles',
  settings: {
    allowExtendedOperators: true,
  },
})
export class Role extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'array',
    itemType: 'string',
    required: true,
    postgresql: {
      dataType: 'varchar[]',
    },
  })
  permissions: string[];

  // @property({
  //   type: ['string'],
  //   postgresql: {
  //     dataType: 'varchar[]',
  //   },
  // })
  // permissions: string[];

  @property({
    type: 'string',
  })
  description?: string;

  constructor(data?: Partial<Role>) {
    super(data);
  }
}

export interface RoleRelations {
  // describe navigational properties here
}

export type RoleWithRelations = Role & RoleRelations;

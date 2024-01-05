import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {SequelizeDataSource} from '@loopback/sequelize';

const config = {
  name: 'db',
  connector: 'postgresql',
  host: 'localhost',
  port: 5432,
  user: 'postgres',
  password: 'password',
  database: 'example_seq',
  schema: 'main',
  allowExtendedOperators: true,
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class DbDataSource
  extends SequelizeDataSource
  implements LifeCycleObserver
{
  static dataSourceName = 'db';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.db', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}

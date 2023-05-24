
      import { DataSource } from 'typeorm';
      import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
      import entites from '../features/entites';
      const options: PostgresConnectionOptions = {
        type: 'postgres',
        useUTC: true,
        url: process.env.CONNECTION_STRING,
        logging: false,
        migrationsRun: true,
        entities: [...entites],
        ssl: true,
      };
      export default new DataSource(options);
    
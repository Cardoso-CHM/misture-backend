require('dotenv').config();

module.exports = {
  type: 'postgres',
  port: 5432,
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  migrations: ['./src/shared/infra/typeorm/migrations/*.ts'],
  entities: ['./src/shared/infra/typeorm/entities/*.ts'],
  cli: {
    migrationsDir: './src/shared/infra/typeorm/migrations',
  },
};

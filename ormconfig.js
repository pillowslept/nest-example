require('dotenv').config();

module.exports = {
  name: 'default',
  type: process.env.DATABASE_PROVIDER,
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  synchronize: false,
  dropSchema: false,
  logging: true,
  entities: ['src/**/*.entity.ts', 'dist/**/*.entity.js'],
};

require('dotenv').config()

module.exports = {
  HOST: process.env.DB_HOST,
  USER: process.env.DB_USER,
  PORT: process.env.DB_PORT,
  PASSWORD: process.env.DB_PASSWORD,
  DATABASE: process.env.DB_NAME,
};
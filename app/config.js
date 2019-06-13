import { config } from 'dotenv';
config();

const envVars = process.env;

const configurations = Object.freeze({
  env: envVars.NODE_ENV,
  port: envVars.PORT,
  mongoUri: envVars.MONGO_URL,
  password: envVars.PASSWORD,
  secret: envVars.TOKEN_SECRET,
  corsOrigin: envVars.CORS_ORIGIN
});

export default configurations;
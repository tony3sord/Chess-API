import * as dotenv from "dotenv";
dotenv.config();

const port: number = parseInt(process.env.PORT as string);

export const config = {
  port: port || 3000,
  db_protocol: process.env.FIREBASE_PROTOCOL,
  db_host: process.env.FIREBASE_HOST,
  db_port: process.env.FIREBASE_PORT,
  documentation: process.env.DOCUMENTATION,
};

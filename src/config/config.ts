import * as dotenv from "dotenv";
dotenv.config();
const port: number = parseInt(process.env.PORT || "3000");

export const config = {
  port: port || 3000,
};

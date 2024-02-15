import { config } from "dotenv";

config();

export const appConfig = {
  port: process.env.PORT || 3001,
  connectionUrl: process.env.CONNECTION_URL,
  clientUrl: process.env.CLIENT_URL,
};

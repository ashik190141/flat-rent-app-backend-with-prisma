import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join((process.cwd(), ".env")) });

export default {
  port: process.env.PORT,
  accessToken: process.env.ACCESS_TOKEN,
  accessTokenExpire: process.env.ACCESS_TOKEN_EXPIRE,
};
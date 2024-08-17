import { Secret } from "jsonwebtoken";
import jwt from "jsonwebtoken";

const accessToken = (
  userData: {
    email: string;
  },
  secret: Secret,
  expire: string
) => {
  const token = jwt.sign(
    {
      email: userData.email,
    },
    secret,
    { expiresIn: expire, algorithm: "HS256" }
  );
    return token;
};

export const generateToken = {
  accessToken,
};

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

const verifyToken = (token:string, secret: Secret) => {
    const verify = jwt.verify(token, secret);
    return verify
}

export const generateToken = {
    accessToken,
    verifyToken
};

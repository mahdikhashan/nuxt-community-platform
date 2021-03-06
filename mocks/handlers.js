import { rest } from "msw"
import jwt from "jsonwebtoken"

export const handler = [
  rest.post("/.netlify/functions/login", (req, res, ctx) => {
    let token = jwt.sign(
        {
          username: "admin@randomsite.com",
          password: "super-hard-password",
        },
        "secret-no-laugh"
      );
    localStorage.setItem("auth._token.local", `Bearer ${token}`)

    return res(ctx.status(200));
  }),
  rest.get("/.netlify/functions/user", (req, res, ctx) => {
    return res(
      ctx.status(200)
    )
  }),
];

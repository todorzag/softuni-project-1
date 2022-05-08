import * as auth from "../services/auth.js";

export const authMiddleware = (ctx, next) => {
  ctx.user = auth.getUser();
  next();
};

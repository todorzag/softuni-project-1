import { render } from "../../node_modules/lit-html/lit-html.js";
import { navbarView } from "../views/navbarView.js";

let main = document.querySelector("#main-content");
let header = document.querySelector(".nav-bar");

const ctxRender = (templateResult) => {
  render(templateResult, main);
};

export const renderMiddleware = (ctx, next) => {
  ctx.render = ctxRender;
  next();
};

export const renderNav = (ctx, next) => {
  render(navbarView(ctx), header);
  next();
};

import { html } from "../../node_modules/lit-html/lit-html.js";
import * as auth from "../services/auth.js";

const loginTemplate = (submitHandler) => html`<section
  id="login-page"
  class="auth"
>
  <form id="login" @submit=${submitHandler}>
    <div class="container">
      <div class="brand-logo"></div>
      <h1>Login</h1>
      <label for="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Sokka@gmail.com"
      />

      <label for="login-pass">Password:</label>
      <input type="password" id="login-password" name="password" />
      <input type="submit" class="btn submit" value="Login" />
      <p class="field">
        <span
          >If you don't have profile click <a href="/register">here</a></span
        >
      </p>
    </div>
  </form>
</section>`;

export const loginView = (ctx) => {
  const submitHandler = (e) => {
    e.preventDefault();

    let form = new FormData(e.currentTarget);
    let email = form.get("email");
    let password = form.get("password");

    if (!email || !password) {
      window.alert("All fields should be filled");
      return;
    }

    auth.login(email, password).then(() => {
      ctx.page.redirect("/");
    });
  };
  ctx.render(loginTemplate(submitHandler));
};

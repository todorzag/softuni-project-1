import { html } from "../../node_modules/lit-html/lit-html.js";
import * as auth from "../services/auth.js";

const registerTemplate = (submitHandler) => html`<section
  id="register-page"
  class="content auth"
>
  <form id="register" @submit=${submitHandler}>
    <div class="container">
      <div class="brand-logo"></div>
      <h1>Register</h1>

      <label for="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="maria@email.com"
      />

      <label for="pass">Password:</label>
      <input type="password" name="password" id="register-password" />

      <label for="con-pass">Confirm Password:</label>
      <input type="password" name="confirm-password" id="confirm-password" />

      <input class="btn submit" type="submit" value="Register" />

      <p class="field">
        <span>If you already have profile click <a href="/login">here</a></span>
      </p>
    </div>
  </form>
</section>`;

export const registerView = (ctx) => {
  const submitHandler = (e) => {
    e.preventDefault();

    let form = new FormData(e.currentTarget);
    let email = form.get("email");
    let password = form.get("password");
    let confirm = form.get("confirm-password");

    if (!email || !password || !confirm) {
      window.alert("All fields should be filled");
      return;
    }

    if (password !== confirm) {
      window.alert("Passwords do not match!");
      return;
    }

    auth.register(email, password).then(() => ctx.page.redirect("/login"));
  };
  ctx.render(registerTemplate(submitHandler));
};

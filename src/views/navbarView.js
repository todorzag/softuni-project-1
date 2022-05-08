import { html } from "../../node_modules/lit-html/lit-html.js";

const loggedInTemplate = () => html`<!-- Logged-in users -->
  <div id="user">
    <a href="/create">Create Game</a>
    <a href="/logout">Logout</a>
  </div>`;

const guestTemplate = () => html` <!-- Guest users -->
  <div id="guest">
    <a href="/login">Login</a>
    <a href="/register">Register</a>
  </div>`;

const navbarTemplate = (isUser) => html`<!-- Navigation -->
  <h1><a class="home" href="/">GamesPlay</a></h1>
  <nav>
    <a href="/all-games">All games</a>
    ${isUser ? loggedInTemplate() : guestTemplate()}
  </nav>`;

export const navbarView = (ctx) => {
  return navbarTemplate(ctx.user);
};

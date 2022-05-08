import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import * as games from "../services/games.js";

const buttons = (game) => html`<div class="buttons">
  <a href="/details/edit/${game._id}" class="button">Edit</a>
  <a href="/details/delete/${game._id}" class="button">Delete</a>
</div>`;

const detailsTemplate = (game, user) => html`<section id="game-details">
  <h1>Game Details</h1>
  <div class="info-section">
    <div class="game-header">
      <img class="game-img" src=${game.imageUrl} />
      <h1>${game.title}</h1>
      <span class="levels">MaxLevel: ${game.maxLevel}</span>
      <p class="type">${game.category}</p>
    </div>

    <p class="text">${game.summary}</p>

    <!-- Bonus ( for Guests and Users ) -->
    <div class="details-comments">
      <h2>Comments:</h2>
      <ul>
        <!-- list all comments for current game (If any) -->
        <li class="comment">
          <p>Content: I rate this one quite highly.</p>
        </li>
        <li class="comment">
          <p>Content: The best game.</p>
        </li>
      </ul>
      <!-- Display paragraph: If there are no games in the database -->
      <p class="no-comment">No comments.</p>
    </div>

    <!-- Edit/Delete buttons ( Only for creator of this game )  -->
    ${user ? (user._id === game._ownerId ? buttons(game) : nothing) : nothing}
  </div>
</section>`;

export const detailsView = (ctx) => {
  games
    .getGame(ctx.params.id)
    .then((game) => ctx.render(detailsTemplate(game, ctx.user)));
};

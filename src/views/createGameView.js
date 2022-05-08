import { html } from "../../node_modules/lit-html/lit-html.js";
import * as games from "../services/games.js";

const createGameTemplate = (submitHandler) => html`<section
  id="create-page"
  class="auth"
>
  <form id="create" @submit=${submitHandler}>
    <div class="container">
      <h1>Create Game</h1>
      <label for="leg-title">Legendary title:</label>
      <input
        type="text"
        id="title"
        name="title"
        placeholder="Enter game title..."
      />

      <label for="category">Category:</label>
      <input
        type="text"
        id="category"
        name="category"
        placeholder="Enter game category..."
      />

      <label for="levels">MaxLevel:</label>
      <input
        type="number"
        id="maxLevel"
        name="maxLevel"
        min="1"
        placeholder="1"
      />

      <label for="game-img">Image:</label>
      <input
        type="text"
        id="imageUrl"
        name="imageUrl"
        placeholder="Upload a photo..."
      />

      <label for="summary">Summary:</label>
      <textarea name="summary" id="summary"></textarea>
      <input class="btn submit" type="submit" value="Create Game" />
    </div>
  </form>
</section>`;

export const createGameView = (ctx) => {
  const submitHandler = (e) => {
    e.preventDefault();

    let form = new FormData(e.currentTarget);

    let title = form.get("title");
    let category = form.get("category");
    let maxLevel = form.get("maxLevel");
    let imageUrl = form.get("imageUrl");
    let summary = form.get("summary");

    let game = {
      title,
      category,
      maxLevel,
      imageUrl,
      summary,
    };

    if (games.validateGame(game)) {
      alert("All fields must be filled!");
      return;
    }

    games.createGame(game).then(() => ctx.page.redirect("/"));
  };

  ctx.render(createGameTemplate(submitHandler));
};

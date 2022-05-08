import { html } from "../../node_modules/lit-html/lit-html.js";
import * as games from "../services/games.js";

const editTemplate = (game, submitHandler) => html`<section
  id="edit-page"
  class="auth"
>
  <form id="edit" @submit=${submitHandler}>
    <div class="container">
      <h1>Edit Game</h1>
      <label for="leg-title">Legendary title:</label>
      <input type="text" id="title" name="title" value=${game.title} />

      <label for="category">Category:</label>
      <input type="text" id="category" name="category" value=${game.category} />

      <label for="levels">MaxLevel:</label>
      <input
        type="number"
        id="maxLevel"
        name="maxLevel"
        min="1"
        value=${game.maxLevel}
      />

      <label for="game-img">Image:</label>
      <input type="text" id="imageUrl" name="imageUrl" value=${game.imageUrl} />

      <label for="summary">Summary:</label>
      <textarea name="summary" id="summary">${game.summary}</textarea>
      <input class="btn submit" type="submit" value="Edit Game" />
    </div>
  </form>
</section>`;

export const editView = (ctx) => {
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

    games.editGame(game, ctx.params.id).then(() => ctx.page.redirect("/"));
  };

  games
    .getGame(ctx.params.id)
    .then((game) => ctx.render(editTemplate(game, submitHandler)));
};

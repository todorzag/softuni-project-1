import * as games from "../services/games.js";

export const deleteView = (ctx) => {
  games.deleteGame(ctx.params.id).then(() => ctx.page.redirect("/"));
};

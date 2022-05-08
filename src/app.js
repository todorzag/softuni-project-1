import page from "../node_modules/page/page.mjs";

import { renderMiddleware, renderNav } from "./middleware/renderMiddleware.js";
import { homeView } from "./views/homeView.js";
import { detailsView } from "./views/detailsView.js";
import { loginView } from "./views/loginView.js";
import { authMiddleware } from "./middleware/authMiddleware.js";
import { logoutView } from "./views/logoutView.js";
import { registerView } from "./views/registerView.js";
import { deleteView } from "./views/deleteView.js";
import { editView } from "./views/editView.js";
import { allGamesView } from "./views/allGamesView.js";
import { createGameView } from "./views/createGameView.js";

page(authMiddleware);
page(renderMiddleware);
page(renderNav);

page("/", homeView);
page("/login", loginView);
page("/logout", logoutView);
page("/register", registerView);
page("/all-games", allGamesView);
page("/create", createGameView);
page("/details/:id", detailsView);
page("/details/delete/:id", deleteView);
page("/details/edit/:id", editView);

page.start();

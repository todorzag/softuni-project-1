import { getUser } from "./auth.js";

const baseUrl = `http://localhost:3030/data/games`;

export const getLatest = () =>
  fetch(`${baseUrl}?sortBy=_createdOn%20desc&distinct=category`)
    .then((res) => res.json())
    .catch((err) => console.error(err));

export const getGame = (id) =>
  fetch(`${baseUrl}/${id}`)
    .then((res) => res.json())
    .catch((err) => console.error(err));

export const deleteGame = (id) =>
  fetch(`${baseUrl}/${id}`, {
    method: "DELETE",
    headers: { "X-authorization": getUser().accessToken },
  })
    .then(() => {
      window.alert("Successfully deleted game!");
    })
    .catch((err) => window.alert(err));

export const validateGame = (game) => {
  const requiredFields = [
    "title",
    "category",
    "maxLevel",
    "imageUrl",
    "summary",
  ];

  return requiredFields.some((x) => !game[x]);
};

export const editGame = (game, id) =>
  fetch(`${baseUrl}/${id}`, {
    method: "PUT",
    headers: {
      "X-authorization": getUser().accessToken,
      "content-type": "application/json",
    },
    body: JSON.stringify(game),
  })
    .then(() => alert("Game successfully updated!"))
    .catch((err) => console.error(err));

export const getAllGames = () =>
  fetch(`${baseUrl}?sortBy=_createdOn%20desc`)
    .then((res) => res.json())
    .catch((err) => console.error(err));

export const createGame = (game) =>
  fetch(baseUrl, {
    method: "POST",
    headers: {
      "X-authorization": getUser().accessToken,
      "content-type": "application/json",
    },
    body: JSON.stringify(game),
  })
    .then(() => alert("Game successfully created!"))
    .catch((err) => console.error(err));

let baseUrl = `http://localhost:3030/users`;

const saveUser = (user) => {
  if (user.accessToken) {
    localStorage.setItem("user", JSON.stringify(user));
  }
};

export const getUser = () => {
  let serializedUser = localStorage.getItem("user");
  if (serializedUser) {
    return JSON.parse(serializedUser);
  }
};

const deleteUser = () => {
  localStorage.removeItem("user");
};

export const login = (email, password) => {
  return fetch(`${baseUrl}/login`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then((res) => res.json())
    .then((user) => {
      saveUser(user);
      window.alert("Successful login!");
      return user;
    })
    .catch((err) => window.alert(err));
};

export const logout = () =>
  fetch(`${baseUrl}/logout`, {
    headers: { "X-authorization": getUser().accessToken },
  })
    .then(() => {
      deleteUser();
      alert("Successful logout!");
    })
    .catch((err) => console.error(err));

export const register = (email, password) => {
  return fetch(`${baseUrl}/register`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then((res) => res.json())
    .then((user) => {
      window.alert("Successful register!");
      return user;
    })
    .catch((err) => window.alert(err));
};

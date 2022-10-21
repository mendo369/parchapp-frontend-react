const ENDPOINT = "https://parchapp.herokuapp.com/api/";

export default function register({ userName, name, email, avatar, password }) {
  return fetch(`${ENDPOINT}auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({ userName, name, email, avatar, password }),
  }).then((res) => {
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    return res.json();
  });
}

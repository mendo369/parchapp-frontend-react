const ENDPOINT = "http://localhost:4369/api/";

export default function register({ userName, name, email, avatar, password }) {
  return fetch(`${ENDPOINT}auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ userName, name, email, avatar, password }),
  }).then((res) => {
    if (!res.ok) {
      throw new Error(res.message);
    }
    return res.json();
  });
}

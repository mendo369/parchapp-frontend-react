const ENDPOINT = "http://localhost:4369/api/auth/login";

export default function register({ userName, name, email, avatar, password }) {
  return fetch(ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ userName, name, email, avatar, password }),
  }).then((res) => {
    if (!res.ok) {
      throw new Error("Response is no OK");
    }
    return res.json();
  });
}

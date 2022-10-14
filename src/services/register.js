const ENDPOINT = "http://localhost:4369/api/";

export default function login({ userName, password }) {
  return fetch(`${ENDPOINT}auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ userName, password }),
  }).then((res) => {
    if (!res.ok) {
      throw new Error("Response is no OK");
    }
    return res.json();
  });
}

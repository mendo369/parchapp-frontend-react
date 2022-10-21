const URL = "https://parchapp.herokuapp.com/api";

export default function likeParche({ id, token }) {
  fetch(`${URL}/parches/like`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id, token }),
  });
}

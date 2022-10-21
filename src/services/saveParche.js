const URL = "https://parchapp.herokuapp.com/api";

export default function SaveParche({ id, token }) {
  fetch(`${URL}/parches/save`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id, token }),
  });
}

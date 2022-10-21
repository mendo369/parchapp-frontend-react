const URL = "http://localhost:4369/api";

export default function SaveParche({ id, token }) {
  fetch(`${URL}/parches/save`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id, token }),
  });
}

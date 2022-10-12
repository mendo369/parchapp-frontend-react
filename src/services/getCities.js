const URL = "http://localhost:4369/api/cities";

export default function obtenerParches() {
  return fetch(URL)
    .then((res) => res.json())
    .then((response) => response);
}

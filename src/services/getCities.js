const URL = "http://localhost:4369/api/parches/cities";

export default function getCities() {
  return fetch(URL)
    .then((res) => res.json())
    .then((response) => response);
}

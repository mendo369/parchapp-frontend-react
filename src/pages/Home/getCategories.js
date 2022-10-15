const URL = "http://localhost:4369/api/parches/categories";

export default function getCategories() {
  return fetch(URL)
    .then((res) => res.json())
    .then((response) => response);
}

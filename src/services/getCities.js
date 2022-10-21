const URL = "https://parchapp.herokuapp.com/api/parches/cities";

export default function getCities() {
  return fetch(URL)
    .then((res) => res.json())
    .then((response) => response);
}

const URL = "https://parchapp.herokuapp.com/api/media";

export default function getAvatars() {
  return fetch(URL)
    .then((res) => res.json())
    .then((response) => response);
}

const URL = "http://localhost:4369/api/media";

export default function getAvatars() {
  return fetch(URL)
    .then((res) => res.json())
    .then((response) => response);
}
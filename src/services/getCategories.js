const URL = "https://parchapp.herokuapp.com/api/parches/categories";

export default function getCategories() {
  return fetch(URL)
    .then((res) => res.json())
    .then((response) => {
      return response;
      console.log(response);
    });
}

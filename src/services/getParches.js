const URL = "http://localhost:4369/api/parches";

export default function getParches({
  keyword = null,
  page = 1,
  limit = "",
} = {}) {
  //se usa un array vacío debido a una problema con la api hal momento de realizar la solicitud en la paginación
  return fetch(`${URL}/?city=${keyword}&limit=${limit}&page=${page}`)
    .then((res) => res.json())
    .then((response) => {
      const parches = response.map((parche) => parche);
      return parches;
    });
}

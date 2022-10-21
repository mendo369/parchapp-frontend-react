const URL = "https://parchapp.herokuapp.com/api/";

export default function getParchesUser({ token }) {
  //se usa un array vacío debido a una problema con la api hal momento de realizar la solicitud en la paginación
  return fetch(`${URL}parches/user/${token}`)
    .then((res) => res.json())
    .then((res) => {
      console.log("respuesta de getParchesUser", res);
      return res;
    })
    .catch((err) => {
      throw new Error("Fallo al cargar parches de usuario");
    });
}

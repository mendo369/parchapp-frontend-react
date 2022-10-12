import { useState, useEffect, useContext } from "react";
import getParches from "../services/getParches";
import ParcheContext from "../context/parcheContext";

const INITIAL_PAGE = 1;

export function useParches({ keyword } = { keyword: "" }) {
  //iniciaremos la busqueda con un keyword con el valor vacío
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(INITIAL_PAGE);
  const { parches, setParches } = useContext(ParcheContext);

  useEffect(() => {
    setLoading(true);
    getParches({ keyword }).then((data) => {
      setParches(data);
      setLoading(false);
    });
  }, [keyword, setParches]);
  useEffect(() => {
    if (page === INITIAL_PAGE) return;

    getParches({ keyword, page: page }).then(
      (nextParches) =>
        setParches((prevParches) => prevParches.concat(nextParches)) //cualquier función set de un estado retorna una función con el valor del estado anterior
    );
  }, [page]);

  return { loading, parches, setPage };
}

import { useEffect, useState } from "react";
import { ApiFetch } from "../helpers/ApiFetch";

export const useFetchComic = () => {
  const [datos, setDatos] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    ApiFetch().then((data) => {
      setDatos({ data: data, loading: false });
    });
  }, []);

  return datos;
};

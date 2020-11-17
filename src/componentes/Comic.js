import React from "react";
import { useFetchComic } from "../hooks/useFetchComic";
import { Calificacion } from "./Calificacion";

export const Comic = () => {
  const { data, loading } = useFetchComic();

  return (
    <>
      <div className="card-comic">
        <h2 className="card-comic-title">
          {loading && <p>Cargando Comic.....</p>}
          {data.safe_title}
          <small className="card-comic-title-small">{data.num}</small>
        </h2>
        <img
          className="card-comic-img"
          src={data.img}
          width="100%"
          alt={data.alt}
        />
        {!loading && <Calificacion />}
      </div>
    </>
  );
};

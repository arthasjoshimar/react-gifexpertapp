import React/*, { useEffect, useState }*/ from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
// import { getGifs } from "../helpers/getGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
  // const [images, setImages] = useState([]);

  // useEffect(() => {
  //   getGifs(category)
  //     .then(imgs => setImages(imgs));
  // }, [category]);

  const {loading, data: images} = useFetchGifs(category);
 
  return (
    <>
      <h3 className="animate__animated animate__fadeIn">{category}</h3>
     
      {/* {loading? 'Cargando':'Data Cargada'} */}
      {loading && <p className="animate__animated animate__flash">loading</p>}
    
      <div className="card-grid">
        {images.map((image) => {
          return <GifGridItem key={image.id} {...image} />;
          //return <h1> { JSON.stringify(image) } </h1>
        })}
      </div>
    </>
  );
};

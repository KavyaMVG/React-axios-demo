
import React from "react";

const Card = ({data}) => {
   return(
    <div>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
      <img alt="..." src={data.images && data.images[0]}></img>
    </div>
   )

}  
  export default Card;


  
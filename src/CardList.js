import axios from "axios"
import React, { useEffect, useState } from "react"
import Card from "./Card";

const CardList = () =>{
    const [proList, setProductList] = useState([])
    const API_URL = "https://dummyjson.com/products/";

   const productList =  async () =>{
    const { data } = await axios.get(API_URL)
    setProductList(data.products);
   }
   useEffect(() =>{
    productList()
   }, [])



    return(
        <div>
            { 
             proList.map(pro => <Card data={pro} key={pro.id}/>)
            }
            
        </div>
    )

}

export default CardList
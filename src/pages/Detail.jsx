import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const param = useParams();

  console.log(param);
  const getProductByID = async () => {
    const response = await fetch(
      `https://apistore.cybersoft.edu.vn/api/Product/getid?id=${param.prodID}`
    );
    const jsonRes = await response.json();
    const data = jsonRes.content
    console.log(data);
  };

  useEffect(()=>{
    getProductByID()
  },[])

  return (
    <div className="container">
      <h3>detail - prodID: {param.prodID}</h3>

    </div>
  );
};

export default Detail;

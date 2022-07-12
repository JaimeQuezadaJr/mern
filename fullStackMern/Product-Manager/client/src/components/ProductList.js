import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

const ProductList = (props) => {
  const {product, setProduct} = props;

  useEffect(() => {
    axios.get("http://localhost:8000/api/products")
      .then((res) => {
        console.log(res.data);
        setProduct(res.data);
    })
      .catch((err) => {
        console.log(err);
    })
  }, [])

  return (
    <div>
      <h1>All Products:</h1>
      {
        product.map((oneProduct) => {
          return <Link to ={`/${oneProduct._id}`}><p key={oneProduct._id}>{oneProduct.title}</p></Link>
        })
      }
    </div>
  )
}

export default ProductList;
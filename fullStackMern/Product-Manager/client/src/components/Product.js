import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

const Product = (props) => {
    const[product, setProduct] = useState({});
    const {id} = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then((res) => {
                console.log(res.data);
                setProduct(res.data);
            })
            .catch((err) => {
                console.log('Something went wrong when retrieving movie by ID', err);
            })
    },[]);
    
  return (
    <div>
        <h1>{product.title}</h1>
        <p>Price: ${product.price}</p>
        <p>Description: {product.description}</p>
    </div>
  )
}

export default Product
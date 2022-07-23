import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

const Product = (props) => {
    const[product, setProduct] = useState({});
    const {id} = useParams();
    const {removeProduct} = props;
    const navigate = useNavigate();

    const deleteProduct = () => {
        axios.delete(`http://localhost:8000/api/products/${id}`)
          .then((res) => {
            console.log(res);
            console.log(res.data);
            navigate("/");
          })
          .catch(err => console.log(err))
      }

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
    <div className='wrapper1'>
        <div className='card'>
            <h1>{product.title}</h1>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
            <Link to = {'/'}><button>Home</button></Link>
            <button onClick={deleteProduct}>Delete</button>
        </div>
    </div>
  )
}

export default Product;
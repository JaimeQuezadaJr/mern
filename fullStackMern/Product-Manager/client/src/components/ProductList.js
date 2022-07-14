import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

const ProductList = (props) => {
  const {removeProduct, product, setProduct} = props;
  const deleteProduct = (productId) => {
    axios.delete(`http://localhost:8000/api/products/${productId}`)
      .then((res) => {
        removeProduct(productId)
      })
      .catch(err => console.log(err))
  }

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
      <div className="wrapper1">
      {
        product.map((oneProduct) => {
          return <div className= "card" key={oneProduct._id}>
            <Link to ={`/${oneProduct._id}`}><h2>{oneProduct.title}</h2></Link>
            <Link to = {`/edit/${oneProduct._id}`}><button>Edit</button></Link>
            <button onClick={(e) => {deleteProduct(oneProduct._id)}}>Delete</button>
            </div>
        })
      }
      </div>
    </div>
  )
}

export default ProductList;
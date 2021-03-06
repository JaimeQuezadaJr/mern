import React, { useState } from 'react';
import axios from 'axios';

const ProductForm = (props) => {
    const {product, setProduct} = props;
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");

    const onSubmitHandler = (e) => {
        e.preventDefault();
        setTitle("");
        setPrice("");
        setDescription("");
        axios.post('http://localhost:8000/api/products', {
            title: title,
            price: price,
            description: description
        })
        .then(res => {
            console.log(res);
            console.log(res.data);
            setProduct([...product, res.data]);
        })
        .catch(err => console.log(err))
    }

  return (
    <div>
        <h1>Product Manager</h1>
        <form onSubmit={onSubmitHandler}>
            <p>
                <label htmlFor='title'>Title</label><br/>
                <input type="text" value={title} onChange = {(e)=>setTitle(e.target.value)}/>
            </p>
            <p>
                <label htmlFor='price'>Price</label><br/>
                <input type="number" value ={price} onChange = {(e)=>setPrice(e.target.value)}/>
            </p>
            <p>
                <label htmlFor='description'>Description</label><br/>
                <input type="text" value = {description} onChange = {(e)=>setDescription(e.target.value)}/>
            </p>
            <input type="submit" value="Create"/>
        </form>
    </div>
    )
  }

export default ProductForm;


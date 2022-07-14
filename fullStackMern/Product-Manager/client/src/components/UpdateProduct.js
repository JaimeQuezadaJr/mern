import React, {useState, useEffect} from 'react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const UpdateProduct = () => {
    const {id} = useParams();
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then((res) => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
            .catch(err => console.log(err))
    }, [])

    const updateSingleProduct = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/products/edit/${id}`, {
            title:title,
            price:price,
            description:description
        })
            .then((res) => {
                console.log(res);
                navigate('/');
            })
            .catch(err => console.log(err))
    }
  return (
    <div>
        <h1>Update Product</h1>
        <form onSubmit={updateSingleProduct}>
            <p>
                <label htmlFor='title'>Title</label><br/>
                <input type="text" name='title' value={title} onChange = {(e)=>setTitle(e.target.value)}/>
            </p>
            <p>
                <label htmlFor='price'>Price</label><br/>
                <input type="number" name='price' value ={price} onChange = {(e)=>setPrice(e.target.value)}/>
            </p>
            <p>
                <label htmlFor='description'>Description</label><br/>
                <input type="text" name='description' value = {description} onChange = {(e)=>setDescription(e.target.value)}/>
            </p>
            <input type="submit" value="Update"/>
            <Link to = {'/'}><button>Home</button></Link>
        </form>
        </div>
  )
}

export default UpdateProduct;
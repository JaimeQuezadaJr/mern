import React, {useState, useEffect} from 'react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Paper, Card, CardContent, Button, InputLabel, FormControl, OutlinedInput, TextField} from '@mui/material';

const UpdateAuthor = () => {
    const {id} = useParams();
    const [name, setName] = useState("");
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
            .then((res) => {
                setName(res.data.name);
            })
            .catch(err => setErrors(err.response.data.error.errors));
    }, [])

    const updateSingleAuthor = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/authors/edit/${id}`, {
            name:name,
        })
            .then((res) => {
                console.log(res);
                navigate('/');
            })
            .catch(err => setErrors(err.response.data.error.errors));
    }
  return (
    <div className='card-form'>
    <h1>Favorite Authors</h1>
    <Link to={'/'}>Home</Link>
    <p className='author-font'>Edit this author:</p>
    <Paper elevation={3} style={{width:300}}>
            
            <form onSubmit={updateSingleAuthor}>
                <div>
                    <label htmlFor='name'>Name</label><br/>
                    <input type="text" value={name} onChange = {(e)=>setName(e.target.value)}/>
                    {errors.name && <p className='validation'>- {errors.name.message}</p>}
                </div>
                <br></br>
                <Link to={'/'}> 
                    <Button variant="contained" color="primary">
                        Cancel
                    </Button>
                </Link>
                    <Button type="submit" variant="contained" color="primary">
                        Submit
                    </Button>
            </form>
        </Paper>
        </div>
  )
}

export default UpdateAuthor;
import React, { useState } from 'react'
import { Paper, Card, CardContent, Button, InputLabel, FormControl, OutlinedInput, TextField} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


const AuthorForm = (props) => {
    const {author, setAuthor} = props;
    const [name, setName] = useState("");
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/authors', {
            name: name,
        })
        .then(res => {
            console.log(res);
            console.log(res.data);
            // setAuthor([...author, res.data]);
            navigate('/');
        })
        .catch(err => setErrors(err.response.data.error.errors));
    }
  return (
    <div className='card-form'>
    <h1>Favorite Authors</h1>
    <Link to={'/'}>Home</Link>
    <p className='author-font'>Add a new author:</p>
    <Paper elevation={3} style={{width:300}}>
            
            <form onSubmit={onSubmitHandler}>
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

export default AuthorForm;
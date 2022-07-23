import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@mui/material';
import { TabUnstyled } from '@mui/base';

const AuthorList = (props) => {
    const [author, setAuthor] = useState([]);
    const removeAuthor = (authorId) => {
        setAuthor(author.filter(thisAuthor => thisAuthor._id != authorId));
      }
    const deleteAuthor = (AuthorId) => {
      axios.delete(`http://localhost:8000/api/authors/${AuthorId}`)
        .then((res) => {
          removeAuthor(AuthorId)
        })
        .catch(err => console.log(err))
    }
  
    useEffect(() => {
      axios.get("http://localhost:8000/api/authors")
        .then((res) => {
          console.log(res.data);
          setAuthor(res.data);
      })
        .catch((err) => {
          console.log(err);
      })
    }, [])
  
    return (
      <div>
        <h1>Favorite Authors</h1>
        <Link to={'/new'}>Add a new Author</Link>
        <p className='author-font'>We have quotes by:</p>
        <div className="wrapper1">
            <Table id='table'>
                <TableHead>
                    <TableRow>
                        <TableCell><h3>Author Name</h3></TableCell>
                        <TableCell><h3>Actions Available</h3></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
        {
          author.map((oneAuthor) => {
            return <TableRow className= "card" key={oneAuthor._id}>
                        <TableCell>{oneAuthor.name}</TableCell>
                        <TableCell>
                            <Link to = {`/edit/${oneAuthor._id}`}><Button variant="contained" color="primary">Edit</Button></Link>
                            <Button variant="contained" color="error" onClick={(e) => {deleteAuthor(oneAuthor._id)}}>Delete</Button>
                        </TableCell>
                     
        
              {/* <h2>{oneAuthor.name}</h2> */}
              {/* <Link to = {`/edit/${oneAuthor._id}`}><Button variant="contained" color="primary">Edit</Button></Link>
              <Button variant="contained" color="primary" onClick={(e) => {deleteAuthor(oneAuthor._id)}}>Delete</Button> */}
              </TableRow>
          })
        }
        </TableBody>
        </Table>
        </div>
        
      </div>
    )
  }
  
  export default AuthorList;
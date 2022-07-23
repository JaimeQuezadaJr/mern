import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Author from './components/Author';
import UpdateAuthor from './components/UpdateAuthor';
import AuthorList from './components/AuthorList';
import AuthorForm from './components/AuthorForm';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Routes>
            <Route path='/' element={<AuthorList/>}/>
            <Route path='/new' element={<AuthorForm/>}/>
            <Route path='/edit/:id' element={<UpdateAuthor/>}/>
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

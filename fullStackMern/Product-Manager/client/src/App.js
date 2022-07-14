import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Product from './components/Product';
import Main from './views/Main';
import UpdateProduct from './components/UpdateProduct';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Routes>
            <Route path='/' element={<Main/>}/>
            <Route path='/:id' element={<Product/>}/>
            <Route path='/edit/:id' element={<UpdateProduct/>}/>
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

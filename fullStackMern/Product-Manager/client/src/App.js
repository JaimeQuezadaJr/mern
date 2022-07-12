import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Product from './components/Product';
import Main from './views/Main';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Routes>
            <Route path='/' element={<Main/>}/>
            <Route path='/:id' element={<Product/>}/>
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

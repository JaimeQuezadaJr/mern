import React, {useState} from 'react'
import axios from 'axios';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';

const Main = (props) => {
    const [product, setProduct] = useState([]);
    const removeProduct = (productId) => {
      setProduct(product.filter(thisProduct => thisProduct._id != productId));
    }
  return (
    <div>
        <ProductForm product={product} setProduct={setProduct}/>
        <hr/>
        <ProductList product={product} setProduct={setProduct} removeProduct={removeProduct}/>
    </div>
  )
}

export default Main;
import './App.css';
// import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductItem from './Components/ProductItem';
import productItems from './Components/products';
import { useState } from 'react';
// import AddProduct from './Components/AddProduct';


function App() {

  const [products, setProducts] = useState(productItems);
  const [selected, setSelected] = useState([]);

console.log(products, 'products');
console.log(selected, 'selected');

  const handleCheckboxChange = (id) => {
    if (selected.includes(id)) {
      setSelected(selected.filter((item) => item !== id));
    } else {
      setSelected([...selected, id]);
    }
  };



  const handleDelete = () => {
    setProducts(products.filter((item) => !selected.includes(item.id)));
    setSelected([]);
  }


  return (
    <div className="App">
      <div className="products">
        <h1>Products List</h1>
        <div className="btnDiv">
          <button className="btnAdd">ADD</button>
          <button className="btnDelete" onClick={handleDelete}>MASS Delete</button>
        </div>
      </div>
      <div className="newProducts" >
        {products.map((product) => {
          return (
            <ProductItem
              key={product.id}
              product={product}
              handleCheckboxChange={handleCheckboxChange}
            />
          )
        })}
      </div>
    </div>
  );
}

export default App;

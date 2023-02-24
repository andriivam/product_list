import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductItem from './Components/ProductsList/ProductItem';
import AddProduct from './Components/AddProduct/AddProduct';


function App() {

  return (
    <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<ProductItem/>} />
            <Route path="/addNewProduct" element={<AddProduct/>} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;

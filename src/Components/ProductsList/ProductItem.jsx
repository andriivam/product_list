import React, { useState, useEffect } from 'react';
import './products.css';
import { useNavigate } from "react-router-dom";
import { deleteProducts } from '../axios/axiosGlobal';
import axios from "axios";

export default function ProductItem() {

    const [products, setProducts] = useState([]);

    const [selected, setSelected] = useState([]);

    const navigate = useNavigate();


    const getProducts = async () => {
        try {
            const response = await axios.get('http://localhost:3001/products_list');
            setProducts(response.data)
            console.log(response, 'response')
            console.log(products, 'products')
        }
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getProducts()
    }, [])

    console.log(selected, 'selected');

    const handleCheckboxChange = (id) => {
        if (selected.includes(id)) {
            setSelected(selected.filter((item) => item !== id));
        } else {
            setSelected([...selected, id]);
        }
    };

    const handleDelete = (id) => {
        deleteProducts(id);
        window.location.reload();
    }


    return (
        <>
            <div className="header">
                <h1>Products List</h1>
                <div className="btnDiv">
                    <button className="btnAdd" onClick={() => { navigate('/addNewProduct') }} >ADD</button>
                    <button className="btnDelete" onClick={() => { handleDelete(selected) }}>MASS Delete</button>
                </div>
            </div>
            <div className="productItem">
                {products.map((product) => (
                    <div key={product.id} className="productBox">
                        <input className="checkbox" type="checkbox" onChange={() => handleCheckboxChange(product.id)} />
                        <ul className="list">
                            <li>{product.sku}</li>
                            <li>{product.name}</li>
                            <li>{product.price} $</li>
                            {product.size !== null ? <li>Size: {product.size} MB</li> : null}
                            {product.weight !== null ? <li>Weight: {product.size} KG</li> : null}
                            {product.height || product.width || product.length !== null ? <li>Dimension: {product.height}x{product.width}x{product.length}</li> : null}
                        </ul>
                    </div>
                ))}
            </div>
        </>

    )
}

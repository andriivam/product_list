import React from 'react';
import './products.css';

export default function ProductItem1({ product, handleCheckboxChange}) {



    return (
        <div className="productBox">
            <input type="checkbox"
                // checked={selected.includes(product.id)}
                onChange={() => handleCheckboxChange(product.id)}
            />
            <ul className="list">
                <li>{product.SKU}</li>
                <li>{product.Name}</li>
                <li>{product.Price}</li>
                <li>{product.Value}</li>
            </ul>
        </div>
    )
}

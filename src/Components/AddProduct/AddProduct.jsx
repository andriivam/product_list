import React, { useState } from 'react';
import './addProduct.css';
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { addProduct } from '../axios/axiosGlobal';
// import axios from "axios";

export default function AddProduct() {

  const [productType, setProductType] = useState('productType');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  console.log(errors);
  const navigate = useNavigate();


  const handleProductTypeChange = (event) => {
    const type = event.target.value;
    setProductType(type);
    console.log(type);
  }


  const onSubmit = async (data) => {
    addProduct(data);
    console.log(data, ' data from submit');
    navigate('/');
  };

  return (
    <div>
      <div className="addProductHeader">
        <h1>Add New Product</h1>
        <div className="btnDiv">
          <button className="btnSave" type="Submit" name="Submit" onClick={handleSubmit(onSubmit)}>Save</button>
          <button className="btnCancel" onClick={() => { navigate('/') }} >Cancel</button>
        </div>
      </div>
      {/* Form section */}
      <div className="container">
      <form action="" className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="box">
          <label htmlFor="sku">SKU </label>
          <div className="inputBox">
          <input type="text" name="sku" {...register('sku', { required: true })} /> 
            {errors.sku && (<p style={{ color: "red" }}>Please, submit required data!</p>)}
          </div>
        </div>
        <div className="box">
          <label htmlFor="name">Name</label>
          <div className="inputBox">
            <input type="text" name="name" {...register('name', {required: true})} />
            {errors.name && (<p style={{ color: "red" }}>Please, submit required data!</p>)}
          </div>
        </div>
        <div className="box">
          <label htmlFor="price">Price($)</label>
          <div className="inputBox">
            <input type="number" name="price" {...register('price', {required: true})} />
            {errors.price && (<p style={{ color: "red" }}>Please, submit required data!</p>)}
          </div>
        </div>
        {/* select box */}
        <div className="select">
          <label htmlFor="TypeSwitcher">Type Switcher</label>
          <select name="" id="productType" value={productType} onChange={handleProductTypeChange}>
            <option value="productType">Product Type</option>
            <option value="dvd">DVD</option>
            <option value="book">Book</option>
            <option value="furniture">Furniture</option>
          </select>
          {productType === 'dvd' ? <label>Size (MB)
        <p>Please, provide size in MB</p>
            <input type="number" {...register('size')} /></label> : null}
          {productType === 'book' ? <label>Weight (KG)
          <p>Please, provide size in KG</p>
            <input type="number" {...register('weight')} /></label> : null}
          {productType === 'furniture' ? (<div className="dimension">
          <p>Please, provide dimensions in CM</p>
            <label className="dimensions">Height (CM)<input type="number" {...register('height')} /></label>
            <label className="dimensions">Width (CM)<input type="number" {...register('width')} /></label>
            <label className="dimensions">Length (CM)<input type="number" {...register('length')} /></label> </div>)
            : null}
        </div>
      </form>
      </div>
    </div>
  )
}

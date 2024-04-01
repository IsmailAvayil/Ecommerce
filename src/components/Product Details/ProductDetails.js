import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetails.css";
import instance from "../../axios-instance";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await instance.get(`/products/${id}`).catch((err) => {
        console.log("err", err);
      });
      setProduct(response.data);
    };

    fetchProduct();
  }, [id]);
  if(!id){
    return<div>Loading.....</div>
  }

  return (
    <div className="component-product-details">
       <h1>Product Details</h1>
      <div className="product-details">
       
        {product ? (
          <div className="product-details-container">
            <h4>{product.title}</h4>
            <div className="image-container">
              <img src={product.images} alt={product.title} />
            </div>

            <h4>Price: ${product.price}</h4>
            <p>Description: {product.description}</p>
            <button className="add-to-cart">Add to Cart</button>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;

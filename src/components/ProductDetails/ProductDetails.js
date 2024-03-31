import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetails.css";
import instance from "../../axios-instance";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await instance
        .get(`/products/${id}`)
        .catch((err) => {
          console.log("err", err);
        });
      setProduct(response.data);
    };

    fetchProduct();
  }, [id]);

  return (
    <div className="product-details-container">
      <h1>Product Details</h1>
      {product ? (
        <div className="product-details">
          <h4>{product.title}</h4>
          <p>Description: {product.description}</p>
          <h4>Price: ${product.price}</h4>
          <img src={product.images} alt={product.title} />
          <button>Add to Cart</button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProductDetails;

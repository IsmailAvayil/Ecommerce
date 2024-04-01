import React, { useState, useEffect } from "react";
import instance from "../../axios-instance";
import { useParams } from "react-router-dom";
import "./ProductsListByCategory.css";

function ProductsListByCategory() {
  const [productsByCategory, setProductsByCategory] = useState(null);
  const { categoryId } = useParams();
  useEffect(() => {
    const fetchProductsByCategory = async () => {
      const response = await instance
        .get(`/categories/${categoryId}/products`)
        .catch((err) => {
          console.log("err", err);
        });
      console.log(response.data);
      setProductsByCategory(response.data);
    };
    fetchProductsByCategory();
  }, [categoryId]);
  if(!productsByCategory){
    return<div>Loading.....</div>
  }
  return (
    <div className="product-by-category-container">
      <h1>Products List By Category</h1>
      {productsByCategory.map((product) => (
        <div className="product-by-category" key={product.id}>
          <div className="details">
            <h2>{product.title}</h2>
            <h3>${product.price}</h3>
            <p>{product.description}</p>
          </div>
          {product.images &&
            product.images.map((image, index) => (
              <div className="images-container">
                <img
                  key={index}
                  src={image}
                  alt={`item ${product.id} photo ${index}`}
         
                />
              </div>
            ))}
        </div>
      ))}
    </div>
  );
}

export default ProductsListByCategory;

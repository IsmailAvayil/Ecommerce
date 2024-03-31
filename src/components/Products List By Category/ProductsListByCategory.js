import React, { useState, useEffect } from "react";
import instance from "../../axios-instance";
import { useParams } from "react-router-dom";
import "./ProductsListByCategory.css";

function ProductsListByCategory() {
  const [productsByCategory, setProductsByCategory] = useState([]);
  const { categoryId } = useParams();
  useEffect(() => {
    const fetchProductsByCategory = async () => {
      const response = await instance
        .get(
          `/categories/${categoryId}/products`
        )
        .catch((err) => {
          console.log("err", err);
        });
      setProductsByCategory(response.data);
    };
    fetchProductsByCategory();
  }, [categoryId]);
  return (
    <div className="product-by-category-container">
      <h1>Products List By Category</h1>
      {productsByCategory.map((product) => (
        <div className="product-by-category" key={product.id}>
          {product.images && product.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`item ${product.id} photo ${index}`}
              style={{ maxWidth: "200px", maxHeight: "200px", margin: "5px" }}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default ProductsListByCategory;

import React, { useEffect, useState } from "react";
import instance from "../../axios-instance";
import { Link } from "react-router-dom";
import "./ProductsList.css";

function ProductsList() {
  const [products, setProducts] = useState([]);
  const fetchProducts = async () => {
    const response = await instance
      .get("/products")
      .catch((err) => {
        console.log("err", err);
      });
    setProducts(response.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="products-list">
      <h1>Products list</h1>
      {products &&
        products.map((product) => (
          <div className="products-list-container" key={product.id}>
            <Link to={`/product/${product.id}`}>
              <h4>{product.title}</h4>
              <p>price:${product.price}</p>
            </Link>

            <button>Add to Cart</button>
          </div>
        ))}
    </div>
  );
}

export default ProductsList;

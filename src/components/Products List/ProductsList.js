import React, { useEffect, useState } from "react";
import instance from "../../axios-instance";
import { Link } from "react-router-dom";
import "./ProductsList.css";

function ProductsList() {
  const [products, setProducts] = useState(null);
  const fetchProducts = async () => {
    const response = await instance.get("/products").catch((err) => {
      console.log("err", err);
    });
    setProducts(response.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  if(!products){
    return <div>Loading..</div>
  }

  return (
    <div className="component-products-list">
      <h1>Products list</h1>
      <div className="products-list">
        {products &&
          products.map((product) => (
            <Link to={`/product/${product.id}` } key={product.id}>
              <div className="products-list-container" >
                <h4>{product.title}</h4>
                <p>price:${product.price}</p>
                <button>Add to Cart</button>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}

export default ProductsList;

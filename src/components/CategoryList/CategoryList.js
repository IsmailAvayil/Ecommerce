import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./CategoryList.css";
import instance from "../../axios-instance";

const CategoryList = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCatagoriesList = async () => {
      const response = await instance.get("/categories").catch((err) => {
        console.log("err", err);
      });
      setCategories(response.data);
    };

    fetchCatagoriesList();
  }, []);

  return (
    <div className="category-container">
      <h1>Category List</h1>
      {categories.map((category) => (
        <div className="category-list" key={category.id}>
          <Link to={`/categories/${category.id}/products`}>
            <h2>{category.name}</h2>
            <img src={category.image} alt={category.name} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default CategoryList;

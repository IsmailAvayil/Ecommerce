import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./CategoryList.css";
import instance from "../../axios-instance";

const CategoryList = () => {
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    const fetchCatagoriesList = async () => {
      const response = await instance.get("/categories").catch((err) => {
        console.log("err", err);
      });
      setCategories(response.data);
    };

    fetchCatagoriesList();
  }, []);
  if(!categories){
    return<div>Loading.....</div>
  }

  return (
    <div className="component-categories-list">
      <h1>Categories List</h1>
      <div className="categories-list">
        {categories.map((category) => (
          <div className="categories-container" key={category.id}>
            <Link to={`/categories/${category.id}/products`}>
              <h2>{category.name}</h2>
              <div className="image-container">
              <img src={category.image} alt={category.name} />
              </div>
              
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;

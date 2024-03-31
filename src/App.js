import "./App.css";
import ProductsList from "./components/ProductsList/ProductsList";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import CategoryList from "./components/CategoryList/CategoryList";
import UserList from "./components/UsersList/UsersList";
import Navigation from "./components/Navigation/Navigation";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductsListByCategory from "./components/Products List By Category/ProductsListByCategory";

function App() {
  return (

      <div className="App">

      <Router>
        <Navigation/>
        <Routes>
          <Route exact path="/" element={<ProductsList />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/categories" element={<CategoryList />} />
          <Route
            path="/categories/:categoryId/products"
            element={<ProductsListByCategory />}
          />

          <Route path="/users" element={<UserList />} />
        </Routes>
      </Router>






      </div>


  );
}

export default App;

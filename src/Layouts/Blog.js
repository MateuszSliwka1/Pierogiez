import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Contact from "../pages/Contact";
import ProductList from "../pages/ProductList";
import Products from "../pages/Products";
import Admin from "../pages/Admin";
import Login from "../pages/Login";
import ErrorPage from "../pages/ErrorPage";

const Blog = () => {
	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/contact" element={<Contact />} />
			<Route path="/products" element={<ProductList />} />
			<Route path="/product/:id" element={<Products />}></Route>
			<Route path="/login" element={<Login />} />
			<Route path="/admin" element={<Admin />} />
			<Route path="*" element={<ErrorPage />} />
		</Routes>
	);
};

export default Blog;

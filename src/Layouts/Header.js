import React from "react";
import header1 from "../images/1.jpg";
import header2 from "../images/2.jpeg";
import header3 from "../images/3.jpg";
import header4 from "../images/4.jpg";
import { Route, Routes } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<img src={header1} alt="" />} />
				<Route path="/contact" element={<img src={header2} alt="" />} />
				<Route path="/products" element={<img src={header3} alt="" />} />
				<Route path="*" element={<img src={header4} alt="" />} />
			</Routes>
		</>
	);
};

export default Header;

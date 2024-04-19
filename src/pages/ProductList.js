import React from "react";
import { Link } from "react-router-dom";
import "../styles/ProductList.css";

const products = [
	{
		id: 1,
		title: "pierogi ruskie",
		link: "ruskie",
	},
	{
		id: 2,
		title: "pierogi z mięsem",
		link: "mieso",
	},
	{
		id: 3,
		title: "pierogi z brokułami i serem feta",
		link: "brokuly",
	},
	{
		id: 4,
		title: "pierogi z truskawkami",
		link: "truskawki",
	},
	{
		id: 5,
		title: "pierogi z kapustą",
		link: "kapusta",
	},
];

const ProductList = () => {
	const list = products.map((product) => (
		<li key={product.id}>
			<Link to={`/product/${product.link}`}>{product.title}</Link>
		</li>
	));
	return (
		<div className="products">
			<h2>Lista produktów</h2>
			<div>
				<ul>{list}</ul>
			</div>
		</div>
	);
};

export default ProductList;

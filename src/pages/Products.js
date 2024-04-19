import React from "react";
import { Link, useParams } from "react-router-dom";
import Product from "../components/Product";

const Products = (props) => {
	const params = useParams();
	console.log(props);

	const titlestyle = {
		marginTop: 25,
	};

	return (
		<>
			<div style={titlestyle}>Strona produktu</div>
			<Product id={params.id} />
			<Link
				style={{
					textDecoration: "none",
					color: "orange",
					cursor: "pointer",
				}}
				to="/products"
			>
				Powrót do listy produktów
			</Link>
		</>
	);
};

export default Products;

import React from "react";
import { useParams } from "react-router-dom";
import "../styles/Product.css";

const pierogi = [
	{
		id: "ruskie",
		title: "Pierogi ruskie",
		desc: "Pierogi nadziewane ziemniakami i białym serem (twarogiem), a masa ziemniaczano-serowa była (i wciąż jest) popularna w kuchni regionów położonych na wschodzie, takich jak Podlasie, Polesie czy historyczne Kresy Wschodnie",
	},
	{
		id: "mieso",
		title: "Pierogi z Mięsem",
		desc: "Wykonywane są z delikatnego i elastycznego ciasta, pełnego farszu z wysokiej jakości mięsa wieprzowego. Cebula i przyprawy jedynie podkreślają smak naturalnych składników. To doskonała propozycja na syte danie główne.",
	},
	{
		id: "brokuly",
		title: "Pierogi z brokułami",
		desc: "Pierogi z brokułami są pyszne i aromatyczne. Na pewno zrobią karierę na stole, kiedy podasz takie oryginalne pierogi na wigilijnej kolacji lub w czasie pozostałych dni świąt Bożego Narodzenia. W końcu pierogów nie może zabraknąć na świątecznym stole, a ta ich niebanalna wersja z brokułami będzie smakować każdemu",
	},
	{
		id: "truskawki",
		title: "Pierogi z truskawkami",
		desc: "Delikatne ciasto, a w środku… bogactwo najlepszych polskich owoców, czyli truskawek! Kochamy ich smak, ale sezon na nie trwa bardzo krótko. Dzięki pierogom z truskawkami, naturalną słodyczą truskawek można cieszyć się przez cały rok!",
	},
	{
		id: "kapusta",
		title: "Pierogi z kapustą",
		desc: "Cienkie elastyczne ciasto, duża ilość farszu z kiszonej kapusty i grzybów leśnych. Wg tradycyjnej receptury składnikiem są podgrzybki, które nadają wyjątkowy aromat i smak. Wyśmienicie smakują lekko przyrumienione na patelni, okraszone podsmażaną cebulką.",
	},
];

const Product = (props) => {
	const params = useParams();
	const food = pierogi.find((pierog) => pierog.id === params.id);

	return (
		<>
			<div className="title"> {food.title}</div>
			<div className="desc">{food.desc}</div>
		</>
	);
};

export default Product;

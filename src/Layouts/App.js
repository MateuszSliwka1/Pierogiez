import React, { Component } from "react";
import "../styles/App.css";
import Header from "./Header";
import Footer from "./Footer";
import Blog from "./Blog";
import Navigation from "./Navigation";

class App extends Component {
	state = {};
	render() {
		return (
			<>
				<div className="App">
					<header>
						<Header />
					</header>
					<main>
						<aside>{<Navigation />}</aside>
						<section className="blog">{<Blog />}</section>
					</main>

					<footer>{<Footer />}</footer>
				</div>
			</>
		);
	}
}

export default App;

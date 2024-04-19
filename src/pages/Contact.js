import React, { Component } from "react";
import "../styles/Contact.css";
class Contact extends Component {
	state = {
		value: "",
	};

	handleSubmit = (e) => {
		e.preventDefault();
		this.setState({
			value: "",
		});
	};

	handleChange = (e) => {
		this.setState({
			value: e.target.value,
		});
	};
	render() {
		return (
			<div className="contact">
				<form>
					<h3>Napisz do nas!</h3>
					<textarea
						value={this.state.value}
						onChange={this.handleChange}
						placeholder="Wpisz wiadomość"
					></textarea>
					<button onClick={this.handleSubmit}>Wyślij</button>
				</form>

			</div>
		);
	}
}

export default Contact;

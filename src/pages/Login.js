import React from "react";

const Login = () => {
	return (
		<div>
			<label htmlFor="">
				{" "}
				Podaj login:
				<input type="text" /> <br />
				Podaj hasło:
				<input type="password" />
			</label>
			<br />
			<button>Zaloguj</button>
		</div>
	);
};

export default Login;

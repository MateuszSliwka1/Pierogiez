import React from "react";
import { Navigate } from "react-router-dom";

const permission = false;

const Admin = () => {
	return (
		<>
			{permission ? (
				<h1> Panel admina skurwysyna</h1>
			) : (
				<Navigate to="/login" />
			)}
		</>
	);
};

export default Admin;

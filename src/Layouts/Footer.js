import React from "react";
import { useLocation, Link } from "react-router-dom";
import "../styles/Footer.css";

const Footer = () => {
	let { pathname } = useLocation();
	return <div className="foot"> Znajdujesz się na podstronie: <Link to={pathname} > {pathname} </Link> </div>;
};

export default Footer;

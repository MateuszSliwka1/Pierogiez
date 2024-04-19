import React from "react";

const Article = (props) => {
	const styles = {
		marginTop: 40,
		marginBottom: 50,
	};

	return (
		<article style={styles}>
			<h3
				style={{
					marginBottom: 5,
					textTransform: "uppercase",
				}}
			>
				{props.title}
			</h3>
			<span
				style={{
					display: "block",
					marginBottom: 12,
					fontSize: 12,
					color: "gray",
				}}
			>
				{props.author}
			</span>
			<p
				style={{
					fontSize: 15,
				}}
			>
				{props.text}
			</p>
		</article>
	);
};

export default Article;

import React from "react";
import { Link } from "react-router-dom";

const MentorLogin = ({ setAuth }) => {
	return (
		<>
			<div>
				<h1>MENTOR LOGIN</h1>
				<button onClick={() => setAuth(true)}>Log in</button>
			</div>
			<Link to="/">Home</Link>
		</>
	);
};

export default MentorLogin;

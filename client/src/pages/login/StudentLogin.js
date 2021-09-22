import React from "react";
import { Link } from "react-router-dom";

const StudentLogin = ({ setAuth }) => {
	return (
		<>
			<div>
				<h1>STUDENT LOGIN</h1>
				<button onClick={() => setAuth(true)}>Log in</button>
			</div>
			<Link to="/">Home</Link>
		</>
	);
};

export default StudentLogin;

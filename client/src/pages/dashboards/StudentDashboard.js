import React from "react";
import Header from "./components/Header";

const StudentDashboard = ({ setAuth }) => {
	return (
		<>
		<Header />
		<div>
			<h1>WELCOME STUDENT</h1>
			<h2>DASHBOARD</h2>
			<button onClick={() => setAuth(false)}>Log out</button>
		</div>
		</>
	);
};

export default StudentDashboard;

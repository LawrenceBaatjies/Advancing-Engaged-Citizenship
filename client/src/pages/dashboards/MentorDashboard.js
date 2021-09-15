import React from "react";

const MentorDashboard = ({ setAuth }) => {
	return (
		<div>
			<h1>WELCOME MENTOR</h1>
			<h2>DASHBOARD</h2>
			<button onClick={() => setAuth(false)}>Log out</button>
		</div>
	);
};

export default MentorDashboard;

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./Home.css";


export function Home() {
	const [message, setMessage] = useState("Loading...");

	useEffect(() => {
		fetch("/api")
			.then((res) => {
				if (!res.ok) {
					throw new Error(res.statusText);
				}
				return res.json();
			})
			.then((body) => {
				setMessage(body.message);
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);

	return (
		<main role="main">
			<div>
				<h1 className="message" data-qa="message">
					{message}
				</h1>
				<select name="dropdown" id="dropdown">
					<Link to="/student/login"><option value="student">Student</option></Link>
				</select>
			</div>
		</main>
	);
}

export default Home;

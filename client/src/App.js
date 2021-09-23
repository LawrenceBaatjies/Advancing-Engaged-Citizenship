import React, { useState } from "react";
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";


import Home from "./pages/home/Home";
import StudentLogin from "./pages/login/StudentLogin";
import MentorLogin from "./pages/login/MentorLogin";
import AdminLogin from "./pages/login/AdminLogin";

import StudentDashboard from "./pages/dashboards/StudentDashboard";
import MentorDashboard from "./pages/dashboards/MentorDashboard";
import AdminDashboard from "./pages/dashboards/AdminDashboard";
import { toast } from "react-toastify";

toast.configure();

const App = () => {
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	const setAuth = (boolean) => {
		setIsAuthenticated(boolean);
	};

	return (
		<>
			<Router>
				<div className="container">
					<Switch>
						<Route
							exact
							path="/"
							render={(props) =>
								!isAuthenticated ? (
									<Home {...props} />
								) : (
									<Redirect to="/dashboard" />
								)
							}
						/>
						<Route
							exact
							path="/student/login"
							render={(props) =>
								!isAuthenticated ? (
									<StudentLogin {...props} setAuth={setAuth} />
								) : (
									<Redirect to="/student/dashboard" />
								)
							}
						/>
						<Route
							exact
							path="/mentor/login"
							render={(props) =>
								!isAuthenticated ? (
									<MentorLogin {...props} setAuth={setAuth} />
								) : (
									<Redirect to="/mentor/dashboard" />
								)
							}
						/>
						<Route
							exact
							path="/admin/login"
							render={(props) =>
								!isAuthenticated ? (
									<AdminLogin {...props} setAuth={setAuth} />
								) : (
									<Redirect to="/admin/dashboard" />
								)
							}
						/>
						<Route
							exact
							path="/student/dashboard"
							render={(props) =>
								isAuthenticated ? (
									<StudentDashboard {...props} setAuth={setAuth} />
								) : (
									<Redirect to="/student/login" />
								)
							}
						/>
						<Route
							exact
							path="/mentor/dashboard"
							render={(props) =>
								isAuthenticated ? (
									<MentorDashboard {...props} setAuth={setAuth} />
								) : (
									<Redirect to="/mentor/login" />
								)
							}
						/>
						<Route
							exact
							path="/admin/dashboard"
							render={(props) =>
								isAuthenticated ? (
									<AdminDashboard {...props} setAuth={setAuth} />
								) : (
									<Redirect to="/admin/login" />
								)
							}
						/>
						<Route path="/*" render={(props) => <Home {...props} />} />
					</Switch>
				</div>
			</Router>
		</>
	);
};

export default App;
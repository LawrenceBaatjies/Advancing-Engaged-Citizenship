/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable curly */
import React, { useState } from "react";
import { withRouter } from "react-router-dom";

import "./LoginMenu.css";

const Menu = (props) => {
	const [openMenu, setOpenMenu] = useState(false);

	const setClassNames = (num) => {
		const classArr = ["m-item"];
		if (openMenu) classArr.push(`open-${num}`);
		return classArr.join(" ");
	};

	const pushToRoute = (route) => {
		props.history.push(route);
		setOpenMenu(false);
	};

	return (
		<div className="Menu">
			<div className={"m-item m-logo"} onClick={() => setOpenMenu(!openMenu)}>
				Log in
			</div>
			<div
				className={setClassNames(1)}
				onClick={() => pushToRoute("/student/login")}
			>
				Student
			</div>
			<div
				className={setClassNames(2)}
				onClick={() => pushToRoute("/mentor/login")}
			>
				Mentor
			</div>
			<div
				className={setClassNames(3)}
				onClick={() => pushToRoute("/admin/login")}
			>
				Admin
			</div>
		</div>
	);
};

export default withRouter(Menu);

/* eslint-disable no-useless-escape */
module.exports = function (req, res, next) {
	const {
		student_name,
		student_email,
		student_password,
		mentor_name,
		mentor_email,
		mentor_password,
		admin_name,
		admin_email,
		admin_password,
	} = req.body;

	function validEmail(userEmail) {
		return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmail);
	}

	if (req.path === "/student/register") {
		if (![student_name, student_email, student_password].every(Boolean)) {
			return res.status(401).json("Missing Credentials");
		} else if (!validEmail(student_email)) {
			return res.status(401).json("Invalid Email");
		}
	} else if (req.path === "/student/login") {
		if (![student_email, student_password].every(Boolean)) {
			return res.status(401).json("Missing Credentials");
		} else if (!validEmail(student_email)) {
			return res.status(401).json("Invalid Email");
		}
	}

	if (req.path === "/mentor/register") {
		if (![mentor_email, mentor_name, mentor_password].every(Boolean)) {
			return res.status(401).json("Missing Credentials");
		} else if (!validEmail(mentor_email)) {
			return res.status(401).json("Invalid Email");
		}
	} else if (req.path === "/mentor/login") {
		if (![mentor_email, mentor_password].every(Boolean)) {
			return res.status(401).json("Missing Credentials");
		} else if (!validEmail(mentor_email)) {
			return res.status(401).json("Invalid Email");
		}
	}

	if (req.path === "/admin/register") {
		if (![admin_email, admin_name, admin_password].every(Boolean)) {
			return res.status(401).json("Missing Credentials");
		} else if (!validEmail(admin_email)) {
			return res.status(401).json("Invalid Email");
		}
	} else if (req.path === "/admin/login") {
		if (![admin_email, admin_password].every(Boolean)) {
			return res.status(401).json("Missing Credentials");
		} else if (!validEmail(admin_email)) {
			return res.status(401).json("Invalid Email");
		}
	}
	next();
};

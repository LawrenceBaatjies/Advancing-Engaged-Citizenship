import pool from "../../db";
import queries from "../queries";
import bcrypt from "bcrypt";
import jwtGenerator from "../../utils/jwtGenerator";

const registerStudent = async (req, res) => {
	try {
		const { student_name, student_email, student_password } = req.body;

		const student = await pool.query(queries.checkStudentEmail, [
			student_email,
		]);
		if (student.rows.length > 0) {
			return res.status(401).json("Student already exists!");
		}

		const saltRound = 10;
		const salt = await bcrypt.genSalt(saltRound);

		const bcryptPassword = await bcrypt.hash(student_password, salt);

		const newStudent = await pool.query(queries.registerStudent, [
			student_name,
			student_email,
			bcryptPassword,
		]);

		// Generate jwt token
		const token = jwtGenerator(newStudent.rows[0].student_id);

		res.json({ token });
	} catch (error) {
		console.error(error.message);
		res.status(500).json("Server Error");
	}
};

const loginStudent = async (req, res) => {
	try {
		const { student_email, student_password } = req.body;

		const student = await pool.query(queries.checkStudentEmail, [
			student_email,
		]);
		if (student.rows.length === 0) {
			return res.status(401).json("Password or Email incorrect");
		}

		const validPassword = await bcrypt.compare(
			student_password,
			student.rows[0].student_password
		);

		if (!validPassword) {
			return res.status(401).json("Password or Email incorrect");
		}

		const token = jwtGenerator(student.rows[0].student_id);

		res.json({ token });
	} catch (error) {
		console.error(error.message);
		res.status(500).send("Server Error");
	}
};

const verifyStudent = async (req, res) => {
	try {
		res.json(true);
	} catch (error) {
		console.error(error.message);
		res.status(500).json("Server Error");
	}
};

const getStudentDashboard = async (req, res) => {
	try {
		const student = await pool.query(queries.getStudentById, [req.user]);

		res.json(student.rows);
	} catch (error) {
		console.error(error.message);
		res.status(500).send("Server Error");
	}
};

module.exports = {
	registerStudent,
	loginStudent,
	verifyStudent,
	getStudentDashboard,
};

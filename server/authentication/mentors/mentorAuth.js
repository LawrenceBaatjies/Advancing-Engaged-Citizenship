import pool from "../../db";
import queries from "../queries";
import bcrypt from "bcrypt";
import jwtGenerator from "../../utils/jwtGenerator";

const registerMentor = async (req, res) => {
  try {
    const { mentor_name, mentor_email, mentor_password } = req.body;

    const mentor = await pool.query(queries.checkMentorEmail, [mentor_email]);
    if (mentor.rows.length > 0) {
      return res.status(401).json("Student already exists!");
    }

    const saltRound = 10;
    const salt = await bcrypt.genSalt(saltRound);

    const bcryptPassword = await bcrypt.hash(mentor_password, salt);

    const newMentor = await pool.query(queries.registerMentor, [
      mentor_name,
      mentor_email,
      bcryptPassword,
    ]);

    // Generate jwt token
    const token = jwtGenerator(newMentor.rows[0].mentor_id);

    res.json({ token });
  } catch (error) {
    console.error(error.message);
    res.status(500).json("Server Error");
  }
};

const loginMentor = async (req, res) => {
  try {
    const { mentor_email, mentor_password } = req.body;

    const mentor = await pool.query(queries.checkMentorEmail, [mentor_email]);
    if (mentor.rows.length === 0) {
      return res.status(401).json("Password or Email incorrect");
    }

    const validPassword = await bcrypt.compare(
        mentor_password,
      mentor.rows[0].mentor_password
    );

    if (!validPassword) {
      return res.status(401).json("Password or Email incorrect");
    }

    const token = jwtGenerator(mentor.rows[0].mentor_id);

    res.json({ token });
  } catch (error) {
    console.error(error.message);
    res.status(500).json("Server Error");
  }
};

const verifyMentor = async (req, res) => {
  try {
    res.json(true);
  } catch (error) {
    console.error(error.message);
    res.status(500).json("Server Error");
  }
};

const getMentorDashboard = async (req, res) => {
  try {

    const mentor = await pool.query(queries.getMentorById, [req.user]);

    res.json(mentor.rows);

  } catch (error) {
    console.error(error.message);
    res.status(500).json("Server Error");
  }
};

module.exports = {
  registerMentor,
  loginMentor,
  verifyMentor,
  getMentorDashboard,
};

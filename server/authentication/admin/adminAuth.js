import pool from "../../db";
import queries from "../queries";
import bcrypt from "bcrypt";
import jwtGenerator from "../../utils/jwtGenerator";

const registerAdmin = async (req, res) => {
  try {
    const { admin_name, admin_email, admin_password } = req.body;

    const admin = await pool.query(queries.checkAdminEmail, [admin_email]);
    if (admin.rows.length > 0) {
      return res.status(401).json("Admin already exists!");
    }

    const saltRound = 10;
    const salt = await bcrypt.genSalt(saltRound);

    const bcryptPassword = await bcrypt.hash(admin_password, salt);

    const newAdmin = await pool.query(queries.registerAdmin, [
      admin_name,
      admin_email,
      bcryptPassword,
    ]);

    // Generate jwt token
    const token = jwtGenerator(newAdmin.rows[0].admin_id);

    res.json({ token });
  } catch (error) {
    console.error(error.message);
    res.status(500).json("Server Error");
  }
};

const loginAdmin = async (req, res) => {
  try {
    const { admin_email, admin_password } = req.body;

    const admin = await pool.query(queries.checkAdminEmail, [admin_email]);
    if (admin.rows.length === 0) {
      return res.status(401).json("Password or Email incorrect");
    }

    const validPassword = await bcrypt.compare(
        admin_password,
      admin.rows[0].admin_password
    );

    if (!validPassword) {
      return res.status(401).json("Password or Email incorrect");
    }

    const token = jwtGenerator(admin.rows[0].admin_id);

    res.json({ token });
  } catch (error) {
    console.error(error.message);
    res.status(500).json("Server Error");
  }
};

const verifyAdmin = async (req, res) => {
  try {
    res.json(true);
  } catch (error) {
    console.error(error.message);
    res.status(500).json("Server Error");
  }
};

const getAdminDashboard = async (req, res) => {
  try {

    const admin = await pool.query(queries.getAdminById, [req.user]);

    res.json(admin.rows);

  } catch (error) {
    console.error(error.message);
    res.status(500).json("Server Error");
  }
};

module.exports = {
  registerAdmin,
  loginAdmin,
  verifyAdmin,
  getAdminDashboard,
};

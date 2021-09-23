
// Student queries
const checkStudentEmail = "SELECT * FROM students WHERE student_email = $1";

const registerStudent = "INSERT INTO students (student_name, student_email, student_password) VALUES ($1, $2, $3) RETURNING *";

const getStudentById = "SELECT student_name FROM students WHERE student_id = $1";

// Mentor queries
const checkMentorEmail = "SELECT * FROM mentors WHERE mentor_email = $1";

const registerMentor = "INSERT INTO mentors (mentor_name, mentor_email, mentor_password) VALUES ($1, $2, $3) RETURNING *";

const getMentorById = "SELECT mentor_name FROM mentors WHERE mentor_id = $1";


// Admin queries
const checkAdminEmail = "SELECT * FROM admin WHERE admin_email = $1";

const registerAdmin = "INSERT INTO admin (admin_name, admin_email, admin_password) VALUES ($1, $2, $3) RETURNING *";

const getAdminById = "SELECT admin_name FROM admin WHERE admin_id = $1";


module.exports = {
    checkStudentEmail,
    registerStudent,
    getStudentById,
    checkMentorEmail,
    registerMentor,
    getMentorById,
    checkAdminEmail,
    registerAdmin,
    getAdminById,
};

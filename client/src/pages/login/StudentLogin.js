import React, { useState } from "react";
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import FormLink from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const StudentLogin = ({ setAuth }) => {
	const [studentEmail, setStudentEmail] = useState("");
	const [studentPassword, setStudentPassword] = useState("");
	const [student, setStudent] = useState([]);

	const handleEmail = (event) => {
		event.preventDefault();
		setStudentEmail(event.target.value);
	};

	const handlePassword = (event) => {
		event.preventDefault();
		setStudentPassword(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const newStudent = ({
			student_email: studentEmail,
			student_password: studentPassword,
		});

		setStudent([...student, newStudent]);
		setStudentEmail("");
		setStudentPassword("");
	};

	const Copyright = (props) => {
		return (
			<Typography variant="body2" color="text.secondary" align="center" {...props}>
				{"Copyright © "}
				<Link color="inherit" href="">
					The A Team
				</Link>{""}
				{new Date().getFullYear()}
				{"."}
			</Typography>
		);
	};

	const Student = (props) => {
		return (
			<div>
				{student.map((student) => {
					return (
						<>
							<Typography variant="body2" color="text.secondary" align="center" {...props}>
								{`Student email: ${student.student_email}`}
								<br />
								{`Student password: ${student.student_password}`}
							</Typography>
						</>
					);
				}
				)}
			</div>
		);
	};

	const theme = createTheme();

	return (
		<>
			<div>
				<Typography component="h1" variant="h5">
					Advancing Engaged Citizenship
				</Typography>
				<br />
				<br />
				<Typography variant="h6" component="h2">
					Student Log in
				</Typography>
				<button onClick={() => setAuth(true)}>Log in</button>
			</div>
			<Link to="/">Home</Link>

			<ThemeProvider theme={theme}>
				<Container component="main" maxWidth="xs">
					<CssBaseline />
					<Box
						sx={{
							marginTop: 8,
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
						}}
					>
						<Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
							<LockOutlinedIcon />
						</Avatar>
						<Typography component="h1" variant="h5">
							Student log in
						</Typography>
						<Box
							component="form"
							onSubmit={handleSubmit}
							noValidate sx={{ mt: 1 }}>
							<TextField
								margin="normal"
								required
								fullWidth
								id="email"
								label="Email Address"
								name="email"
								autoComplete="email"
								autoFocus
								value={studentEmail}
								onChange={handleEmail}
							/>
							<TextField
								margin="normal"
								required
								fullWidth
								name="password"
								label="Password"
								type="password"
								id="password"
								autoComplete="current-password"
								value={studentPassword}
								onChange={handlePassword}
							/>
							<FormControlLabel
								control={<Checkbox value="remember" color="primary" />}
								label="Remember me"
							/>
							<Button
								type="submit"
								fullWidth
								variant="contained"
								sx={{ mt: 3, mb: 2 }}
								onClick={handleSubmit}
							>
								Log In
							</Button>
							<Grid container>
								<Grid item xs>
									<FormLink
										href="#"
										variant="body2"
									>
										Forgot password?
									</FormLink>
								</Grid>
							</Grid>
						</Box>
					</Box>
					<Student />
					<Copyright sx={{ mt: 8, mb: 4 }} />
				</Container>
			</ThemeProvider>
		</>
	);
};

export default StudentLogin;
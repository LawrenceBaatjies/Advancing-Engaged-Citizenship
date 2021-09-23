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

const AdminLogin = ({ setAuth }) => {
	const [adminEmail, setAdminEmail] = useState("");
	const [adminPassword, setAdminPassword] = useState("");
	const [admin, setAdmin] = useState([]);

	const handleEmail = (event) => {
		event.preventDefault();
		setAdminEmail(event.target.value);
	};

	const handlePassword = (event) => {
		event.preventDefault();
		setAdminPassword(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const newAdmin = ({
			admin_email: adminEmail,
			admin_password: adminPassword,
		});

		setAdmin([...admin, newAdmin]);
		setAdminEmail("");
		setAdminPassword("");
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

	const Admin = (props) => {
		return (
			<div>
				{admin.map((admin) => {
					return (
						<>
							<Typography variant="body2" color="text.secondary" align="center" {...props}>
								{`Admin email: ${admin.admin_email}`}
								<br />
								{`Admin password: ${admin.admin_password}`}
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
							Admin log in
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
								value={adminEmail}
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
								value={adminPassword}
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
					<Admin />
					<Copyright sx={{ mt: 8, mb: 4 }} />
				</Container>
			</ThemeProvider>
		</>
	);
};

export default AdminLogin;
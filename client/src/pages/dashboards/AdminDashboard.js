import React from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import Container from "@mui/material/Container";
import { Button, TextField, Typography } from "@mui/material";

const AdminDashboard = ({ setAuth }) => {
	const CHARACTER_LIMIT = 20;

	return (
		<div>
			<button onClick={() => setAuth(false)}>Log out</button>
			<Container>
				<HomeOutlinedIcon />
				<Typography variant="h5" component="h2">
					Welcome back admin@sun.ac.za
				</Typography>
				{/* Heading ends here */}
				<br />
				<Typography variant="h6" component="h2">
					Would you like to add a new project?
				</Typography>
				<br />
				<TextField
					required
					id="outlined-basic"
					label="Project Title"
					variant="outlined"
					style={{ width: "50%" }}
					/>
				<br />
				<br />
				<TextField
					required
					id="outlined-basic"
					label="Target Group"
					variant="outlined"
					style={{ width: "50%" }}
					/>
				<br />
				<br />
				<TextField
					required
					id="outlined-multiline-static"
					label="Short Description"
					multiline
					rows={4}
					inputProps={{
						maxlength: CHARACTER_LIMIT,
					}}
					style={{ width: "50%" }}
				/>
				<br />
				<br />
				<Button variant="outlined" onClick={() => alert("clicked")}>
					Submit
				</Button>
		</Container>
		</div>
	);
};

export default AdminDashboard;

/*
import React from "react";
import ReactDOM from "react-dom";
import { TextField } from "@material-ui/core";
import "./styles.css";

export default function App() {
	const CHARACTER_LIMIT = 20;
	const [values, setValues] = React.useState({
		name: "Hello"
	});

	const handleChange = name => event => {
		setValues({ ...values, [name]: event.target.value });
	};
	return (
		<div className="App">
			<h1>Text Field with character limit</h1>
			<TextField
				label="Limit"
				inputProps={{
					maxlength: CHARACTER_LIMIT
				}}
				value={values.name}
				helperText={`${values.name.length}/${CHARACTER_LIMIT}`}
				onChange={handleChange("name")}
				margin="normal"
				variant="outlined"
			/>
		</div>
	);
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
*/

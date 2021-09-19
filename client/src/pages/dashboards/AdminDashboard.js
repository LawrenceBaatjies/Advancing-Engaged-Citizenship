import React from "react";
import Container from "@mui/material/Container";
import { Button, CardActionArea, CardMedia, Fab, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";

const AdminDashboard = ({ setAuth }) => {
	const [projectTitle, setProjectTitle] = React.useState("");
	const [targetGroup, setTargetGroup] = React.useState("");
	const [description, setDescription] = React.useState("");
	const [project, setProject] = React.useState([
		{
			project_title: projectTitle,
			target_group: targetGroup,
			description: description,
		},
	]);

	const handleProjectTitle = (event) => {
		event.preventDefault();
		setProjectTitle(event.target.value);
	};

	const handleTargetGroup = (event) => {
		event.preventDefault();
		setTargetGroup(event.target.value);
	};

	const handleDescription = (event) => {
		event.preventDefault();
		setDescription(event.target.value);
	};

	const handleSubmit = () => {
		const newProject = [...project,{
			projectTitle,
			targetGroup,
			description,
		}];
		console.log("newProject:", newProject);
		setProject(newProject);
		setProjectTitle("");
		setTargetGroup("");
		setDescription("");
	};

	return (
		<div>
			<Container>
			{/* HEADIND START */}
			<Typography variant="h4" component="h2">
				Advancing Engaged Citizenship
			</Typography>
				<br />
				<br />
			<Typography variant="h6" component="h2">
				Welcome back admin@sun.ac.za
				</Typography>
				<br />
				<Button
					variant="contained"
					onClick={() => setAuth(false)}
				>
				Log out
				</Button>
				<br />
				<br />
				<br />
			<Typography variant="h6" component="h2">
					Would you like to load a new project?
					Please complete the form below and click the submit button.
				</Typography>
				{/* HEADING END */}
				<br />
				{/* FORM INPUT START */}
				<Box
					component="form"
					sx={{
						"& .MuiTextField-root": { m: 0, width: "100%" },
					}}
					noValidate
					autoComplete="off"
				>
					<div>
						<TextField
							id="outlined-helperText"
							label="Project name"
							helperText="Enter project name"
							inputProps={{ maxLength: 255 }}
							value={projectTitle}
							onChange={handleProjectTitle}
						/>
						<br />
						<br />
						<TextField
							id="outlined-helperText"
							label="Target group"
							helperText="Enter target group"
							inputProps={{ maxLength: 255 }}
							value={targetGroup}
							onChange={handleTargetGroup}
						/>
						<br />
						<br />
						<TextField
							id="outlined-multiline-static"
							label="Description"
							multiline
							rows={4}
							helperText="Enter description"
							inputProps={{ maxLength: 255 }}
							value={description}
							onChange={handleDescription}
						/>
				<br />
				<br />
				<Button
					variant="contained"
						onClick={()=>handleSubmit()}
						positions="left"
				>
					Submit
				</Button>
					</div>
				</Box>
				{/* FORM INPUT END */}
				
				<br />
				<br />
				
				{/* IMAGE UPLOAD START */}
				<label htmlFor="upload-photo">
					<input
						style={{ display: "none" }}
						id="upload-photo"
						name="upload-photo"
						type="file"
					/>
					<Fab
						color="secondary"
						size="small"
						component="span"
						aria-label="add"
						variant="extended"
					>
						Upload photo
					</Fab>
					<br />
					<br />
				</label>
				<CardActionArea>
					<CardMedia
						component="img"
						image="https://picsum.photos/400/300"
						alt="CardMedia Image Example"
						height="140"
						title="CardMedia Image Example"
					/>
				</CardActionArea>
				{/* IMAGE UPLOAD END */}

		</Container>
		</div>
	);
};

export default AdminDashboard;


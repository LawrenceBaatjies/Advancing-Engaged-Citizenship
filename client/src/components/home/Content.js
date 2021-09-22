//import { useState, useEffect } from "react";
import {
	Box,
	Stack,
	Typography,
	Grid,
	Divider,
	/*Card,
	CardActions,
	CardContent,
	CardMedia,*/
} from "@mui/material";
import ProjectCard from "./ProjectCard";
import PROJECTS from "../../assets/data/projects.json";
import BG from "../../assets/images/bg.jpg";
//import BG from "../../assets/images/bg.png";

const Content = () => {
	return (
		<main style={{ backgroundImage: `url(${BG})`, maxWidth: "100%" }}>
			<Stack
				direction="column"
				sx={{ margin: "2rem" }}
			>
				<Box sx={{ flexGrow: 1 }}>
					<Grid container spacing={2}>
						<Grid item xs={12} md={4}>
							<Typography
								sx={{
									fontWeight: "600",
									fontSize: "2rem",
									textAlign: "center",
								}}
							>
								Advancing Engaged Citizenship
							</Typography>
						</Grid>
						<Grid item xs={12} md={8}>
							<Box
								sx={{
									padding: "1rem",
								}}
							>
								<Typography>
									A platform where students can journey with a team of advisors
									to assist with the innovation of project ideas, during the
									conceptualization and implementation phase. It allows students
									to complete a standard template with prompts to answer key
									questions. It also allows university staff to provide feedback
									and mentorship via the platform.
								</Typography>
							</Box>
						</Grid>
					</Grid>
				</Box>
				<Box sx={{ flexGrow: 1, marginTop: "3rem" }}>
					<Typography
						sx={{
							fontWeight: "600",
							fontSize: "2rem",
						}}
					>
						Featured Projects
					</Typography>
					<Divider
						orientation="horizontal"
						flexItem
						border-color="primary.grey"
					/>
					<Grid container spacing={2} sx={{ marginTop: "1.3rem" }}>
						{PROJECTS.map((project) => (
							<Grid item xs={12} sm={6} md={4} key={project.name}>
								<ProjectCard project={project} />
							</Grid>
						))}
					</Grid>
				</Box>
			</Stack>
		</main>
	);
};

export default Content;

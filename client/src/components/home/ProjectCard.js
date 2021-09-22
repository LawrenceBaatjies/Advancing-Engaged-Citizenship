import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Button, Box, IconButton } from "@mui/material";
import GroupIcon from "@mui/icons-material/GroupOutlined";
import Typography from "@mui/material/Typography";

export default function ProjectCard({ project }) {
	return (
		<Card>
			<CardMedia
				component="img"
				height="140"
				image={project.src}
				alt="featured project"
			/>
			<CardContent>
				<Typography
					gutterBottom
					variant="h5"
					component="div"
					sx={{ textAlign: "center" }}
				>
					{project.name}
				</Typography>
				<Box
					sx={{
						display: "flex",
						flexDirection: "row",
						marginTop: "0.7rem",
						paddingBottom: "0px",
						alignItems: "center",
					}}
				>
					<IconButton >
						<GroupIcon />
					</IconButton>
					<Typography  variant="body2" sx={{ fontWeight: "600" }}>
						{project.owners.join(" | ")}
					</Typography>
				</Box>
				<Typography variant="body2">
					{project.description.length > 300
						? `${project.description.slice(0, 300)}...`
						: project.description}
				</Typography>
			</CardContent>
			<CardActions>
				<Button size="small">Share</Button>
				<Button size="small">Read More</Button>
			</CardActions>
		</Card>
	);
}

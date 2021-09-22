import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";

function Copyright() {
	return (
		<Typography variant="body2" color="text.secondary">
			{"Copyright © "}
			<Link
				color="inherit"
				href="https://github.com/LawrenceBaatjies/Advancing-Engaged-Citizenship"
			>
				The A Team
			</Link>{" "}
			{new Date().getFullYear()}
			{"."}
		</Typography>
	);
}

export default function Footer() {
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
			}}
		>
			<Box
				component="footer"
				sx={{
					py: 3,
					px: 2,
					mt: "auto",
					backgroundColor: (theme) => theme.palette.grey[200],
				}}
			>
				<Container maxWidth="sm">
					<Typography variant="body1">
						Advancing Engaged Citizenship
					</Typography>
					<Copyright />
				</Container>
			</Box>
		</Box>
	);
}

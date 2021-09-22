import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Avatar from "@mui/material/Avatar";
import Fade from "@mui/material/Fade";
import { withRouter } from "react-router-dom";

function LOgInButton(props) {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<div>
			<Button
				id="fade-button"
				aria-controls="fade-menu"
				aria-haspopup="true"
				aria-expanded={open ? "true" : undefined}
				onClick={handleClick}
				style={{ textTransform: "none" }}
			>
				Log In
			</Button>
			<Menu
				id="fade-menu"
				MenuListProps={{
					"aria-labelledby": "fade-button",
				}}
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				TransitionComponent={Fade}
			>
				<MenuItem
					onClick={() => props.history.push("/student/login")}
					sx={{ color: "primary.main" }}
				>
					<Avatar sx={{ color: "primary.main", bgcolor: "primary.white", marginRight: "0.3rem" }} /> Student
				</MenuItem>
				<MenuItem
					onClick={() => props.history.push("/mentor/login")}
					sx={{ color: "primary.main" }}
				>
					<Avatar sx={{ color: "primary.main", bgcolor: "primary.white", marginRight: "0.3rem" }} />  Mentor
				</MenuItem>
				<MenuItem
					onClick={() => props.history.push("/admin/login")}
					sx={{ color: "primary.main" }}
				>
					<Avatar sx={{ color: "primary.main", bgcolor: "primary.white", marginRight: "0.3rem" }} />  Admin
				</MenuItem>
			</Menu>
		</div>
	);
}

export default withRouter(LOgInButton);
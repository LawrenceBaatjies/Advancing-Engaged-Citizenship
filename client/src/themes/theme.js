import { createTheme } from "@mui/material/styles";

const theme = createTheme({
	type: "light",
	palette: {
		primary: {
			main: "#60223b",
			light_maroon: "#8b2943",
			brown: "#963d43",
			grey: "#8c979a",
			yellow: "#b9b013",
			green: "#01484e",
			white: "#fff",
		},
	},
	breakpoints: {
		values: {
			mobile: 700,
		},
	},
});
export default theme;

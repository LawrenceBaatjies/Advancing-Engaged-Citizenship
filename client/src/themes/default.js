import { createTheme } from "@mui/material/styles";

const theme = createTheme({
	type: "light",
	palette: {
		primary: { main: "#48074f", secondary: "#fff" },
	},
	typography: {
		fontFamily: ["Chilanka", "cursive"].join(","),
	},
	font: {
		size: {
			extraSmall: "14px",
			small: "16px",
			medium: "18px",
			large: "20px",
			extraLarge: "24px",
		},
		family: "sans-serif",
	},
	background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
	spacing: [0, 4, 8, 16, 32, 64],
  /*or just one number, when calling theme.spacing you can
  pass in a number and it will return default multiplied
  by parameter.*/
});
export default theme;

import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./themes/theme";

import App from "./App";

ReactDOM.render(
	<ThemeProvider theme={theme}>
		<CssBaseline />
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</ThemeProvider>,
	document.getElementById("root")
);

import express from "express";
import morgan from "morgan";
import path from "path";
import cors from "cors";

import router from "./api";
import authRoutes from "./authentication/routes";


import {
	configuredHelmet,
	httpsOnly,
	logErrors,
	pushStateRouting,
} from "./middleware";

const apiRoot = "/api";
const authRoot = "/auth";
const staticDir = path.join(__dirname, "static");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(configuredHelmet());
app.use(morgan("dev"));
app.use(cors());

if (app.get("env") === "production") {
	app.enable("trust proxy");
	app.use(httpsOnly());
}

app.use(apiRoot, router);
app.use(authRoot, authRoutes);


app.use(express.static(staticDir));
app.use(pushStateRouting(apiRoot, staticDir));

app.use(logErrors());

export default app;

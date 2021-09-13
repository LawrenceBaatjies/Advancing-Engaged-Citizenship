import { Router } from "express";

const router = new Router();

router.get("/", (_, res) => {
	res.json({ message: "Welcome to the Home Page" });
});

export default router;

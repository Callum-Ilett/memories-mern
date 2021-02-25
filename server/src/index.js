import express from "express";
import cors from "cors";

import { fileURLToPath } from "url";
import path, { dirname } from "path";

import postRoutes from "./routes/posts.js";
import userRouter from "./routes/user.js";

import "./db-connection.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/api/posts", postRoutes);
app.use("/api/user", userRouter);

app.use(express.static(path.join(__dirname, "../../client/build")));

app.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}`));

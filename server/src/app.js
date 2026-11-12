import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import path from "path";
import { fileURLToPath } from "url";
import registrationRouter from "./routes/register.routes.js";

const app = express();

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// const publicPath = path.resolve(__dirname, "../public/dist");
// app.use(express.static(publicPath));
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(cookieParser());
app.use(express.static("public"));
app.use("/api/v1", registrationRouter);
// app.get("/{*splat}", (req, res) => {
//     res.sendFile(path.join(publicPath, "index.html"));
// });

export default app;

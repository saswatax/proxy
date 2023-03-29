import express from "express";
import morgan from "morgan";
import { createProxyMiddleware } from "http-proxy-middleware";
import cors from "cors";

const PORT = process.env.PORT || 5000;
const REDIRECT_URL = "https://reqres.in";
const app = express();

app.use(morgan("dev"));

app.use(cors());
app.options("/", cors());

app.use("/status", (req, res) => res.send("running"));
app.use("/", createProxyMiddleware({ target: REDIRECT_URL, changeOrigin: true }));

app.listen(PORT, () => console.log(`Proxy running PORT: ${PORT}`));

import express from "express";
import morgan from "morgan";
import { createProxyMiddleware } from "http-proxy-middleware";

const PORT = process.env.PORT;
const REDIRECT_URL = process.env.REDIRECT_URL;
const app = express();
console.log(PORT, REDIRECT_URL)
app.use(morgan("dev"));

app.use("/status", (req, res) => res.send("running"));
app.use("/", createProxyMiddleware({ target: REDIRECT_URL, changeOrigin: true }));

app.listen(PORT, () => console.log(`Proxy running PORT: ${PORT}`));

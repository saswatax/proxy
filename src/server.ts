import express from "express";
import morgan from "morgan";
import { createProxyMiddleware } from "http-proxy-middleware";

const PORT = process.env.PORT || 5000;
const app = express();

app.use(morgan("dev"));

app.use("/", createProxyMiddleware({ target: "http://localhost:4000", changeOrigin: true }));
app.use("/status", (_, res) => res.send("running"));

app.listen(PORT, () => console.log(`Proxy running PORT: ${PORT}`));

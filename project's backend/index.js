const dns = require("dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);

require("dotenv").config();

const express = require("express");
const path = require("path");
const menuRouter = require("./routes/menuRoutes");
const dbConnect = require("./comfig/db-connect");

const app = express();

dbConnect();

app.use(express.json());

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/api/v1/menu", menuRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
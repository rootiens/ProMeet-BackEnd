import express from "express";
import cors from "cors";
import sequelize from "./utils/db";

require("dotenv").config();

const server = express();
server.use(cors());
sequelize;
server.listen(process.env.APP_PORT);
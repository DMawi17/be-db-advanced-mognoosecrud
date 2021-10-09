import express from "express";
import mongoose from "mongoose";
import userRoutes from "./routes/user.route.js";
import { port, mongoUri } from "./config/config.js";

const { connect, connection } = mongoose;

const app = express();

app.use(express.json());
app.use("/", userRoutes);

connect(mongoUri);

connection.on("connected", () => console.info("Connected to the database"));
connection.on("error", () => new Error(`unable to connect to database`));
connection.on("disconnected", () => console.info(`Disconnected`));

app.listen(port, () => {
    console.info("Server started on port %s.", port);
});

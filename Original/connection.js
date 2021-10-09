import mongoose from "mongoose";
import dotenv from "dotenv";
import create from "./create.js";
import read from "./read.js";
import updateAnd from "./update.js";
import deleteUser from "./delete.js";
const { connect, connection } = mongoose;

dotenv.config();
const { DB_USER, DB_PASS } = process.env;

connect(`mongodb://${DB_USER}:${DB_PASS}@localhost:27017/test`);

connection.on("connected", () => {
    console.log(`\nConnected to database\n`);
});
connection.on("error", () => {
    throw new Error(`unable to connect to database`);
});
connection.on("disconnected", () => {
    console.log(`Disconnected from the database`);
});

connection.once("connected", async () => {
    try {
        await create();
        await read();
        await updateAnd();
        await deleteUser();
    } catch (error) {
        console.log({ error: error.message });
    } finally {
        await connection.close();
    }
});

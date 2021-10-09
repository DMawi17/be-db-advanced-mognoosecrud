import express from "express";
import {
    create,
    deleteUser,
    readAll,
    readOne,
    updateAnd,
    userById,
} from "../controllers/user.controller.js";

const router = express.Router();

router.route("/").post(create).get(readAll);
router.route("/:userId").get(readOne).put(updateAnd).delete(deleteUser);
router.param("userId", userById);

export default router;

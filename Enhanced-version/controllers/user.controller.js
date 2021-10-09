import Person from "../models/user.model.js";

const create = async (req, res) => {
    try {
        const user = await Person.create(req.body);
        res.json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const readAll = async (req, res) => {
    try {
        let users = await Person.find().select("email and role");
        res.json(users);
    } catch (error) {
        console.dir(error.message, { colors: true });
    }
};

const userById = async (req, res, next, id) => {
    try {
        let user = await Person.findById(id);
        req.profile = user;
        next();
    } catch (error) {
        res.status(400).json({
            error: "Could not retrieve user",
        });
    }
};

const readOne = (req, res) => {
    req.profile.password = undefined;
    req.profile.__v = undefined;
    return res.json(req.profile);
};

const updateAnd = async (req, res) => {
    try {
        let user = req.profile;
        let updatedUser = Object.assign(user, req.body);
        await updatedUser.save();
        user.password = undefined;
        user.__v = undefined;
        res.json(updatedUser);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const deleteUser = async (req, res) => {
    try {
        let user = req.profile;
        let deletedUser = await user.remove();
        user.password = undefined;
        user.__v = undefined;
        res.json(deletedUser);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export { create, readOne, userById, readAll, updateAnd, deleteUser };

 
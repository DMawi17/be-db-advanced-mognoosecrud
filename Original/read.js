import Person from "./user.js";

const read = async () => {
    try {
        let users = await Person.find().select("email and role");
        console.log(users);
    } catch (err) {
        console.log(err);
    }
};

export default read;

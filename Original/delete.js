import Person from "./user.js";

const deleteUser = async () => {
    try {
        let deletedPerson = await Person.findOneAndRemove({
            email: "Meda_Lockman76@gmail.com",
        }).select("email and role");
        console.log(`\nREMOVED:\n\n  ${deletedPerson}\n`);
    } catch (err) {
        console.error(err);
    }
};

export default deleteUser;

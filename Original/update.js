import Person from "./user.js";

const updateAnd = async () => {
    try {
        let updatedUser = await Person.findOne({
            email: "Shannon.Carter@gmail.com",
        }).select("email and role");
        if (!updatedUser) console.log("User not found");
        Object.assign(updatedUser, { email: "Meda_Lockman76@gmail.com" });
        await updatedUser.save();
        console.log(`\nUPDATED:\n\n  ${updatedUser}\n`);
    } catch (err) {
        console.error(err);
    }
};

export default updateAnd;

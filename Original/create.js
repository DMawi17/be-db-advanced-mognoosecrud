import Person from "./user.js";

const create = async () => {
    try {
        await Person.create({
            email: "Caesar_Hills5@gmail.com",
            password: "MCgC9b3b_LjuMgL",
        });
        await Person.create({
            email: "Shannon.Carter@gmail.com",
            password: "AQbqWtVho7VN968",
            role: "Admin",
        });
        await Person.create({
            email: "Orin_Kassulke@hotmail.com",
            password: "MnKUrjTQhCFZ4X6",
            role: "Editor",
        });
    } catch (err) {
        console.log(err);
    }
};

export default create;

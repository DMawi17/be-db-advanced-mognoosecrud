import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        trim: true,
        unique: "Email already exists",
        match: [/.+\@.+\..+/, "Please fill a valid email address"],
        required: "Email is required",
    },
    password: {
        type: String,
        required: "Password is required",
        minLength: 8,
    },
    role: {
        type: String,
        enum: ["User", "Admin", "Editor"],
        default: "User",
    },
});

export default mongoose.model("Person", UserSchema);

import User from "../Models/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

// USER REGISTRATION
export const register = async (req, res) => {

    // HASHING PASSWORD i.e: Encrypting Password

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    try {
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hash,
            photo: req.body.photo
        })

        await newUser.save();
        res.status(200).json({ success: true, message: "Successfully Created" });

    } catch (err) {
        res.status(500).json({ success: false, message: "Failed to Create. Try again." });
    }
}

// USER LOGIN
export const login = async (req, res) => {
    const email = req.body.email
    try {
        const user = await User.findOne({ email });

        // IF USER NOT EXIST
        if (!user) {
            return res.status(404).json({ success: false, message: "User not Found" });
        }

        // IF USER EXIST THEN CHECK THE PASSWORD
        const checkCorrectPassword = await bcrypt.compare(req.body.password, user.password);

        // IF PASSWORD IS INCORRECT
        if (!checkCorrectPassword) {
            return res.status(404).json({ success: false, message: "Password is Incorrect" });
        }

        const { password, role, ...rest } = user._doc

        //CREATE JWT TOKEN

        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET_KEY, { expiresIn: "15d" });

        //SET TOKEN IN BROWSER COOKIE

        res.cookie('accessToken', token, {
            httpOnly: true,
            expires: token.expiresIn
        }).status(200).json({
            token, role, data: { ...rest },

        })

    } catch (err) {
        res.status(500).json({ success: false, message: "Failed to Login" });
    }
}
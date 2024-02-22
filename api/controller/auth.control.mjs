import User from "../model/auth.model.mjs";
import { comparePassword, hashPassword } from "../utils/hash_compare.mjs";
import jwt from "jsonwebtoken";
import { errorHandler } from "../utils/error_handler.mjs";

export const signup = async (req, res, next) => {
    const { username, email, password } = req.body;
    const hashedPassword = hashPassword(password);
    const newUser = new User({ username, email, password: hashedPassword });
    try {

        await newUser.save();
        return res.status(201).json({ msg: "User created successfully" });
    } catch (error) {
        next(error);
    }
}

export const signin = async (req, res, next) => {
    try {     
        const { username, password } = req.body;
        const findUser = await User.findOne({username});
        if (!findUser) return next(errorHandler(404, "User not Found"));
        if (!comparePassword(password, findUser.password)) return next(errorHandler(400, "Invalid Credentials"));
        const token = jwt.sign({id: findUser._id}, process.env.JWT_KEY);
        const {password: pass, ...rest} = findUser._doc;
        return res.status(200).cookie('access_token', token, {httpsOnly: true}).json(rest);
    } catch (error) {
        return next(error);
    }
}
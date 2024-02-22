import express from "express";
import mongoose from "mongoose";
import authRouter from "../router/auth.route.mjs"
import dotenv from "dotenv";
dotenv.config();

mongoose.connect(process.env.MONGO_URI)
    .then(()=> console.log(`Connected to Database`))
    .catch((err)=> console.log(err));

const port = 3000;
const app = express();

app.use(express.json());
app.use('/api/auth', authRouter);
app.use((err, req, res, next)=> {
    const message = err.message || 'Internal Server Error';
    const statusCode = err.statusCode || 500;
    return res.status(statusCode).json({
        success: false,
        message,
        statusCode
    })
})

app.listen(port, ()=> {
    console.log(`Server is listening at port: ${port}`);
});
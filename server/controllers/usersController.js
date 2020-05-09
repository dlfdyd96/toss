import User from "../models/User";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const YOUR_SECRET_KEY = process.env.SECRET_KEY;
const expiresIn = 60 * 60; // 60 min

// /login
export const createToken = async (req, res, next) => {
    try {
        const user = await User.find(req.body); // req.body : {id, pw}
        console.log(req.body);
        // find!
        if(user.length) { 
            const token = jwt.sign({ user_id: user[0].user_id }, 
                YOUR_SECRET_KEY, 
                { expiresIn })
            
            
            // res.cookie('user', token);
            res.status(201).json({
                result: 'OK',
                token
            })
        } else {
            res.status(400).json({ error : "invalid User "});
        }
    } catch(err) {
        console.log(`controller - createToken Error : ${err}`);
        next(err);  
    }
}

// /new
export const createNewUser = async (req, res, next) => {
    try {
        const user = await new User(req.body).save();

        // jwt 만들어서 주까? 
        console.log(req.body);
        
        res.status(201).json({
            result : 'OK',
            user: user
        })
    } catch(err) {
        console.log(`controller - createNewUser Error : ${err}`);
        next(err);
    }
}


// /me
export const getUserInfo = async (req, res, next) => {
    try {
        const user = await User.findById(req.user.id);
        res.status(200).json({
            result: 'OK',
            user: user
        })
    } catch(err) {
        console.log(`error with Controller- getUserInfo : ${err}`)
    }
}
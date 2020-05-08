import jwt from "jsonwebtoken";

const secret = "token secret";
const expiresIn = 60 * 60 ; // 60min

const auth = {
    signToken : (id) => {
        return jwt.sign({id}, secret, {expiresIn});
    },
    verify (token) {
      return jwt.verify(token.replace(/^Bearer\s/, ''), secret)
    },
    
    
}

export default auth;
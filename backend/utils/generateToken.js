import jwt from "jsonwebtoken";

const genrateTokenAndSetCookies = (userId,res) => {
    const token = jwt.sign({userId},process.env.JWT_SECRET, {
        expiresIn: "15d"
    });

    res.cookie("jwt",token,{
        maxAge: 15 *24*60*60*1000, //MS
        httpOnly: true, //prevents the xss attack cross-site scripting attacks  using javascript
        sameSite: "strict", //prvents the CSRF (Cross Site Request Forgery )attacks by adding a security header to HTTP response
        secure: process.env.NODE_ENV !== "development"
    })

}

export default  genrateTokenAndSetCookies;
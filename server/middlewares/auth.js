import jwt, { decode } from "jsonwebtoken";

const auth = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    let decodeData = jwt.verify(token, "bhola");
    req.userId = decodeData.id;
    next();
  } catch (error) {
    console.log(error.message);
  }
};


export default auth

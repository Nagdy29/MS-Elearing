import jwt from "jsonwebtoken";

const authMidelware = async (req, res, next) => {
  const { token } = req.headers;
  if (!token) {
    return res.json({ success: false, message: "Not auth  login agin" });
  }
  try {
    const token_decode = jwt.verify(token, "nagdy");
    req.body.userId = token_decode.id;
    next();
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

export default authMidelware;

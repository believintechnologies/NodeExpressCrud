require('dotenv').config();

const { sign } = require("jsonwebtoken");
const { hash } = require("bcrypt");

const stripHtmlFromText = (text) => {
  const regex = /<[^>]+>/g;
  return text.replace(regex, "");
};

const hashPassword = async (password) => {
  try {
    const genSalt = process.env.GEN_SALT;
    const hashedPass = await hash(password, genSalt);
    return hashedPass;
  } catch (err) {
    res.status(500).json({
      status: false,
      error: {
        code: 500,
        message: err.message,
      },
    });
  }
};

const generateToken = (user) => {
  const secret = process.env.SECRET_KEY;
  const payload = {
    id: user[0]._id,
    emailAddress: user[0].emailAddress,
  };
  const options = {
    expiresIn: "1h",
  };
  const token = sign(payload, secret, options);
  return token;
};


const comparePassword = (password) => {

}




module.exports = {
  stripHtmlFromText,
  hashPassword,
  generateToken
};

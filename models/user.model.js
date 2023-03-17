import mongoose from "mongoose"
import jwt from 'jsonwebtoken';

export const nigeriaOffset = 60 * 60 * 1000 * 1;  //change timestamps to GMT + 1

const user = new mongoose.Schema({

  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true

  },
  firstname: {
    type: String,
    required: true
  },

  lastname: {
    type: String,
    required: true
  },
  verified: {
    type: Boolean,
    default: false
  },
  username: {
    type: String,
    required: true,
    unique: true
  }
}, { timestamps: { currentTime: () => Date.now() + nigeriaOffset }, versionKey: false });

user.methods.toJSON = () => {
  const userObject = this.toObject();
  delete userObject.password;
  delete userObject.__v;
  return userObject;
};


user.methods.generateToken = () => { 
  const token = jwt.sign({
    _id: this._id,
    email: this.email
  }, process.env.TOKEN_SECRET, { expiresIn: '20 mins' });

  return token;
};

export const UserModel = mongoose.model('User', user);

export default UserModel;

import { Schema, model } from 'mongoose';

const UserSchemabookstore = new Schema(
  {
    firstname: {type: String},    
    lastname: {type: String},    
    email: {type: String},    
    password: {type: String}    
  },
  {
    timestamps: true
  }
);

export default model('User', UserSchemabookstore);

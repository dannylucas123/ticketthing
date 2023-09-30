import mongoose, { Document, Model } from "mongoose";

export interface UserSignInDto {
  email: string;
  password: string;
}

export interface UserSignUpDto extends UserSignInDto {}

// Define the User interface representing a document in the database
export interface UserDoc extends Document {
  email: string;
  password: string;
  createdAt: string;
  updatedAt: string;
}

// Define the attributes required to create a new User
export interface UserAttr {
  email: string;
  password: string;
}

// Define the static methods for the UserModel
export interface UserModel extends Model<UserDoc> {
  build(attributes: UserAttr): UserDoc;
}

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

// Define a static method 'build' for UserModel
userSchema.statics.build = (attributes: UserAttr) => {
  return new User(attributes);
};

// Create the User model
const User = mongoose.model<UserDoc, UserModel>('User', userSchema);

export { User };

import mongoose from "mongoose";
import { type ReturnModelType, getModelForClass } from "@typegoose/typegoose";
import { User } from "../classes/User";

export const UserModel =
  (mongoose.models.User as ReturnModelType<typeof User> | undefined) ??
  getModelForClass(User);

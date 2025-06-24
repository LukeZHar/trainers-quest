import mongoose from "mongoose";
import { type ReturnModelType, getModelForClass } from "@typegoose/typegoose";
import { User } from "../classes/User";
import { Card } from "../classes/Card";

export const UserModel =
  (mongoose.models.User as ReturnModelType<typeof User> | undefined) ??
  getModelForClass(User);

export const CardModel =
  (mongoose.models.Card as ReturnModelType<typeof Card> | undefined) ??
  getModelForClass(Card);
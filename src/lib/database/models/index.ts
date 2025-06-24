import mongoose from "mongoose";
import { type ReturnModelType, getModelForClass } from "@typegoose/typegoose";
import { User } from "../classes/User";
import { Card } from "../classes/Card";
import { Set } from "../classes/Set";

export const UserModel =
  (mongoose.models.User as ReturnModelType<typeof User> | undefined) ??
  getModelForClass(User);

export const CardModel =
  (mongoose.models.Card as ReturnModelType<typeof Card> | undefined) ??
  getModelForClass(Card);

export const SetModel =
  (mongoose.models.Set as ReturnModelType<typeof Set> | undefined) ??
  getModelForClass(Set);


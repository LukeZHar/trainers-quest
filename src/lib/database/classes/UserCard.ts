import {
  prop,
  type DocumentType,
  modelOptions,
  Severity,
  type Ref,
} from "@typegoose/typegoose";
import { TimeStamps } from "@typegoose/typegoose/lib/defaultClasses";
import { User } from "./User";
import { Card } from "./Card";

@modelOptions({
  schemaOptions: { collection: "usercards" },
  options: { allowMixed: Severity.ALLOW },
})
export class UserCard extends TimeStamps {
  @prop({ required: true, ref: () => User })
  userId!: Ref<User>;
  @prop({ required: true, ref: () => Card })
  cardId!: Ref<Card>;
  @prop() quantity?: number;
  @prop({ default: false }) isFavorite?: boolean;
  @prop({ default: false }) isShowcase?: boolean;
  @prop() acquiredAt?: Date;
  @prop() notes?: string;
  @prop() condition?: string;
}

export type UserCardDocument = DocumentType<UserCard>;
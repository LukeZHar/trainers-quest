import { 
    prop,
    type DocumentType,
    modelOptions,
    Severity,
    Ref
} from "@typegoose/typegoose";
import { TimeStamps } from "@typegoose/typegoose/lib/defaultClasses";
import { UserCard } from "./UserCard";

@modelOptions({
  schemaOptions: { collection: "users" },
  options: { allowMixed: Severity.ALLOW },
})
export class User extends TimeStamps {
  @prop({ required: true, unique: true }) username!: string;
  @prop({ required: true, unique: true }) email!: string;
  @prop({ required: true }) walletAddress!: string;
  @prop() bio?: string;
  @prop({ ref: () => UserCard, default: [] }) collection?: Ref<UserCard>[];
  @prop({ type: () => [String], default: [] }) favoriteCardIds?: string[];
  @prop({ type: () => [String], default: [] }) showcaseCardIds?: string[];
}

export type UserDocument = DocumentType<User>;
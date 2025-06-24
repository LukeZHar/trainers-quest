import {
  prop,
  type DocumentType,
  modelOptions,
  Severity,
  Ref,
} from "@typegoose/typegoose";
import { TimeStamps } from "@typegoose/typegoose/lib/defaultClasses";
import { Set } from "./Set";

@modelOptions({
  schemaOptions: { collection: "cards" },
  options: { allowMixed: Severity.ALLOW },
})
export class Card extends TimeStamps {
    @prop({ required: true, unique: true }) tcgId!: string;
    @prop({ required: true }) name!: string;
    @prop({ ref: () => Set }) setId!: Ref<Set>;
    @prop() rarity?: string;
    @prop() imageUrl?: string;
    @prop() value?: number;
}

export type CardDocument = DocumentType<Card>;
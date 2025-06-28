import {
  prop,
  type DocumentType,
  modelOptions,
  Severity,
} from "@typegoose/typegoose";
import { TimeStamps } from "@typegoose/typegoose/lib/defaultClasses";

@modelOptions({
  schemaOptions: { collection: "sets" },
  options: { allowMixed: Severity.ALLOW },
})
export class Set extends TimeStamps {
    @prop({ required: true, unique: true }) tcgSetId!: string;
    @prop({ required: true }) name!: string;
    @prop() releaseDate?: Date;
    @prop() logoUrl?: string;
}

export type SetDocument = DocumentType<Set>;
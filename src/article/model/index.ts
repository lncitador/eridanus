import { model, Schema } from "mongoose";

export interface IArticle extends Document {
  id: string;
  authorId: string;
  category: string;
  markdown: string;
}

export const ArticleSchema = new Schema<IArticle>(
  {
    authorId: String,
    category: String,
    markdown: String,
  },
  { timestamps: true }
);

export default model<IArticle>("Article", ArticleSchema);

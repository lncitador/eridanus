import { handleUnaryCall } from "grpc";

import {
  IArticle,
  ICreateArticleRequest,
  IGetArticleByIdRequest,
  IArticleResponse,
} from "@proto";

import Article from "../model";

interface IArticleService {
  createArticle: handleUnaryCall<ICreateArticleRequest, IArticleResponse>;
  getArticleById: handleUnaryCall<IGetArticleByIdRequest, IArticleResponse>;
}

const implementation: IArticleService = {
  async createArticle(call, callback) {
    const { authorId, category, markdown } = call.request as IArticle;

    const article = await Article.create({
      authorId,
      category,
      markdown,
    });

    return callback(null, { article });
  },

  async getArticleById(call, callback) {
    const { id } = call.request;

    const article = await Article.findById(id);

    return callback(null, { article });
  },
};

export { implementation };

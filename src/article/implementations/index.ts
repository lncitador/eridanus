import { handleUnaryCall } from "grpc";

import { ArticleRespository } from "@article/typeorm/repositories/ArticleRespository";
import {
  ICreateArticleRequest,
  IGetArticleByIdRequest,
  IArticleResponse,
} from "@proto";

interface IArticleService {
  createArticle: handleUnaryCall<ICreateArticleRequest, IArticleResponse>;
  getArticleById: handleUnaryCall<IGetArticleByIdRequest, IArticleResponse>;
}

const articleRepository = new ArticleRespository();

const implementation: IArticleService = {
  async createArticle(call, callback) {
    const { article } = call.request;

    const createArticle = await articleRepository.createArticle({ article });

    return callback(null, { article: createArticle.article });
  },

  async getArticleById(call, callback) {
    const { id } = call.request;

    const findArticle = await articleRepository.getArticleByIdRequest({ id });

    return callback(null, { article: findArticle.article });
  },
};

export { implementation };

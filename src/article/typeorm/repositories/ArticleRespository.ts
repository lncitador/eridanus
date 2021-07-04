import { getMongoRepository, MongoRepository } from "typeorm";

import { IArticleRepository } from "@article/repositories/IArticleRepository";
import {
  ICreateArticleRequest,
  IArticleResponse,
  IGetArticleByIdRequest,
} from "@proto";

import { Article } from "../entities/Article";

class ArticleRespository implements IArticleRepository {
  private ormRepository: MongoRepository<Article>;

  constructor() {
    this.ormRepository = getMongoRepository(Article, "mongo");
  }

  public async createArticle({
    article,
  }: ICreateArticleRequest): Promise<IArticleResponse> {
    const newArticle = this.ormRepository.create(article);

    await this.ormRepository.save(newArticle);

    return {
      article: newArticle,
    };
  }
  public async getArticleByIdRequest({
    id,
  }: IGetArticleByIdRequest): Promise<IArticleResponse> {
    const article = await this.ormRepository.findOne(id);

    return {
      article,
    };
  }
}

export { ArticleRespository };

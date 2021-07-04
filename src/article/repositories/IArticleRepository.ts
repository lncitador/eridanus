import {
  IArticleResponse,
  ICreateArticleRequest,
  IGetArticleByIdRequest,
} from "@proto";

export interface IArticleRepository {
  createArticle({ article }: ICreateArticleRequest): Promise<IArticleResponse>;
  getArticleByIdRequest({
    id,
  }: IGetArticleByIdRequest): Promise<IArticleResponse>;
}

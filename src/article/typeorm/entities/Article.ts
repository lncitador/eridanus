/* eslint-disable no-underscore-dangle */
import {
  Column,
  CreateDateColumn,
  Entity,
  ObjectID,
  ObjectIdColumn,
  UpdateDateColumn,
} from "typeorm";

import { IArticle } from "@proto";

@Entity()
class Article implements IArticle {
  @ObjectIdColumn()
  private readonly _id: ObjectID;

  @Column()
  public id: string;

  @Column()
  public authorId: string;

  @Column()
  public category: string;

  @Column()
  public markdown: string;

  @CreateDateColumn()
  public createdAt: string;

  @UpdateDateColumn()
  public updatedAt: string;

  constructor() {
    if (this._id) {
      this.id = String(this._id);
    }
  }
}

export { Article };

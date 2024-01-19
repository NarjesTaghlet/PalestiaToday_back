import { Injectable } from '@nestjs/common';
import { AddArticleDto } from './dto/add-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {Article} from "./entities/article.entity";
import {Repository} from "typeorm";
import {UserService} from "../user/user.service";


@Injectable()
export class ArticleService {

  constructor(
      @InjectRepository(Article)
      private readonly ArticleRepository : Repository<Article>,
      //private userService : UserService
  ) {}

  //Création d'article == ajout article

  async create(createArticleDto: AddArticleDto) : Promise<Article>{
    const article = this.ArticleRepository.create(createArticleDto);
    return await this.ArticleRepository.save(article);
  }


  async getArticles(): Promise<Article[]> {
    return await this.ArticleRepository.find()
  }

  findAll() {
    return `This action returns all article`;
  }

  findOne(id: number) {
    return `This action returns a #${id} article`;
  }

  update(id: number, updateArticleDto: UpdateArticleDto) {
    return `This action updates a #${id} article`;
  }

  remove(id: number) {
    return `This action removes a #${id} article`;
  }
}

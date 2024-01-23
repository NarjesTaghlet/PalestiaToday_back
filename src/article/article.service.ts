import {Injectable, NotFoundException, UnauthorizedException} from '@nestjs/common';
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



  async findOneArticle(id: number): Promise<Article | null> {
    return await this.ArticleRepository.findOneBy({ id });
  }

  update(id: number, updateArticleDto: UpdateArticleDto) {
    return `This action updates a #${id} article`;
  }

  async updateArticle(id: number, article: UpdateArticleDto): Promise<Article> {
    //On récupére le article d'id id et ensuite on remplace les anciennes valeurs de cet article
    // par ceux passé en paramètre
    const newArticle = await this.ArticleRepository.preload({
      id,
      ...article
    });
    // tester le cas ou le article d'id id n'existe pas
    if(!newArticle) {
      throw new NotFoundException(`Article d'id ${id} n'existe pas`);
    }
    //sauvgarder la nouvelle entité donc le nouveau cv
    else{
      return await this.ArticleRepository.save(newArticle);

    }

  }
  async remove(id: number) {
    return await this.ArticleRepository.delete(id);
  }
  async findArticleById(id: number) {
    const article = await this.findOneArticle(id);
    if (!article) {
      throw new NotFoundException(`L'article d'id ${id} n'existe pas`);
    }
    return article;
  }


}

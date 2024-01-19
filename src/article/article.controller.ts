import {Controller, Get, Post, Body, Patch, Param, Delete, UseGuards} from '@nestjs/common';
import { ArticleService } from './article.service';
import { AddArticleDto } from './dto/add-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import {JwtAuthGuard} from "../user/Guards/jwt-authguard";
import {RoleGuard} from "../user/Guards/role-basedguard";
import {Roles} from "../decoraters/role-decorator";
import {Role_userEnum} from "../enums/role_user.enum";

@Controller('article')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}
  //seul l 'admin peut ajouter un article
  @Roles(Role_userEnum.ADMIN)
  @UseGuards(JwtAuthGuard,RoleGuard)
  @Post('add')
  create(@Body() createArticleDto: AddArticleDto) {
    return this.articleService.create(createArticleDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.articleService.getArticles();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.articleService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateArticleDto: UpdateArticleDto) {
    return this.articleService.update(+id, updateArticleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.articleService.remove(+id);
  }
}

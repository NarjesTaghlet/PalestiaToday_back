import { PartialType } from '@nestjs/mapped-types';
import { AddArticleDto } from './add-article.dto';

export class UpdateArticleDto extends PartialType(AddArticleDto) {}

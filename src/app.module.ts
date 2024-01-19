import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticleModule } from './article/article.module';
import { UserModule } from './user/user.module';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Article} from "./article/entities/article.entity";
import {User} from "./user/entities/user.entity";
import { InteractionarticleModule } from './interactionarticle/interactionarticle.module';
import {Interactionarticle} from "./interactionarticle/entities/interactionarticle.entity";
import {ConfigModule} from "@nestjs/config";

@Module({
  imports: [ArticleModule, UserModule
  ,TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3307,
      username: 'root',
      password: '',
      database: 'test',
      entities: [Article,User,Interactionarticle],
      synchronize: true,
    }), InteractionarticleModule,
      ConfigModule.forRoot({
          isGlobal: true,

      })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

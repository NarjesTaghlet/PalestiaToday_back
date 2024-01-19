import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { RegisterUserDto } from './dto/register-user.dto';
import { LoginCredentialsDto } from './dto/login-credentials.dto';
import {ArticleService} from "../article/article.service";

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService , private ArticleService :ArticleService) {}

  //register
  @Post()
  Signup(@Body() createUserDto: RegisterUserDto) {
    return this.userService.Signup(createUserDto);
  }

  //login
  @Post('login')
  login(@Body() credentials : LoginCredentialsDto){
    return this.userService.login(credentials);
  }
  
  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: LoginCredentialsDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }


}

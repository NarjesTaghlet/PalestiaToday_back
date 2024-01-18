import {ConflictException, Injectable} from '@nestjs/common';
import { RegisterUserDto } from './dto/register-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {Repository} from "typeorm";
import {User} from "./entities/user.entity";
import {InjectRepository} from "@nestjs/typeorm";
import * as bcrypt from 'bcrypt';
import {ExceptionHandler} from "@nestjs/core/errors/exception-handler";
import {Role_userEnum} from "../enums/role_user.enum";
@Injectable()
export class UserService {
constructor(
   @InjectRepository(User)
   private UserRepository : Repository<User>,
) {
}
  async Signup(datauser : RegisterUserDto) : Promise<User>
  {
    //const {username,password,email} =datauser
    //const user = new User()
    const user = this.UserRepository.create({
      ...datauser
    })

    //il faut creer un salt (password salting a technique to protect passwords stored in databases by adding a string of 32 or more characters and then hashing them)

    user.salt = await bcrypt.genSalt(); // genSalt est asynchrone
    user.password=await bcrypt.hash(user.password,user.salt);
    //sauvegarder notre user


  user.role=Role_userEnum.ABONNEE;
    try{
      await this.UserRepository.save(user);
    }catch(e){
      throw new ConflictException(`User et mdp ne sont pas uniques !!`);
    }
  return  user ;

  }
  create(createUserDto: RegisterUserDto) {
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}

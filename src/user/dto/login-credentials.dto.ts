import { PartialType } from '@nestjs/mapped-types';
import { RegisterUserDto } from './register-user.dto';
import {IsNotEmpty} from "class-validator";

export class LoginCredentialsDto extends PartialType(RegisterUserDto) {

    @IsNotEmpty()
    username : string

    @IsNotEmpty()
    password : string


}

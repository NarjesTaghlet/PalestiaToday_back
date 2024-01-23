import {IS_NOT_EMPTY, isNotEmpty, IsNotEmpty, IsString} from 'class-validator';
import {errorMessages} from "../../generics/error_messages";

export class AddArticleDto {

    @IsString()
    @IsNotEmpty({ message: errorMessages.notEmptyErr() })
    title: string;

    @IsNotEmpty({ message: errorMessages.notEmptyErr() })
    description: string;

}

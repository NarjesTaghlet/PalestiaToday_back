import {IsNotEmpty, IsString} from "class-validator";
import {errorMessages} from "../../generics/error_messages";

export class AddArticleDto {

    @IsString()
    @IsNotEmpty({ message: errorMessages.notEmptyErr() })
    titre: string;

    @IsNotEmpty({ message: errorMessages.notEmptyErr() })
    description: string;

}

import { IsNumber, IsString } from "class-validator";

export class UserDto {
    @IsNumber()
    id: number;

    @IsString()
    name: string;

    @IsString()
    contact: string;

    @IsString()
    phoneNb: string;

    @IsNumber()
    employees: number;
}
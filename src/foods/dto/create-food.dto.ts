import { IsNotEmpty, IsNumber, IsString } from 'class-validator';


export class CreateFoodDto {
    @IsString()
    @IsNotEmpty()
    name!: string;
    @IsString()
    @IsNotEmpty()
    description!: string;
    @IsNumber()
    @IsNotEmpty()
    price!: number;
    @IsString()
    @IsNotEmpty()
    image!: string;
    @IsString()
    @IsNotEmpty()
    category!: string;
}

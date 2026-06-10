import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateFoodDto } from './dto/create-food.dto';
import { UpdateFoodDto } from './dto/update-food.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Food } from './entities/food.entity';




@Injectable()
export class FoodsService {
  constructor(
    @InjectRepository(Food)
    private foodRepository: Repository<Food>,
  ) {

  }


  async create(createFoodDto: CreateFoodDto) {
  console.log('DTO recibido:', createFoodDto);

  const food = this.foodRepository.create(createFoodDto);
  console.log('Entidad creada:', food);

  const saved = await this.foodRepository.save(food);
  console.log('Guardado en DB:', saved);

  return saved;
}

  async findAll() {
    const foods = await this.foodRepository.find();
    return foods;
  }

  async findOne(id: number) {
    const food = await this.foodRepository.findOneBy({ id });
    if(!food) {
      throw new NotFoundException(`comida con el id ${id} no encontrada`);
    }
    return food;  
  }

  async update(id: number, updateFoodDto: UpdateFoodDto) {
      const food = await this.foodRepository.findOneBy({ id } );
      if(!food) {
        throw new NotFoundException(`comida con el id ${id} no encontrada`);
      }
      const updatedFood = this.foodRepository.merge(food, updateFoodDto);
      return await this.foodRepository.save(updatedFood);

  }

  async remove(id: number) {
    const food = await this.foodRepository.findOneBy({ id });
    if(!food) {
      throw new NotFoundException(`comida con el id ${id} no encontrada`);
    }
    await this.foodRepository.delete(id);
    return { message: `comida con el id ${id} eliminada` };
  }
}

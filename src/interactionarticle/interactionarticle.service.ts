import { Injectable } from '@nestjs/common';
import { CreateInteractionarticleDto } from './dto/create-interactionarticle.dto';
import { UpdateInteractionarticleDto } from './dto/update-interactionarticle.dto';

@Injectable()
export class InteractionarticleService {
  create(createInteractionarticleDto: CreateInteractionarticleDto) {
    return 'This action adds a new interactionarticle';
  }

  findAll() {
    return `This action returns all interactionarticle`;
  }

  findOne(id: number) {
    return `This action returns a #${id} interactionarticle`;
  }

  update(id: number, updateInteractionarticleDto: UpdateInteractionarticleDto) {
    return `This action updates a #${id} interactionarticle`;
  }

  remove(id: number) {
    return `This action removes a #${id} interactionarticle`;
  }
}

import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { InteractionarticleService } from './interactionarticle.service';
import { CreateInteractionarticleDto } from './dto/create-interactionarticle.dto';
import { UpdateInteractionarticleDto } from './dto/update-interactionarticle.dto';

@Controller('interactionarticle')
export class InteractionarticleController {
  constructor(private readonly interactionarticleService: InteractionarticleService) {}

  @Post()
  create(@Body() createInteractionarticleDto: CreateInteractionarticleDto) {
    return this.interactionarticleService.create(createInteractionarticleDto);
  }

  @Get()
  findAll() {
    return this.interactionarticleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.interactionarticleService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateInteractionarticleDto: UpdateInteractionarticleDto) {
    return this.interactionarticleService.update(+id, updateInteractionarticleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.interactionarticleService.remove(+id);
  }
}

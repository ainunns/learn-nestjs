import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  findAll() {
    return [];
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return { id };
  }

  @Post()
  create(@Body() user: {}) {
    return user;
  }

  @Patch(':id')
  updateById(@Param('id') id: string, @Body() userUpdate: {}) {
    return { id, ...userUpdate };
  }

  @Delete(':id')
  deleteById(@Param('id') id: string) {
    return { id }
  }
}

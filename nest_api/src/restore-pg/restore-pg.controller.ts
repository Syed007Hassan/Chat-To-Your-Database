import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { RestorePgService } from './restore-pg.service';
import { CreateRestorePgDto } from './dto/create-restore-pg.dto';
import { UpdateRestorePgDto } from './dto/update-restore-pg.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('restore-pg')
@Controller('restore-pg')
export class RestorePgController {
  constructor(private readonly restorePgService: RestorePgService) {}

  @Post('loadDataBaseDump')
  @ApiOperation({
    summary: 'Load/Import the database dump',
  })
  async loadDataBaseDump() {
    try {
      const data = await this.restorePgService.loadDataBaseDump();
      return { success: true, data: data };
    } catch (err) {
      return { success: false, message: err.message };
    }
  }

  @Get('listAllContainers')
  @ApiOperation({
    summary: 'List all containers',
  })
  async listAllContainers() {
    try {
      const containers = await this.restorePgService.listAllContainers();
      return { success: true, data: containers };
    } catch (err) {
      return { success: false, message: err.message };
    }
  }

  @Post()
  create(@Body() createRestorePgDto: CreateRestorePgDto) {
    return this.restorePgService.create(createRestorePgDto);
  }

  @Get()
  findAll() {
    return this.restorePgService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.restorePgService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateRestorePgDto: UpdateRestorePgDto,
  ) {
    return this.restorePgService.update(+id, updateRestorePgDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.restorePgService.remove(+id);
  }
}

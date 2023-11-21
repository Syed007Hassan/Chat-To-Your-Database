import { Module } from '@nestjs/common';
import { RestorePgService } from './restore-pg.service';
import { RestorePgController } from './restore-pg.controller';

@Module({
  controllers: [RestorePgController],
  providers: [RestorePgService],
})
export class RestorePgModule {}

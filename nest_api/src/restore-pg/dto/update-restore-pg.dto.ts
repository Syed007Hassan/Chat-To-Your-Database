import { PartialType } from '@nestjs/mapped-types';
import { CreateRestorePgDto } from './create-restore-pg.dto';

export class UpdateRestorePgDto extends PartialType(CreateRestorePgDto) {}

import { Injectable } from '@nestjs/common';
import { CreateRestorePgDto } from './dto/create-restore-pg.dto';
import { UpdateRestorePgDto } from './dto/update-restore-pg.dto';

import * as Docker from 'dockerode';

@Injectable()
export class RestorePgService {
  async loadDataBaseDump() {
    // Define the path to the dump file inside the container
    const dumpFilePath = '/dbDumpFile/postgres.tar';

    try {
      // Create a new Docker object
      const docker = new Docker({ socketPath: '/var/run/docker.sock' });

      // Get the 'postgres-db' container
      const container = docker.getContainer('ctyd-postgres');

      // Define the command to restore the database dump
      const command = [
        'bash',
        '-c',
        `PGPASSWORD=${process.env.PG_PASSWORD} pg_restore --verbose --clean --no-acl --no-owner -h${process.env.PG_HOST} -U${process.env.PG_USER} -d${process.env.PG_DB} ${dumpFilePath}`,
      ];

      // Define the options for the exec command
      const options = {
        Cmd: command,
        AttachStdout: true,
        AttachStderr: true,
      };

      // Create an exec instance with the command and options
      const exec = await container.exec(options);

      // Start the exec instance and attach a stream to its stdout and stderr
      const result = await new Promise((resolve, reject) => {
        exec.start({ hijack: true, stdin: true }, (err, stream) => {
          if (err) {
            reject(err);
          }

          // Demultiplex the stream into stdout and stderr
          container.modem.demuxStream(stream, process.stdout, process.stderr);

          // Resolve the promise when the stream ends
          stream.on('end', () => resolve('Command execution completed'));
        });
      });

      console.log('End of command execution');
      return result;
    } catch (error) {
      console.error(`Error is: ${error}`);
      throw error;
    }
  }

  async listAllContainers() {
    try {
      const docker = new Docker({ socketPath: '/var/run/docker.sock' });
      const containers = await docker.listContainers({ all: true });
      return containers;
    } catch (error) {
      console.error(`Error is: ${error}`);
      throw error;
    }
  }

  create(createRestorePgDto: CreateRestorePgDto) {
    return 'This action adds a new restorePg';
  }

  findAll() {
    return `This action returns all restorePg`;
  }

  findOne(id: number) {
    return `This action returns a #${id} restorePg`;
  }

  update(id: number, updateRestorePgDto: UpdateRestorePgDto) {
    return `This action updates a #${id} restorePg`;
  }

  remove(id: number) {
    return `This action removes a #${id} restorePg`;
  }
}

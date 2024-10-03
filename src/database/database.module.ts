import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            inject: [ConfigService],
            useFactory: (ConfigService: ConfigService) => {
                return {
                    type: 'postgres',
                    host: 'localhost',
                    port: 5432,
                    database: 'test_db',
                    username: 'root',
                    password: 'root',
                    autoLoadEntities: true,
                    synchronize: true
                }
            }
        })
    ]
})

export class DatabaseModule { }

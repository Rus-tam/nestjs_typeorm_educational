import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            inject: [ConfigService],
            useFactory: (configService: ConfigService) => {
                return {
                    type: 'postgres',
                    host: configService.getOrThrow('DB_HOST'),
                    port: configService.getOrThrow('DB_PORT'),
                    database: configService.getOrThrow('DB_NAME'),
                    username: configService.getOrThrow('DB_USER'),
                    password: configService.getOrThrow('DB_PASSWORD'),
                    autoLoadEntities: true,
                    synchronize: true
                }
            }
        })
    ]
})

export class DatabaseModule { }

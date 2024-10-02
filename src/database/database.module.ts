import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            useFactory: (ConfigService: ConfigService) => ({
                type: 'postgres',
                host: '172.18.0.2',
                port: 5432,
                database: 'test_db',
                username: 'root',
                password: 'root',
                autoLoadEntities: true,
                synchronize: true
            }),
            inject: [ConfigService],
        })
    ]
})

export class DatabaseModule { }

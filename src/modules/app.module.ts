import { Module } from '@nestjs/common';
import { CatsController } from "../cats/cats.controller";
import { CatsService } from "../cats/cats.service";

@Module({
    modules: [],
    controllers: [CatsController],
    components: [CatsService]
})
export class ApplicationModule { }
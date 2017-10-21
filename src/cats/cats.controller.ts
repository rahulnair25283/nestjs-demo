import { Controller, Get } from "@nestjs/common";
import { Observable } from "rxjs/Observable";
import { CatsService } from "./cats.service";

@Controller('cats')
export class CatsController {

    constructor(private readonly catsService: CatsService) {}

    @Get()
    findAll(): Observable<any[]> {
        return Observable.of(this.catsService.findAll());
    }
}
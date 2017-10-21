import { Component } from "@nestjs/common";
import { Cat } from "./cat";

@Component()
export class CatsService {

    private readonly cats: Cat[] = [];

    findAll(): Cat[] {
        this.cats.push({ name: "Maxi", breed: "polish polski" })
        return this.cats;
    }
}
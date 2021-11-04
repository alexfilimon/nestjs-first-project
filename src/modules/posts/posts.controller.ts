import { Controller, Get, Param } from "@nestjs/common";

@Controller('posts')
export class PostsController {
    @Get()
    findAll(): string {
        return `Return all properties`
    }

    @Get(':id')
    findOne(@Param('id') id: number): string {
        return `Return post with id: ${id}`
    }
}
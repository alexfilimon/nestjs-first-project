import { Injectable } from "@nestjs/common";
import { Post } from "./post.interface";

@Injectable()
export class PostsService {
    private readonly posts: Post[] = []
    
    create(post: Post) {
        this.posts.push(post)
    }
    findAll(): Post[] {
        return this.posts
    }
}
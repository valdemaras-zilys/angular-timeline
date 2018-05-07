/**
 * Post class represents Post model.
 */
export class Post {
    id: number;
    message: string;
    submitedAt: Date;

    constructor() {
        this.message = '';
    }
}

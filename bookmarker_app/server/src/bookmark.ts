import {randomUUID} from 'node:crypto';
import z, { date } from 'zod';
import {generateIconURL} from './utils'

const bookmarks: Bookmark[] = [];

interface Bookmark {
    id: string;
    url: string;
    icon:{
        url: string;
        version: number;
    }
    createdAt: Date;
    updatedAt: Date;
}

interface AddOptions {
    url: string;
}

const addOptionsSchema = z.object({
    url: z.string().url(),
});

export async function list() {
    return bookmarks;
}

export async function add(options: AddOptions) {
    const params = addOptionsSchema.parse(options);

    const bookmark: Bookmark = {
        id: randomUUID(),
        url: params.url,
        icon: {
            url: generateIconURL(params.url),  
            version: Date.now(),
        },
        createdAt: new Date(),
        updatedAt: new Date(),
    };
    bookmarks.push(bookmark);
    return bookmark;
}   

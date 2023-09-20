import { DatabaseConnection, sql } from '@databases/sqlite';
import {randomUUID} from 'node:crypto';
import z, { date } from 'zod';
import {generateIconURL} from './utils'

interface Bookmark {
    id: string;
    url: string;
    icon_url: string; 
    icon_version: number;
    createdAt: Date;
    updatedAt: Date;
}

interface AddOptions {
    url: string;
}

const addOptionsSchema = z.object({
    url: z.string().url(),
});

export async function list(db: DatabaseConnection) {
    return db.query(sql`SELECT * FROM bookmarks`);
}

export async function add(db: DatabaseConnection, options: AddOptions) {
    const params = addOptionsSchema.parse(options);

    const bookmark: Bookmark = {
        id: randomUUID(),
        url: params.url,
        icon_url: generateIconURL(params.url),  
        icon_version: Date.now(),
        createdAt: new Date(),
        updatedAt: new Date(),
    };
    await db.query(sql`INSERT INTO bookmarks (
        id,
        url,
        icon_url,
        icon_version,
        created_at,
        updated_at
    ) VALUES (
        ${bookmark.id},
        ${bookmark.url},
        ${bookmark.icon_url},
        ${bookmark.icon_version},
        ${bookmark.createdAt},
        ${bookmark.updatedAt}
    );`);

    return bookmark;
}   

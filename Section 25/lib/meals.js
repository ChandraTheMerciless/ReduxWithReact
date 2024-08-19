import sql from 'better-sqlite3';

const db = sql('meals.db');

export async function getMeals() {
    // adding arbitrary delay to simulate slower network and need for promise in main server component. Also, to explore loading states
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // throw new Error("Failed to fetch meals");
    

    // all() means get all rows in db
    return db.prepare('SELECT * FROM meals').all();
}

export function getMeal(slug) {
    // under the hood, using the "get" method like this is protected from sql injections
    return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
}
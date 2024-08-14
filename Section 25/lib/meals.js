import sql from 'better-sqlite3';

const db = sql('meals.db');

export async function getMeals() {
    // adding arbitrary delay to simulate slower network and need for promise in main server component. Also, to explore loading states
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // all() means get all rows in db
    return db.prepare('SELECT * FROM meals').all();
}
import { Suspense } from 'react';

import Link from 'next/link';

import classes from './page.module.css';
import MealsGrid from '@/components/meals/meals-grid';
import { getMeals } from '@/lib/meals';

async function Meals() {
    // not safe to do in vanilla React, but this is safe here because we're in a server component
    const meals = await getMeals();

    return (
        <MealsGrid meals={meals} />
    );
}

// can't normally turn component into async, but we can in next server components
export default function MealsPage() {
    return (
        <>
            <header className={classes.header}>
                <h1>Delicious meals, created{' '}
                    <span className={classes.highlight}>by you</span>
                </h1>
                <p>Choose your favorite recipe.</p>
                <p className={classes.cta}>
                    <Link href="/meals/share">Share Your Favorite Recipe</Link>
                </p>
            </header>
            <main className={classes.main}>
                {/* Suspense is default to react, and lets us handle loading states and show fallback content until resource loads */}
                <Suspense fallback={<p className={classes.loading}>Loading meals...</p>}>
                    <Meals />
                </Suspense>
            </main>
        </>
    )
}
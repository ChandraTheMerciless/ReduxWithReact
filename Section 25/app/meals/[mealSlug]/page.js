import Image from 'next/image';

import classes from './page.module.css';
import { getMeal } from '@/lib/meals';

export default function MealDetailsPage({ params }) {
  const {title, image, creator_email, creator, summary, instructions} = getMeal(params.mealSlug);

  const formattedInstructions = instructions.replace(/\n/g, '<br/>');

  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={image} alt={title} fill />
        </div>
        <div className={classes.headerText}>
          <h1>{title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto: ${creator_email}`}>{creator}</a>
          </p>
          <p className={classes.summary}>{summary}</p>
        </div>
      </header>
      <main>
        {/* if dangerouslySetInnerHTML is not validated, you open yourself up to XXS attacks */}
        <p className={classes.instructions} dangerouslySetInnerHTML={{
          __html: formattedInstructions
        }}></p>
      </main>
    </>
  );
}
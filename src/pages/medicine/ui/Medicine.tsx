import { MedicinePrefixes } from '@/widgets/medicinePrefixes';

import classes from './Medicine.module.scss';

export const Medicines = () => {
  return (
    <section className={classes.content}>
      <h1 className={classes.title}>Алфавитный указатель лекарств</h1>
      <MedicinePrefixes />
    </section>
  );
};

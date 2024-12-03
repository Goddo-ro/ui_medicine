import { Paths, paths } from '@/shared/routes/routes';

type NavLink = {
  readonly title: string;
  readonly to: Paths[keyof Paths];
};

export const navLinks: NavLink[] = [
  {
    title: 'Лекарства и субстанции',
    to: paths.medicines,
  },
  {
    title: 'Справочник заболеваний',
    to: paths.disease,
  },
  {
    title: 'Личная аптечка',
    to: paths.medkit,
  },
  {
    title: 'Новости и события',
    to: paths.library,
  },
];

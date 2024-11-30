import { Paths, paths } from '@/shared/routes/routes';

type HeaderNavLinkType = {
  readonly title: string;
  readonly to: Paths[keyof Paths];
};

export const headerNavLinks: HeaderNavLinkType[] = [
  {
    title: 'Лекарства',
    to: paths.medicines,
  },
  {
    title: 'Заболевания',
    to: paths.disease,
  },
  {
    title: 'Аптечка',
    to: paths.medkit,
  },
];

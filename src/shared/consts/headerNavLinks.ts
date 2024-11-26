import { paths } from '@/shared/routes/routes';

export type IHeaderNavLinkType = {
  readonly title: string;
  readonly to: paths;
};

export const headerNavLinks: IHeaderNavLinkType[] = [
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

import { ERoute } from '@/shared/routes/routes';

// TODO: move const to router (if possible make widget)

export type IHeaderNavLinkType = {
  readonly title: string;
  readonly to: ERoute;
};

export const headerNavLinks: IHeaderNavLinkType[] = [
  {
    title: 'Лекарства',
    to: ERoute.medicines,
  },
  {
    title: 'Заболевания',
    to: ERoute.diseases,
  },
  {
    title: 'Аптечка',
    to: ERoute.medkit,
  },
];

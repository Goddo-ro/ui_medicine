import { IHeaderNavLinkType } from '@/shared/types/headerNavLinks';
import { ERoute } from '@/shared/types/routes';

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

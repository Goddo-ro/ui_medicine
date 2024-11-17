export const ERoute = {
  medicines: '/',
  medicinePointer: '/medicine/:letter',
  medicineInfo: '/medicine/info/:id',
  disease: '/disease',
  diseasePointer: '/disease/:letter',
  diseaseInfo: '/disease/info/:id',
  medkit: '/medkit',
  login: '/login',
  register: '/register',
} as const;

export type ERoute = (typeof ERoute)[keyof typeof ERoute];

type RouteParams = {
  [ERoute.medicinePointer]: { letter: string };
  [ERoute.medicineInfo]: { id: number };
  [ERoute.diseasePointer]: { letter: string };
  [ERoute.diseaseInfo]: { id: number };
};

export function generatePath<T extends keyof RouteParams>(
  route: T,
  params: RouteParams[T],
): string {
  let path = route as string;
  for (const [key, value] of Object.entries(params)) {
    path = path.replace(`:${key}`, value);
  }
  return path;
}

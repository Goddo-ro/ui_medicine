// TODO: remove type prefix for all types

export const paths = {
  medicines: '/medicine',
  medicinePointer: '/medicine/:letter',
  medicineInfo: '/medicine/info/:id',
  disease: '/disease',
  diseasePointer: '/disease/:letter',
  diseaseInfo: '/disease/info/:id',
  medkit: '/',
  login: '/login',
  register: '/register',
} as const;

type RouteParams = {
  [paths.medicinePointer]: { letter: string };
  [paths.medicineInfo]: { id: number };
  [paths.diseasePointer]: { letter: string };
  [paths.diseaseInfo]: { id: number };
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

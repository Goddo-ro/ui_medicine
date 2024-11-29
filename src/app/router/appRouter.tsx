import { AuthRouter } from '@/app/router/AuthRoute';
import store from '@/app/store';
import { checkAuth } from '@/entities/viewer';
import { Suspense, lazy } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { Disease } from '@/pages/disease';
import { DiseaseInfo } from '@/pages/diseaseInfo';
import { DiseasePointer } from '@/pages/diseasePointer';
import { LoginPage } from '@/pages/login';
import { Medicines } from '@/pages/medicine';
import { MedicineInfo } from '@/pages/medicineInfo';
import { MedicinePointer } from '@/pages/medicinePointer';
import { NotFound } from '@/pages/notFound';
import { RegisterPage } from '@/pages/register';
import { Root } from '@/pages/root';

import { paths } from '@/shared/routes/routes';

const Medkit = lazy(() =>
  import('@/pages/medkit/ui/Medkit').then((module) => ({
    default: module.Medkit,
  })),
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    loader: authLoader,
    children: [
      {
        path: paths.medicines,
        element: <Medicines />,
      },
      {
        path: paths.medicinePointer,
        element: <MedicinePointer />,
      },
      {
        path: paths.disease,
        element: <Disease />,
      },
      {
        path: paths.diseasePointer,
        element: <DiseasePointer />,
      },
      {
        path: paths.diseaseInfo,
        element: <DiseaseInfo />,
      },
      {
        element: <AuthRouter redirectPath={paths.login} />,
        children: [
          {
            path: paths.medkit,
            // element: <Medkit />,
            element: (
              <Suspense>
                <Medkit />
              </Suspense>
            ),
          },
        ],
      },
      {
        element: <AuthRouter redirectPath={paths.medkit} allowIfAuth={false} />,
        children: [
          {
            path: paths.login,
            element: <LoginPage />,
          },
          {
            path: paths.register,
            element: <RegisterPage />,
          },
        ],
      },
      {
        path: paths.medicineInfo,
        element: <MedicineInfo />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

async function authLoader() {
  const state = store.getState();

  if (state.auth.isAuth) {
    return true;
  }

  try {
    return await store.dispatch(checkAuth()).unwrap();
  } catch {
    return false;
  }
}

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};

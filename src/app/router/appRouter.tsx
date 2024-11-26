import { BrowserRouter, useRoutes } from 'react-router-dom';

import { Disease } from '@/pages/disease';
import { DiseaseInfo } from '@/pages/diseaseInfo';
import { DiseasePointer } from '@/pages/diseasePointer';
import { LoginPage } from '@/pages/login';
import { Medicines } from '@/pages/medicine';
import { MedicineInfo } from '@/pages/medicineInfo';
import { MedicinePointer } from '@/pages/medicinePointer';
import { Medkit } from '@/pages/medkit';
import { RegisterPage } from '@/pages/register';
import { Root } from '@/pages/root';

import { paths } from '@/shared/routes/routes';

// TODO: add protected routes with loader logic
// TODO: add not found page

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
};

const Router = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <Root />,
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
          path: paths.medkit,
          element: <Medkit />,
        },
        {
          path: paths.login,
          element: <LoginPage />,
        },
        {
          path: paths.register,
          element: <RegisterPage />,
        },
        {
          path: paths.medicineInfo,
          element: <MedicineInfo />,
        },
      ],
    },
  ]);

  return routes;
};

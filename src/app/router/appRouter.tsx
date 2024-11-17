import { Route, RouteProps, Routes } from 'react-router-dom';

import { Disease } from '@/pages/disease';
import { DiseasePointer } from '@/pages/diseasePointer';
import { LoginPage } from '@/pages/login';
import { Medicines } from '@/pages/medicine';
import { MedicineInfo } from '@/pages/medicineInfo/MedicineInfo';
import { MedicinePointer } from '@/pages/medicinePointer';
import { Medkit } from '@/pages/medkit';
import { RegisterPage } from '@/pages/register';
import { Root } from '@/pages/root';

import { ERoute } from '@/shared/routes/routes';

// TODO: add protected routes
// TODO: add not found page

const routesList: RouteProps[] = [
  {
    path: ERoute.medicines,
    element: <Medicines />,
  },
  {
    path: ERoute.medicinePointer,
    element: <MedicinePointer />,
  },
  {
    path: ERoute.disease,
    element: <Disease />,
  },
  {
    path: ERoute.diseasePointer,
    element: <DiseasePointer />,
  },
  {
    path: ERoute.medkit,
    element: <Medkit />,
  },
  {
    path: ERoute.login,
    element: <LoginPage />,
  },
  {
    path: ERoute.register,
    element: <RegisterPage />,
  },
  {
    path: ERoute.medicineInfo,
    element: <MedicineInfo />,
  },
];

export const AppRouter = () => {
  const routes = routesList.map((route, index) => (
    <Route key={index} {...route} />
  ));

  return (
    <Routes>
      <Route path='/' element={<Root />}>
        {routes}
      </Route>
    </Routes>
  );
};

import { Route, Routes } from 'react-router-dom';

import { RentingPage } from '../auth/pages/RentingPage';
import { BikesRoutes } from '../bikes';

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="renting" element={<RentingPage />} />

        <Route path="/*" element={<BikesRoutes />} />
      </Routes>
    </>
  );
};

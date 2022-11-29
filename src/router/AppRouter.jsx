import { Route, Routes } from 'react-router-dom';

import { RentPage } from '../auth/pages/RentPage';
import { BikesRoutes } from '../bikes';

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="rent" element={<RentPage />} />

        <Route path="/*" element={<BikesRoutes />} />
      </Routes>
    </>
  );
};

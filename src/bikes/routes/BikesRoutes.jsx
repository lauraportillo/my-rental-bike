import { Navigate, Route, Routes } from 'react-router-dom';
import { Navbar } from '../../ui';
import { CityPage, ElectricPage, SearchPage, RoadPage, BikePage } from '../pages';

export const BikesRoutes = () => {
  return (
    <>
      <Navbar />

      <div className="container">
        <Routes>
          <Route path="electric" element={<ElectricPage />} />
          <Route path="road" element={<RoadPage />} />
          <Route path="city" element={<CityPage />} />

          <Route path="search" element={<SearchPage />} />
          <Route path="bike/:id" element={<BikePage />} />

          <Route path="/" element={<Navigate to="/electric" />} />
        </Routes>
      </div>
    </>
  );
};

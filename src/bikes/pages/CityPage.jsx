import { BikeList } from '../components';

export const CityPage = () => {
  return (
    <>
      <h1 className="mt-3 mb-3">City Bikes</h1>

      <BikeList type="City" />
    </>
  );
};

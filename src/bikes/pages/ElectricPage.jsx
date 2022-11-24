import { BikeList } from '../components';

export const ElectricPage = () => {
  return (
    <>
      <h1 className="p-3">Electric Bikes</h1>

      <BikeList type="Electric" />
    </>
  );
};

import { useMemo } from 'react';
import { BikeCard } from './BikeCard';
import { getBikesByType } from '../helpers';

export const BikeList = ({ type }) => {
  const bikes = useMemo(() => getBikesByType(type), [type]);

  return (
    <div className="row row-cols-1 row-cols-md-3 g-3">
      {bikes.map((bike) => (
        <BikeCard key={bike.id} {...bike} />
      ))}
    </div>
  );
};

import React from 'react';

import tw from 'tailwind-styled-components';
import CarItem from './CarItem';
import Loading from './Loading';
import NotFoundCar from './NotFoundCar';

const CarList = ({ carList, isLoading }) => {
  return (
    <CarListWrapper>
      {isLoading && <Loading />}
      {carList?.map(carInfo => (
        <CarItem carInfo={carInfo} key={`car_${carInfo.id}`} />
      ))}
      {JSON.stringify(carList) === '[]' && <NotFoundCar />}
    </CarListWrapper>
  );
};
const CarListWrapper = tw.div`


`;

export default CarList;

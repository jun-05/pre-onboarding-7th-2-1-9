import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import DetailWrapper from '../../component/detail/DetailWrapper';
import NotFoundCar from '../../component/main/NotFoundCar';
import { getCarListThunk } from '../../modules/car';

const DetailContainer = () => {
  const dispatch = useDispatch();
  const { data: carList } = useSelector(state => state.car.carList);
  const param = useParams();
  const carId = param.id;

  useEffect(() => {
    if (carList === null) {
      dispatch(getCarListThunk());
    }
  }, [carList, dispatch]);

  const carInfo = carList?.filter(carItem => carItem.id.toString() === carId)[0];

  if (carList === null) return;
  if (!carInfo) {
    return <NotFoundCar />;
  }

  return (
    <>
      <DetailWrapper carInfo={carInfo} />
    </>
  );
};
export default DetailContainer;

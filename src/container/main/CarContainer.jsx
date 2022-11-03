import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CarList from '../../component/main/CarList';
import { getCarListThunk, getCarWithTypeThunk } from '../../modules/car';
import TagList from './../../component/main/TagList';
import ErrorPage from './../../pages/ErrorPage';

const CarContainer = () => {
  const dispatch = useDispatch();
  const { data: carList } = useSelector(state => state.car.carList);
  const { tagNumber } = useSelector(state => state.tag);
  const {
    data: carItemsWithType,
    isLoading,
    hasError,
  } = useSelector(state => state.car.carWithType);
  const [isList, setIsList] = useState(true);

  useEffect(() => {
    if (carList === null) {
      dispatch(getCarListThunk());
    }
  }, [carList, dispatch]);

  const getCarFn = useCallback(
    tagInfo => {
      if (!tagInfo) {
        setIsList(true);
      } else {
        dispatch(getCarWithTypeThunk(tagInfo));
        setIsList(false);
      }
    },
    [dispatch]
  );

  if (carList === null) return;
  if (hasError) <ErrorPage />;

  return (
    <>
      <TagList carList={carList} getCarFn={getCarFn} />
      <CarList carList={tagNumber || !isList ? carItemsWithType : carList} isLoading={isLoading} />
    </>
  );
};

export default CarContainer;

import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAPIRegion } from '../redux/Regions/regions';

const Details = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAPIRegion());
  }, []);

  return (
    <h1>
      Hammas
    </h1>
  );
};

export default Details;

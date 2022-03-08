import React, { useEffect } from 'react';
import { getAPIRegion } from '../redux/Regions/regions';

const Details = () => {
  useEffect(() => {
    getAPIRegion();
  }, []);

  return (
    <h1>
      Hammas
    </h1>
  );
};

export default Details;

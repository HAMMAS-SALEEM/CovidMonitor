import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { getAPIRegion } from '../redux/Regions/regions';

const Details = ({ id }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAPIRegion(id));
  }, []);
  return (
    <h1>
      {id}
    </h1>
  );
};

Details.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Details;

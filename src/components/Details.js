import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { getAPIRegion } from '../redux/Regions/regions';

const Details = ({ id }) => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state.regionsReducer);
  console.log(store);
  useEffect(() => {
    dispatch(getAPIRegion(id));
  }, []);
  return (
    <section>
      {
        store.length === 0
          ? 'Loading...'
          : (
            <div>
              <h1>{store[0].name}</h1>
              <h2>{store[0].today_confirmed}</h2>
              <div className="regions_container">
                {
                  store[0].regions === 0
                    ? <h3>Not Avaiable</h3>
                    : store[0].regions.map((item) => (
                      <div key={item.id} className="single-region">
                        <h3>{item.name}</h3>
                        <h3>
                          <span>Total Confirmed Cases</span>
                          {item.today_confirmed}
                        </h3>
                        <h3 className="hidden">
                          <span>Total Death Cases</span>
                          {item.today_deaths}
                        </h3>
                      </div>
                    ))
                }
              </div>
            </div>
          )
      }
    </section>
  );
};

Details.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Details;

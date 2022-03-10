import '../stylesheets/details.css';
// import '../stylesheets/homepage.css';
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { getAPIRegion } from '../redux/Regions/regions';
import TitleContainer from './TitleContainer';
import globeIcon from '../images/icons/world-icon.svg';

const Details = ({ id }) => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state.regionsReducer);
  useEffect(() => {
    dispatch(getAPIRegion(id));
  }, []);
  return (
    <section className="details-section">
      {
        store.length === 0
          ? 'Loading...'
          : (
            <div>
              <TitleContainer category={id} store={store[0]} icon={globeIcon} />

              <div className="regions_container">
                {
                  store[0].regions === 0
                    ? <h3>Not Avaiable</h3>
                    : store[0].regions.map((item) => (
                      <div type="button" key={item.id} id={item.id} className="single-region">
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

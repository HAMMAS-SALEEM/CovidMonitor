import '../stylesheets/details.css';
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { getAPIRegion } from '../redux/Regions/regions';
import TitleContainer from './TitleContainer';
import globeIcon from '../images/icons/world-icon.svg';
import nextIcon from '../images/icons/next-icon.svg';

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

              <div className="regions-container">
                {
                  store[0].regions.length === 0
                    ? <span className="no-region">No Regions Available</span>
                    : store[0].regions.map((item, index) => (
                      <div key={item.id} style={{ backgroundColor: index % 2 === 0 ? '#d1447a' : '#e74083' }} className="region-available">
                        <span className="region-name">
                          {item.name}
                        </span>
                        <span className="region-cases">
                          {item.today_confirmed}
                          <span>Cases</span>
                        </span>
                        <div className="region-next-icon">
                          <img className="next-icon-details" src={nextIcon} alt="next-icon" />
                        </div>
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

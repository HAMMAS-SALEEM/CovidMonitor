import '../stylesheets/homepage.css';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { getAPIData } from '../redux/Countries/countries';
import TitleContainer from './TitleContainer';
import globeIcon from '../images/icons/globe-icon.svg';
import worldIcon from '../images/icons/world-icon.svg';
import nextIcon from '../images/icons/next-icon.svg';
import { currDate } from '../logics/date';

const Homepage = ({ handleDetail }) => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countriesReducer);
  const handleSearch = (e) => {
    setValue(e.target.value.toLowerCase());
  };
  useEffect(() => {
    if (countries.length === 0) {
      dispatch(getAPIData());
    }
  }, []);
  return (
    <section>
      {
        countries.length === 0
          ? <h1>Loading...</h1>
          : (
            <TitleContainer
              category="Global Cases"
              store={countries[1][0]}
              icon={globeIcon}
              handleSearch={handleSearch}
              ticker={`STATS BY COUNTRY - ${currDate}`}
            />
          )
      }

      {
        countries.length === 0
          ? 'Please wait'
          : (
            <ul className="countries-container">
              {
              countries[0].filter((item) => {
                if (value === '') {
                  return item;
                }
                return item.name.toLowerCase().includes(value);
              }).map((item) => (
                <li className="active-item" key={item.id}>
                  <Link id={item.name} onClick={handleDetail} className="country-link" to="./details">
                    <img className="next-icon" id={item.name} src={nextIcon} alt="next-icon" />
                  </Link>
                  <img className="country-map" src={worldIcon} alt="world-icon" />
                  <h3 className="country-name">{item.name}</h3>
                  <h3 className="country-cases">{item.today_confirmed}</h3>
                </li>
              ))
            }
            </ul>
          )
      }
    </section>
  );
};

Homepage.propTypes = {
  handleDetail: PropTypes.func.isRequired,
};

export default Homepage;

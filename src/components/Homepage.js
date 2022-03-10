import '../stylesheets/homepage.css';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { getAPIData } from '../redux/Countries/countries';
import worldIcon from '../images/icons/world-icon.png';

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
            <div className="countries-head">
              <div className="countries-header-data">
                <img src={worldIcon} alt="world-icon" />
                <div className="world-data">
                  <h2>Global Cases</h2>
                  <h3>{countries[1][0].today_confirmed}</h3>
                </div>
              </div>
              <input type="text" placeholder="Search Countries..." className="search-bar" onInput={handleSearch} />
            </div>
          )
      }
      {
        countries.length === 0
          ? null
          : countries[0].filter((item) => {
            if (value === '') {
              return item;
            }
            return item.name.toLowerCase().includes(value);
          }).map((item) => (
            <Link id={item.name} onClick={handleDetail} className="country-link" key={item.id} to="./details">
              <h1 id={item.name}>{item.name}</h1>
            </Link>
          ))
      }
    </section>
  );
};

Homepage.propTypes = {
  handleDetail: PropTypes.func.isRequired,
};

export default Homepage;

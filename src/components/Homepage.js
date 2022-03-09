import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { getAPIData } from '../redux/Countries/countries';

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
            <div>
              <h1>{countries[1][0].today_confirmed}</h1>
              <input type="text" className="search-bar" onInput={handleSearch} />
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
            <Link id={item.name} onClick={handleDetail} className="country-link" key={item.id} to="./details">{item.name}</Link>
          ))
      }
    </section>
  );
};

Homepage.propTypes = {
  handleDetail: PropTypes.func.isRequired,
};

export default Homepage;

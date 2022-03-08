import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAPIData } from '../redux/Countries/countries';

const Homepage = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countriesReducer);
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
            </div>
          )
      }
      {
        countries.length === 0
          ? null
          : countries[0].map((item) => <Link id={item.id} onClick={(e) => console.log(e.target.id)} className="country-link" key={item.id} to="./details">{item.name}</Link>)
      }
    </section>
  );
};

export default Homepage;

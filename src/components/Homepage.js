import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import objToArr from '../logics/objToArr';
import { getAPI } from '../redux/Countries/countries';

const Homepage = () => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state.countriesReducer);
  const today = new Date();
  const date = `${today.getFullYear()}-${today.getMonth().toString().padStart(2, 0)}-${today.getDate().toString().padStart(2, 0)}`;
  useEffect(() => {
    fetch(`https://api.covid19tracking.narrativa.com/api/${date}`)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        const data = objToArr(json.dates[date].countries);
        dispatch(getAPI(data));
      });
  }, []);
  return (
    <ul>
      {
          store.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))
      }
    </ul>
  );
};

export default Homepage;

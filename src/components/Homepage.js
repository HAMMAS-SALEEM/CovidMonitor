import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAPIData } from '../redux/Countries/countries';

const Homepage = () => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state.countriesReducer);
  console.log(store);

  useEffect(() => {
    if (store.length === 0) { dispatch(getAPIData()); }
  }, []);
  return (
    <section>
      {
          store.map((item) => (
            <Link className="links" id={item.id} to="./details" onClick={(e) => console.log(e.target.id)} key={item.id}>{item.name}</Link>
          ))
      }
    </section>
  );
};

export default Homepage;

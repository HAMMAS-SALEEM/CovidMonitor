import React, { useEffect } from 'react';

const Homepage = () => {
  const today = new Date();
  const date = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
  console.log(date);
  useEffect(() => {
    fetch(`https://api.covid19tracking.narrativa.com/api/${date}`)
      .then((res) => res.json())
      .then((json) => console.log(json.dates));
  }, []);
  return (
    <h1>Homepage</h1>
  );
};

export default Homepage;

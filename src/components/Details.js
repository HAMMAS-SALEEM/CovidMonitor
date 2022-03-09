import React, { useEffect } from 'react';

const Details = () => {
  const today = new Date();
  const date = `${today.getFullYear()}-${(today.getMonth() + 1).toString().padStart(2, 0)}-${today.getDate().toString().padStart(2, 0)}`;
  useEffect(() => {
    fetch(`https://api.covid19tracking.narrativa.com/api/${date}/country/pakistan`)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
      });
  }, []);
  return (
    <h1>
      Hammas
    </h1>
  );
};
export default Details;

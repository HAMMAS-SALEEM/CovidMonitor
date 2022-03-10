import React from 'react';
import '../stylesheets/homepage.css';
import PropTypes from 'prop-types';

const TitleContainer = ({ icon, store }) => (
  <div className="countries-header-data">
    <img src={icon} alt="world-icon" />
    <div className="world-data">
      <h2>Global Cases</h2>
      <h3>{store.today_confirmed}</h3>
    </div>
  </div>
);

TitleContainer.propTypes = {
  icon: PropTypes.string.isRequired,
  store: PropTypes.shape({
    today_confirmed: PropTypes.number.isRequired,
  }).isRequired,
};

export default TitleContainer;

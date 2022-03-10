import React from 'react';
import '../stylesheets/titleContainer.css';
import PropTypes from 'prop-types';

const TitleContainer = ({ category, icon, store }) => (
  <div className="countries-header-data">
    <img src={icon} alt="world-icon" />
    <div className="world-data">
      <h2>{category}</h2>
      <h3>{store.today_confirmed}</h3>
    </div>
  </div>
);

TitleContainer.propTypes = {
  category: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  store: PropTypes.shape({
    today_confirmed: PropTypes.number.isRequired,
  }).isRequired,
};

export default TitleContainer;

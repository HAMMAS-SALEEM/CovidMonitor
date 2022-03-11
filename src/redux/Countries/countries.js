import objToArr from '../../logics/objToArr';
import date from '../../logics/date';

export const GET_API = 'CovidMonitor/data/GET_API';

const getCountries = (payload) => ({
  type: GET_API,
  payload,
});

export const getAPIData = () => (dispatch) => {
  fetch(`https://api.covid19tracking.narrativa.com/api/${date}`)
    .then((res) => res.json())
    .then((json) => {
      const data = objToArr(json);
      dispatch(getCountries(data));
    });
};

const initialState = [];

const countriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_API:
      return [...state, ...action.payload];
    default:
      return state;
  }
};

export default countriesReducer;

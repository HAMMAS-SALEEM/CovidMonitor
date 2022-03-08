import { objToArr } from '../../logics/objToArr';

const GET_API = 'CovidMonitor/data/GET_API';

export const getAPI = (payload) => ({
  type: GET_API,
  payload,
});

export const getAPIData = () => (dispatch) => {
  const today = new Date();
  const date = `${today.getFullYear()}-${today.getMonth().toString().padStart(2, 0)}-${today.getDate().toString().padStart(2, 0)}`;
  console.log(date);
  fetch(`https://api.covid19tracking.narrativa.com/api/${date}`)
    .then((res) => res.json())
    .then((json) => {
      const date = objToArr(json);
      dispatch(getAPI(date));
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

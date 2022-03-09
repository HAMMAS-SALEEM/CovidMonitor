import { convertToArr } from '../../logics/objToArr';
import date from '../../logics/date';

const GET_API_REGION = 'CovidMonitor/data/GET_API_REGION';

const getAPI = (payload) => ({
  type: GET_API_REGION,
  payload,
});

export const getAPIRegion = (id) => (dispatch) => {
  fetch(`https://api.covid19tracking.narrativa.com/api/${date}/country/${id}`)
    .then((res) => res.json())
    .then((json) => {
      const data = convertToArr(json, id, date);
      dispatch(getAPI(data));
    });
};

const initialState = [];

const regionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_API_REGION:
      return [...state.slice(0, 0), ...action.payload];
    default:
      return state;
  }
};

export default regionsReducer;

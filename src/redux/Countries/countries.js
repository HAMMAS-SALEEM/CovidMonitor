const GET_API = 'CovidMonitor/data/GET_API';

export const getAPI = (payload) => ({
  type: GET_API,
  payload,
});

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

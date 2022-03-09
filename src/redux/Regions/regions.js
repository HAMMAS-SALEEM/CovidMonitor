// import objToArr from '../../logics/objToArr';

const GET_REGION_API = 'CovidMonitor/data/GET_REGION_API';

// const getAPI = (payload) => ({
//   type: GET_API,
//   payload,
// });

export const getAPIRegion = (id) => {
  const today = new Date();
  const date = `${today.getFullYear()}-${(today.getMonth() + 1).toString().padStart(2, 0)}-${today.getDate().toString().padStart(2, 0)}`;
  fetch(`https://api.covid19tracking.narrativa.com/api/${date}/country/${id}`)
    .then((res) => res.json())
    .then((json) => {
      console.log(json);
      // console.log(objToArr(json, id));
    });
};

const initialState = [];

const regionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_REGION_API:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default regionsReducer;

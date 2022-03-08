// const GET_API = 'CovidMonitor/data/GET_API';

// // const getAPI = (payload) => ({
// //   type: GET_API,
// //   payload,
// // });

// export const getAPIRegion = () => {
//   const today = new Date();
//   const date = `
//     ${today.getFullYear()}-${today.getMonth().toString().padStart(2, 0)}-${today.getDate().toString().padStart(2, 0)}`;
//   fetch(`https://api.covid19tracking.narrativa.com/api/${date}/country/pakistan`)
//     .then((res) => res.json())
//     .then((json) => {
//       console.log(json);
//     });
// };

// const initialState = [];

// const regionsReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case GET_API:
//       return [...state, action.payload];
//     default:
//       return state;
//   }
// };

// export default regionsReducer;

export const getAPIData = () => () => {
  console.log('Test Get api data');
  const obj = {
    dates: {
      '2022-03-11': {
        countries: {
          pakistan: '194759',
        },
      },
    },
  };
  return obj;
};

export default getAPIData;

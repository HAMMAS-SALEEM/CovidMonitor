export const getAPIRegion = () => () => {
  const obj = {
    dates: {
      '2022-03-11': {
        countries: {
          pakistan: {
            confirmed_cases: '102848',
          },
        },
      },
    },
  };
  return obj;
};

export default getAPIRegion;

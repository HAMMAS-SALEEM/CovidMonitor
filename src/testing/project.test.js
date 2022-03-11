import objToArr, { convertToArr } from '../logics/objToArr';
import date from '../logics/date';
import countriesReducer, { getCountries, getAPIData } from '../redux/Countries/countries';
import regionsReducer, { getAPI, getAPIRegion } from '../redux/Regions/regions';

jest.mock('../redux/Countries/countries');
jest.mock('../redux/Regions/regions');

describe('Convert Object of Obj to Array of Obj', () => {
  test('should return Arr of Obj Countries', () => {
    const obj = {
      dates: {
        [date]: {
          countries: {
            Pakistan: { id: 1, name: 'pakistan' },
            India: { id: 2, name: 'india' },
            Afghanistan: { id: 3, name: 'afghanistan' },
          },
        },
      },
      total: {
        date,
        name: 'Total',
      },
    };
    expect(objToArr(obj)).toEqual([[{ id: 1, name: 'pakistan' },
      { id: 2, name: 'india' },
      { id: 3, name: 'afghanistan' }],
    [{ date, name: 'Total' }]]);
  });
  test('Convert obj to arr', () => {
    const id = 'Pakistan';
    const obj = {
      dates: {
        [date]: {
          countries: {
            Pakistan: {
              name: 'Hammas',
              age: 21,
            },
          },
        },
      },
    };
    expect(convertToArr(obj, id, date)).toStrictEqual([{ name: 'Hammas', age: 21 }]);
  });
});

describe('Mock APIs', () => {
  test('Mock Countries API', () => {
    const dispatch = jest.fn();
    dispatch(getAPIData());
  });
  test('Mock Regions API', () => {
    const dispatch = jest.fn();
    dispatch(getAPIRegion());
  });
});

describe('Testing Redux', () => {
  test('Testing Countries Reducer', () => {
    const initialState = [];
    const newState = countriesReducer(initialState, getCountries);
    expect(newState()).not.toBe(initialState);
  });
  test('Testing Countries State', () => {
    const initialState = [];
    const newState = countriesReducer(initialState, getCountries);
    expect(newState()).toStrictEqual({ dates: { '2022-03-11': { countries: { pakistan: '194759' } } } });
  });
  test('Testing Regions Reducer', () => {
    const initialState = [];
    const newState = regionsReducer(initialState, getAPI);
    expect(newState()).not.toBe(initialState);
  });
  test('Testing Regions State', () => {
    const initialState = [];
    const newState = regionsReducer(initialState, getAPI);
    expect(newState()).toStrictEqual({ dates: { '2022-03-11': { countries: { pakistan: { confirmed_cases: '102848' } } } } });
  });
});

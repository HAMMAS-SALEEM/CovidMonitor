import objToArr, { convertToArr } from '../logics/objToArr';
import date from '../logics/date';
import countriesReducer, { GET_API, getAPIData } from '../redux/Countries/countries';

jest.mock('../redux/Countries/countries');

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
});

describe('Testing Redux', () => {
  test('Testing Countries Reducer', () => {
    const initialState = [];
    const newState = countriesReducer(initialState, { type: GET_API, payload: [[{ id: '1', name: 'pakistan' }], [{ total: 1235634 }]] });
    console.log(newState);
    expect(newState()).not.toBe(initialState);
    // expect(newState()).toBe([[{id: '1', name: 'pakistan'}],[{total:1235634}]]);
  }),
  test('Testing Countries Reducer part 2', () => {
    const initialState = [];
    const newState = countriesReducer(initialState, { type: GET_API, payload: [[{ id: '1', name: 'pakistan' }], [{ total: 1235634 }]] });
    console.log(newState);
    // expect(newState()).not.toBe(initialState);
    expect(newState()).toBe([[{ id: '1', name: 'pakistan' }], [{ total: 1235634 }]]);
  });
});

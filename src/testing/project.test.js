import objToArr, { convertToArr } from '../logics/objToArr';
import date from '../logics/date';
// import getAPIData from '../redux/Countries/countries';

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

// describe('Testing APIs', () => {
//   test('Fetch Countries API', () => {
//     const dispatch = jest.fn();
//     expect(getAPIData(dispatch)).toBe({});
//   });
// });

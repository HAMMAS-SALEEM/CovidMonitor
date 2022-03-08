import { objToArr, KeyItem } from '../logics/objToArr';

describe('Convert Object of Obj to Array of Obj', () => {
  test('should return Arr of Obj', () => {
    const today = new Date();
    const date = `${today.getFullYear()}-${today.getMonth().toString().padStart(2, 0)}-${today.getDate().toString().padStart(2, 0)}`;
    const obj = {
      dates: {
        '2022-02-08': {
          countries: {
            Pakistan: { id: 1, name: 'pakistan' },
            India: { id: 2, name: 'india' },
            Afghanistan: { id: 3, name: 'afghanistan' },
          },
        },
      },
      total: {
        date: '2022-02-08',
        name: 'Total',
      },
    };
    expect(objToArr(obj)).toEqual([[{ id: 1, name: 'pakistan' }, { id: 2, name: 'india' }, { id: 3, name: 'afghanistan' }],
      [{ id: 'date', value: date },
        { id: 'name', value: 'Total' }]]);
  });
});

describe('Seach item on its id', () => {
  test('should return item matches to id', () => {
    const obj = [{ id: 1, name: 'Pakistan' }, { id: 2, name: 'India' }, { id: 3, name: 'China' }];
    expect(KeyItem(obj, 2, 'name')).toBe('Pakistan');
  });
});

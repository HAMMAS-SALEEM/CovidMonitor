import objToArr from '../logics/objToArr';

describe('Convert Object of Obj to Array of Obj', () => {
  test('should return Arr of Obj', () => {
    const today = new Date();
    const date = `${today.getFullYear()}-${(today.getMonth() + 1).toString().padStart(2, 0)}-${today.getDate().toString().padStart(2, 0)}`;
    const obj = {
      dates: {
        '2022-03-08': {
          countries: {
            Pakistan: { id: 1, name: 'pakistan' },
            India: { id: 2, name: 'india' },
            Afghanistan: { id: 3, name: 'afghanistan' },
          },
        },
      },
      total: {
        date: '2022-03-08',
        name: 'Total',
      },
    };
    expect(objToArr(obj)).toEqual([[{ id: 1, name: 'pakistan' }, { id: 2, name: 'india' }, { id: 3, name: 'afghanistan' }],
      [{ id: 'date', value: date },
        { id: 'name', value: 'Total' }]]);
  });
});

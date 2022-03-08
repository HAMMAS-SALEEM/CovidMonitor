import objToArr from '../logics/objToArr';

describe('Convert Object of Obj to Array of Obj', () => {
  test('should return Arr of Obj', () => {
    const obj = {
      dates: {'\n  2022-02-08\n  ' : {
        countries: {
          Pakistan : {id:1},
          India : {id:2},
          Afghanistan : {id:3},
        }
      }},
      total : {
        date: '\n  2022-02-08\n  ',
        name: "Total"
      }
    }
    expect(objToArr(obj)).toEqual([ [ { id: 1 }, { id: 2 }, { id: 3 } ],
      [ { id: 'date', value: '\n  2022-02-08\n  ' },
        { id: 'name', value: 'Total' } ] ]
  );
})
})

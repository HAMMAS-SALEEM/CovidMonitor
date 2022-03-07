import objToArr from "../logics/objToArr";


describe('Convert Object of Obj to Array of Obj', () => {
    test('should return Arr of Obj', () => {
        const objOfObj = {1 : {name: 'Pakistan'},
                          2 : {name: 'Afghanistan'},
                          3 : {name: 'China'}
                        }
        expect(objToArr(objOfObj)).toEqual(JSON.stringify([
            {"id": "1", "name": "Pakistan"},
            {"id": "2", "name": "Afghanistan"},
            {"id": "3", "name": "China"},
        ]))
    })
})
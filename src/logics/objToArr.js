const toggleData = (obj, id, date) => {
  const newDate = date;
  const newId = id;
  if (newId === '') {
    return Object.keys(obj.dates[newDate].countries).map((id) => (
      obj.dates[newDate].countries[id]
    ));
  }
  return undefined;
  // Object.keys(obj.dates[newDate].countries[newId]).map((id) => (

  //   obj.dates[newDate].countries[newId][id]
  // ));
};

const objToArr = (obj, id = '') => {
  const today = new Date();
  const date = `${today.getFullYear()}-${(today.getMonth() + 1).toString().padStart(2, 0)}-${today.getDate().toString().padStart(2, 0)}`;
  const countries = toggleData(obj, id, date);
  const { total } = obj;
  return [countries, [total]];
};

export const convertToArr = (obj, id, date) => {
  console.log(obj, id, date);
  return [obj.dates[date].countries[id]];
};

export default objToArr;

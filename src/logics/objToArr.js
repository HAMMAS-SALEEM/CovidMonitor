const objToArr = (obj) => {
  const today = new Date();
  const date = `${today.getFullYear()}-${today.getMonth().toString().padStart(2, 0)}-${today.getDate().toString().padStart(2, 0)}`;
  const countries = Object.keys(obj.dates[date].countries).map((id) => (
    obj.dates[date].countries[id]
  ));
  const { total } = obj;
  return [countries, [total]];
};

export default objToArr;

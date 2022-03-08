export const objToArr = (obj) => {
  const today = new Date();
  const date = `${today.getFullYear()}-${today.getMonth().toString().padStart(2, 0)}-${today.getDate().toString().padStart(2, 0)}`;
  const countries = Object.keys(obj.dates[date].countries).map((id) => (
    obj.dates[date].countries[id]
  ));
  const total = Object.keys(obj.total).map((id) => ({
    id,
    value: obj.total[id],
  }));
  return [countries, total];
};

export const KeyItem = ({ obj, key, value }) => {
  const item = obj.find((item) => {
    if (item.id === key) { return item; }
    return 'Item not found';
  });
  return <h1>{item[value]}</h1>;
};

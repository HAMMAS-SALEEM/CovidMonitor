const objToArr = (obj) => Object.keys(obj).map((id) => ({
  id, name: obj[id].name,
}));

export default objToArr;

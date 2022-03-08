/* eslint-disable react/prop-types */
// import PropTypes, { array } from 'prop-types';

const KeyItem = ({ obj, key, value }) => {
  const object = obj;
  const item = object.find((item) => {
    if (item.id === key) { return item; }
    return 'Item not found';
  });
  return <h1>{item[value]}</h1>;
};

export default KeyItem;

// KeyItem.propTypes = {
//   obj: PropTypes.shape(array).isRequired,
//   key: PropTypes.string.isRequired,
//   value: PropTypes.string.isRequired,
// };

const today = new Date();
const date = `${today.getFullYear()}-${(today.getMonth() + 1).toString().padStart(2, 0)}-${(today.getDate() - 1).toString().padStart(2, 0)}`;

export default date;

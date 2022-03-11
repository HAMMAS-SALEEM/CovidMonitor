const today = new Date();

const date = `${today.getFullYear()}-${(today.getMonth() + 1).toString().padStart(2, 0)}-${(today.getDate() - 1).toString().padStart(2, 0)}`;

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const month = months[today.getMonth()];
export const currDate = `${month} ${today.getDate().toString().padStart(2, 0)}, ${today.getFullYear()}`;
export default date;

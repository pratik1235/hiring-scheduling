
const timeExpired = (time) => {
  const now = +new Date();
  const createdAt = Date.parse(time);
  const threeDays = 60 * 60 * 24 * 1000 * 3;
  console.log(now, createdAt, time, +time)
  console.log(now - createdAt, threeDays)
  var compareDatesBoolean = (now - createdAt) > threeDays;
  console.log(compareDatesBoolean);
  return compareDatesBoolean;
}

export default timeExpired;


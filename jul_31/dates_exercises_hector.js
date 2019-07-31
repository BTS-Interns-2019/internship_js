function jsonTimes(date) {
  let d;
  if (Number.isInteger(date)) {
    d = new Date(date, 0);
  } else if (typeof date === 'string') {
    d = new Date(date);
  } else if (typeof date === 'object') {
    d = date;
  }
  
  const daysThirteen = [];
  for (let i = 0; i < 12; i++) {
    d.setUTCMonth(i, 13);
    
    if (d.getUTCDay() === 5) {
      daysThirteen.push(`${d.getUTCMonth() + 1}/${d.getUTCDate()}/${d.getUTCFullYear()}`);
    }
  }
  console.log(daysThirteen);

  return {
    times: daysThirteen.length,
    dates: [...daysThirteen]
  };
}

module.exports = jsonTimes;
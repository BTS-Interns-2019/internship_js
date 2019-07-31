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
  
  return {
    times: daysThirteen.length,
    dates: [...daysThirteen]
  };
}

function toLazyHuman(date1, date2 = new Date(Date.now())) {
  date1 = new Date(date1);
  console.log(date1, date2);
  let diff = date1 - date2;
  const isDiffNegative = diff < 0;
  diff = Math.abs(diff);
  const diffSecs = diff / 1000;
  const diffMins = diffSecs / 60;
  const diffHours = diffMins / 60;
  const diffDays = diffHours / 24;
  const diffMonths = diffDays / 30;
  const diffYears = diffMonths / 12;

  const roundedValues = {
    diffSecs: Math.round(diffSecs),
    diffMins: Math.round(diffMins),
    diffHours: Math.round(diffHours),
    diffDays: Math.round(diffDays),
    diffMonths: Math.round(diffMonths),
    diffYears: Math.round(diffYears),
  }

  for (let diff in roundedValues) {
    // if (diff < 1 && diff > 0) {
    //   roundedValues[diff] = 1;
    // } else if (diff < 2 && diff > 1) {
    //   roundedValues[diff] = 2;
    // } else if (diff < 5 && diff > 2) {
    //   roundedValues[diff] = 5;
    // } else if (diff < 10 && diff > 5) {
    //   roundedValues[diff] = 10;
    // } else if (diff < 20 && diff > 10) {
    //   roundedValues[diff] = 20;
    // } else if (diff < 30 && diff > 20) {
    //   roundedValues[diff] = 30;
    // }

    const lastDigit = roundedValues[diff] % 10;
    if (lastDigit <= 5 && lastDigit > 0) {
      roundedValues[diff] -= lastDigit;
    } else if (lastDigit > 5) {
      roundedValues[diff] += (10 - lastDigit);
    }
  }

  if (roundedValues.diffYears)

  console.log(roundedValues);
}

toLazyHuman(new Date() - (24*3600*1000));

module.exports = {
  jsonTimes,
  toLazyHuman
};
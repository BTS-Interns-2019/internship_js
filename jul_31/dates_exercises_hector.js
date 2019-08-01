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
    diffSecs: {
      total: Math.floor(diffSecs),
      roundedTop: false,
      rounded: false
    },
    diffMins: {
      total: Math.floor(diffMins),
      roundedTop: false,
      rounded: false,
    },
    diffHours: {
      total: Math.floor(diffHours),
      roundedTop: false,
      rounded: false
    },
    diffDays: {
      total: Math.floor(diffDays),
      roundedTop: false,
      rounded: false
    },
    diffMonths: {
      total: Math.floor(diffMonths),
      roundedTop: false,
      rounded: false
    },
    diffYears: {
      total: Math.floor(diffYears),
      roundedTop: false,
      rounded: false
    },
  }

  for (let diff in roundedValues) {
    const extraction = roundedValues[diff].total >= 10 ? -2 : -1;
    let lastDigits = Number.parseInt(roundedValues[diff].total.toString().slice(extraction));

    if (lastDigits < 0.5 && lastDigits > 0) {
      roundedValues[diff].total -= (lastDigits);
      roundedValues[diff].roundedTop = false;
      roundedValues[diff].rounded = true;
    } else if (lastDigits > 0.5 && lastDigits < 1) {
      roundedValues[diff].total += (1 - lastDigits);
      roundedValues[diff].roundedTop = true;
      roundedValues[diff].rounded = true;
    } else if (lastDigits < 1.5 && lastDigits > 1) {
      roundedValues[diff].total -= (lastDigits - 1);
      roundedValues[diff].roundedTop = false;
      roundedValues[diff].rounded = true;
    } else if (lastDigits > 1.5 && lastDigits < 2) {
      roundedValues[diff].total += (2 - lastDigits);
      roundedValues[diff].roundedTop = true;
      roundedValues[diff].rounded = true;
    } else if (lastDigits < 3.5 && lastDigits > 2) {
      roundedValues[diff].total -= (lastDigits - 2);
      roundedValues[diff].roundedTop = false;
      roundedValues[diff].rounded = true;
    } else if (lastDigits < 5 && lastDigits > 3.5) {
      roundedValues[diff].total += (5 - lastDigits);
      roundedValues[diff].roundedTop = true;
      roundedValues[diff].rounded = true;     
    } else if (lastDigits < 7.5 && lastDigits > 5) {
      roundedValues[diff].total -= (lastDigits - 5);
      roundedValues[diff].roundedTop = false;
      roundedValues[diff].rounded = true;
    } else if (lastDigits < 10 && lastDigits > 5) {
      roundedValues[diff].total += (10 - lastDigits);
      roundedValues[diff].roundedTop = true;
      roundedValues[diff].rounded = true;
    } else if (lastDigits < 12.5 && lastDigits > 10) {
      roundedValues[diff].total -= (lastDigits - 10);
      roundedValues[diff].roundedTop = false;
      roundedValues[diff].rounded = true;
    } else if (lastDigits < 15 && lastDigits > 12.5) {
      roundedValues[diff].total += (lastDigits - 15);
      roundedValues[diff].roundedTop = true;
      roundedValues[diff].rounded = true;
    } else if (lastDigits < 17.5 && lastDigits > 15) {
      roundedValues[diff].total -= (lastDigits - 15);
      roundedValues[diff].roundedTop = false;
      roundedValues[diff].rounded = true;
    } else if (lastDigits > 17.5 && lastDigits < 20) {
      roundedValues[diff].total += (20 - lastDigits);
      roundedValues[diff].roundedTop = true;
      roundedValues[diff].rounded = true;
    } else if (lastDigits < 25 && lastDigits > 20) {
      roundedValues[diff].total -= (lastDigits - 20);
      roundedValues[diff].roundedTop = false;
      roundedValues[diff].rounded = true;
    } else if (lastDigits > 25 && lastDigits < 30) {
      roundedValues[diff].total += (30 - lastDigits);
      roundedValues[diff].roundedTop = true;
      roundedValues[diff].rounded = true;
    } else if (lastDigits > 30 && lastDigits < 75) {
      roundedValues[diff].total -= (lastDigits - 30);
      roundedValues[diff].roundedTop = false;
      roundedValues[diff].rounded = true;
    } else if (lastDigits >= 75) {
      roundedValues[diff].total += (100 - lastDigits);
      roundedValues[diff].roundedTop = true;
      roundedValues[diff].rounded = true;
    } else {
      roundedValues[diff].rounded = false;
    }
  }

  let roundingString;
  let timeUnit;
  let resultString;

  if (roundedValues.diffYears.total) {
    timeUnit = roundedValues.diffYears.total > 1 ? 'years' : 'year';
    resultString = `${roundedValues.diffYears.total} ${timeUnit}`;
    if (roundedValues.diffYears.rounded) {
      roundingString = roundedValues.diffYears.roundedTop ? 'less than' : 'more than';
      resultString = roundingString + ' ' + resultString;
    }
  } else if (roundedValues.diffMonths.total) {
    if (roundedValues.diffMonths.total > 6 && roundedValues.diffMonths.total <= 12) {
      timeUnit = 'year';
      roundedValues.diffMonths.rounded = false;
      roundingString = 'less than';
      resultString = `${roundingString} ${1} ${timeUnit}`;
    } else {
      timeUnit = roundedValues.diffMonths.total > 1 ? 'months' : 'month';
      resultString = `${roundedValues.diffMonths.total} ${timeUnit}`;
    }

    if (roundedValues.diffMonths.rounded) {
      roundingString = roundedValues.diffMonths.roundedTop ? 'less than' : 'more than';
      resultString = roundingString + ' ' + resultString;
    }
  } else if (roundedValues.diffDays.total) {
    if (roundedValues.diffDays.total > 15 && roundedValues.diffDays.total <= 31) {
      timeUnit = 'month';
      resultString = `${1} ${timeUnit}`;
    } else {
      timeUnit = roundedValues.diffDays.total > 1 ? 'days' : 'day';
      resultString = `${roundedValues.diffDays.total} ${timeUnit}`;
    }

    if (roundedValues.diffDays.rounded) {
      roundingString = roundedValues.diffDays.roundedTop ? 'less than' : 'more than';
      resultString = roundingString + ' ' + resultString;
    }
  } else if (roundedValues.diffHours.total) {
    if (roundedValues.diffHours.total > 15 && roundedValues.diffHours.total <= 24) {
      timeUnit = 'day';
      resultString = `${1} ${timeUnit}`;
    } else {
      timeUnit = roundedValues.diffHours.total > 1 ? 'hours' : 'hour';
      resultString = `${roundedValues.diffHours.total} ${timeUnit}`;
    }

    if (roundedValues.diffHours.rounded) {
      roundingString = roundedValues.diffHours.roundedTop ? 'less than' : 'more than';
      resultString = roundingString + ' ' + resultString;
    }
  } else if (roundedValues.diffMins.total) {
    if (roundedValues.diffMins.total > 30 && roundedValues.diffMins.total <= 60) {
      timeUnit = 'hour';
      resultString = `${1} ${timeUnit}`;
    } else {
      timeUnit = roundedValues.diffMins.total > 1 ? 'minutes' : 'minute';
      resultString = `${roundedValues.diffMins.total} ${timeUnit}`;
    }

    if (roundedValues.diffMins.rounded) {
      roundingString = roundedValues.diffMins.roundedTop ? 'less than' : 'more than';
      resultString = roundingString + ' ' + resultString;
    }
  } else {
    timeUnit = 'minute';
    roundedValues.diffSecs.rounded = false;
    roundingString = 'less than';
    resultString = `${roundingString} ${1} ${timeUnit}`;
  }

  return isDiffNegative ? resultString + ' ago' : 'in ' + resultString;
}

module.exports = {
  jsonTimes,
  toLazyHuman
};
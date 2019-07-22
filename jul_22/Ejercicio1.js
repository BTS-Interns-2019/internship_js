let myVariable = prompt('Give me a number');

try {
  if (isNaN(+myVariable)) {
    throw new TypeError('Not a number!');
  }
  console.log('Good choice', myVariable);
} catch (e) {
  if (e.name === 'TypeError') {
    console.log(e);
  } else {
    throw e;
  }





(function() {
  try {
    try {
      throw new Error('oops');
    }
    catch (ex) {
      console.error('inner', ex.message);
      throw ex;
    }
    finally {
      console.log('finally');
      return;
    }
  }
  catch (ex) {
    console.error('outer', ex.message);
  }
})();
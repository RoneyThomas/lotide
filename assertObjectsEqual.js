// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqArrays = (array1, array2) => {
  if ((!Array.isArray(array1) || !Array.isArray(array1)) && array1 === array2) {
    return true;
  }
  if (array1.length !== array2.length) {
    return false;
  }
  for (let x of array1) {
    if (!array2.includes(x)) {
      return false;
    }
  }
  return true;
};

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  let objKeys1 = Object.keys(object1), objKeys2 = Object.keys(object2);
  if (!eqArrays(objKeys1, objKeys2)) {
    return false;
  }
  for (let x of objKeys1) {
    if (Array.isArray(object1[x])) {
      if (!eqArrays(object1[x], object2[x])) {
        return false;
      }
    } else if (object1[x] !== object2[x]) {
      return false;
    }
  }
  return true;
};


// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual[0], actual[1])) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual[0])} === ${inspect(actual[1])}`);
  } else if (!expected) {
    console.log(`✅✅✅ Assertion Failed: ${inspect(actual[0])} !== ${inspect(actual[1])}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual[0])} !== ${inspect(actual[1])}`);
  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual([ab, ba], true);

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual([ab, abc], false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual([cd, dc], true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual([cd, cd2], false); // => false
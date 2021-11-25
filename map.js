const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const eqArrays = (array1, array2) => {
  if ((!Array.isArray(array1) || !Array.isArray(array1)) && array1 === array2) {
    return true;
  }
  if (array1.length !== array2.length) {
    return false;
  }
  for (let x = 0; x < array1.length; x++) {
    if (!array1.includes(array2[x])) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
  }
};


const words = ["ground", "control", "to", "major", "tom"];
const results = map(words, word => word[0]);

assertArraysEqual(results, ['g', 'c', 't', 'm', 't']); // => should PASS
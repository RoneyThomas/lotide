const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === ' ') continue;
    if (results[sentence[i]]) {
      results[sentence[i]].push(i);
    } else {
      results[sentence[i]] = [i];
    }
  }
  return results;
};

// console.log(letterPositions('lighthouse in the house'));

const result = letterPositions('lighthouse in the house');

const eqArrays = (array1, array2) => {
  if ((!Array.isArray(array1) || !Array.isArray(array1)) && array1 === array2) {
    return true;
  }
  if (array1.length !== array1.length) {
    return false;
  }
  for (let x = 0; x < array1.length; x++) {
    if (array1[x] !== array2[x]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} === ${array2}`);
  }
};

assertArraysEqual(result.n, [12]);
assertArraysEqual(result['h'], [3, 5, 15, 18]);
assertArraysEqual(result['r'], undefined);
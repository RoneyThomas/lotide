const eqArrays = (array1, array2) => {
  if (array1.length != array1.length) {
    return false;
  }
  for (let x = 0; x < array1.length; x++) {
    if (array1[x] !== array2[x]) {
      return false;
    }
  }
  return true;
}

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} === ${array2}`);
  }
};

const middle = (obj) => {
  if (obj.length <= 2) {
    return [];
  }
  if (obj.length % 2 === 0) {
    const mid = obj.length / 2;
    return [obj[mid - 1], obj[mid]];
  } else {
    const mid = Math.floor(obj.length / 2);
    return [obj[mid]]
  }
}

assertArraysEqual(middle([0, 1]), []);
assertArraysEqual(middle([0, 1, 2]), [1]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);

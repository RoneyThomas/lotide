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

const assertArraysEqual = (array1, array2) => {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} === ${array2}`);
  }
};

const without = (array1, array2) => {
  return array1.filter(item => !array2.includes(item));
};

const words = ["hello", "world", "lighthouse", "roney"];
without(words, ["lighthouse", "roney"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
console.log(without(words, ["lighthouse", "roney"]));
assertArraysEqual(words, ["hello", "world", "lighthouse", "roney"]);
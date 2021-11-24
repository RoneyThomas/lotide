const countLetters = (obj) => {
  let count = {};
  for (let c of obj) {
    if (count[c]) {
      count[c] += 1;
    } else {
      count[c] = 1;
    }
  }
  return count;
};

console.log(countLetters('LHL'));
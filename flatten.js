const flatten = (obj) => {
  let flattened = [];
  for (let items of obj) {
    if (Array.isArray(items)) {
      flattened = [...flattened, ...flatten(items)];
    } else {
      flattened.push(items);
    }
  }
  return flattened;
}

console.log(flatten([1, 2, [3, 4, [9, 8, 7]], 5, [6]]));
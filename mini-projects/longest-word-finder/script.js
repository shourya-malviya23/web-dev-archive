function findLongestWordLength(str) {
  let maxi = 0;
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      count++;
    } else {
      maxi = Math.max(maxi, count);
      count = 0;
    }
  }

  return Math.max(maxi, count);
}

console.log(
  findLongestWordLength("The quick brown fox jumped over the lazy dog"),
);

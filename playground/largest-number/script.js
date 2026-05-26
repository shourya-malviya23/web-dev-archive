// input is an array of arrays, gotta return an array of maximum subarrays values

function largestOfAll(arr) {
  let ans = [];
  for (let i = 0; i < arr.length; i++) {
    let maxi = Math.max(...arr[i]);
    ans.push(maxi);
  }
  return ans;
}

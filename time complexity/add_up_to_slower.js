function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}
// the operation are depends on the value of n here are n operations
//are going to happens. firt we're assiging total and then i and n 
// iteration are happening
var t1 = performance.now();
addUpTo(1000000);
var t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)
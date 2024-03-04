function addUpTo(n) {
  return n * (n + 1) / 2;
}
// this is the constant operation here are only three operations
//are going to happens. first addition and second one is multiple and 
//third one is divide
var time1 = performance.now();
let a =addUpTo(1000000);
var time2 = performance.now();
console.log(`Time Elapsed: ${(time2 - time1) / 1000} seconds${a}`)
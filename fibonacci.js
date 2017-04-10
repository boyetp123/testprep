var startTime, endTime;
var fibNumber = 100;

console.info('fibonacci input ',fibNumber )

function fibonacci(input){
  var cache = {};

  function fib1(n) {
    var f1,f2;

    if (n <= 1){
      return n;      
    } else {
      f1 = cache[ n-1 ] || fib1( n-1 );
      f2 = cache[ n-2 ] || fib1( n - 2 );
      cache[ n - 1 ] = f1;
      cache[ n - 2 ] = f2;
      return f1 + f2;
    }
  }
  return fib1(input)
}

startTime = (new Date()).getTime();
console.info('fibonacci',fibonacci( fibNumber ));
endTime= (new Date()).getTime();
console.info('fibonacci elapseTime', endTime - startTime);



// function fib(n) {
//   if (n <= 1){
//     return n;
//   } else {
//     return fib(n-1) + fib(n - 2);
//   }
// }

// startTime = (new Date()).getTime();
// console.info('fib',fib( fibNumber ));
// endTime= (new Date()).getTime();
// console.info('fib elapseTime', endTime - startTime);



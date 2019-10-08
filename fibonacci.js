var startTime, endTime;
var fibNumber = 5;

console.info('fibonacci input ',fibNumber )

// function fibonacci(input){
//   var cache = {};
//   function fib1(n) {
//     var f1,f2;
//     if (n <= 1){
//       return n;      
//     } else {
//       f1 = cache[ n-1 ] || fib1( n-1 );
//       f2 = cache[ n-2 ] || fib1( n - 2 );
//       cache[ n - 1 ] = f1;
//       cache[ n - 2 ] = f2;
//       return f1 + f2;
//     }
//   }
//   return fib1(input)
// }

// function fibonacci(input){
//   var cache = {};
//   function fib1(n) {
//     var f1,f2;
//     if (n <= 1){
//       return n;    
//     } else if (cache[ n ]){
//       return cache[ n ];
//     } else {
//       cache[ n-1 ] = fib1( n-1 );
//       cache[ n-2 ] = fib1( n - 2 );
//       return cache[ n-1 ] + cache[ n-2 ];
//     }
//   }
//   return fib1(input)
// }

// function fibonacci(input){
//   var cache = {};
//   function fib1(n) {
//     if (n <= 2){
//       return n;    
//     } else if (cache[ n ]){
//       return cache[ n ];
//     } else {
//       cache[ n ] = fib1( n-1 ) + fib1( n - 2 );
//       return cache[ n ];
//     }
//   }
//   return fib1(input)
// }


// using memoization with loop
function fibonacci(n){
    var fib={};
    var f=0;
    for(var i = 0; i <= n ; i++){
        if (i < 2) {
            f=1;
        }else{
            f = fib[ i - 1 ] + fib[ i - 2 ];
        } 
        fib [ i ] = f;
    }
    return fib[ n ]
}
// no memoization with loop
function fibonacci2(n){
    var f= 0, f2 = 0, f3;
    for(var i = 0; i <= n ; i++){
        console.log('f', f, 'f3', f3, 'f2', f2)
        if (i < 2) {
            f= 1;
        } else {            
            f = f + f3;
        } 
        f3 = f2;
        f2 = f;
    }
    return f
}

function fibonacci3(num){
  let a = 1; 
  let b = 0;
  let temp;

  while (num >= 0){
    temp = a;
    a = a + b;
    b = temp;
    num--;
  }

  return b;
}

function fibonacciLoop2(n) {
    let retVal = 0;
    let currVal = 0; 
    let prevVal = 0;
    for(var i = 0; i <= n ; i++){
        console.log('retVal', retVal, 'prevVal', prevVal, 'currVal', currVal)
        if (i < 2) {
            retVal= 1;
        } else {            
            retVal +=  prevVal;
        } 
        prevVal = currVal;
        currVal = retVal;
    }
    return retVal
}
function fibonacciLoop2Mem(n) {
    let cache = {};
    for(var i = 0; i <= n ; i++){
        console.log('cache' , cache)
        if (i < 2) {
            cache[i]= 1;
        } else {            
            cache[i] = cache[i - 1] + cache[ i - 2]
        } 
    }
    return cache[n]
}

function fibonacciRecursion(input) {
    let cache = {}

    function fib(n) {
        console.log('fib',n)
        if (n < 2) {
            return 1
        } else if (!cache[n]) {
            cache[n] = (cache[n -1] || fib(n-1)) + (cache[n -2] || fib(n-2))
        }
        return cache[n]
    }
    return fib(input);
}

startTime = (new Date()).getTime();
// console.info('fibonacci',fibonacci( fibNumber ));
console.info('fibonacci2',fibonacci2( fibNumber ));
// console.info('fibonacci3',fibonacci3( fibNumber ));
endTime= (new Date()).getTime();
console.info('fibonacci elapseTime', (endTime - startTime)  );

console.info('fibonacciLoop2',fibonacciLoop2( fibNumber ));

console.info('fibonacciLoop2Mem',fibonacciLoop2Mem( fibNumber ));

console.info('fibonacciRecursion',fibonacciRecursion( fibNumber ));


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



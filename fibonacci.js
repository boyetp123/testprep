var startTime, endTime;
var fibNumber = 4;

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

function fibonacci2(n){
    var f= 0, f2 = 0, f3;
    for(var i = 0; i <= n ; i++){
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
  var a = 1, b = 0, temp;

  while (num >= 0){
    temp = a;
    a = a + b;
    b = temp;
    num--;
  }

  return b;
}


startTime = (new Date()).getTime();
console.info('fibonacci',fibonacci( fibNumber ));
console.info('fibonacci2',fibonacci2( fibNumber ));
console.info('fibonacci3',fibonacci3( fibNumber ));
endTime= (new Date()).getTime();
console.info('fibonacci elapseTime', (endTime - startTime)  );



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



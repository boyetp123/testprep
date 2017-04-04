function fib(n) {
  if (n <= 1){
	  console.info('final return ' + n);
    return n;
  } else {
	  console.info('retun at '+ n);
    return fib(n-1) + fib(n - 2);
  }
}

fib(10);
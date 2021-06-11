//  generators 
function delayedDisplay(str, delay = 1000) {
	 return new Promise(resolve=>{
		setTimeout(()=>{
			resolve(str)
		},1000)
	}).then(val=>{
        console.log('promise then')
        return val;
    })
}

function* foo(){
	try{
	  yield delayedDisplay('1',500);
	  yield delayedDisplay('2',300);
	  yield delayedDisplay('3',100);

	} catch(e) {
		console.error('error', e)
	}
  return 
}

// for (let o of foo()) {
// 	o.then((val)=>{
// 		console.log(val);
// 	})
  
//   // expected output: 1
//   // break; // closes iterator, triggers return
// }

var f = foo()
console.log(f.next())
console.log(f.next())
console.log(f.next())


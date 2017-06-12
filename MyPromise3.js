
function MyPromise3 ( cbFun ){
    if (typeof this === 'undefined') {
        throw new Error('wrong usage .... it should new MyPromise3');
    }
    const PENDING = 0;
    const FULFILLED = 1;
    const REJECTED = 2;

    let thenHandlers = [];
    let rejectHandler;
    let emptyFun = function (){};
    function resolve(data){
        console.info('resolve thenHandlers', thenHandlers.length)

        if (thenHandlers.length < 1 ) return;

        var fn = thenHandlers.shift();
        fn(data);
        // thenHandlers.forEach( fn => {
        //     fn( data );
        // });
    }
    function reject(){
        
    }

    this.then = function ( resolveCb, rejectCb ) {
        // let thenProm = new Promise(resolve, reject)
        var temp = (function(){
            return function(data) {
                resolveCb( data );
            }
        })();
        
        thenHandlers.push( temp );
        console.info('then thenHandlers', thenHandlers.length)
        
        return new MyPromise3(function(resolve, reject){
            setTimeout(function(){
                resolveCb('return from this.then ');
            },20);
        });
        // return this;
    }
    this.catch = function ( cback ){
        rejectHandler = cback;
    }
    console.info('executing cbFun')
    cbFun(resolve, reject);
}


function testPromise3 (){

    (new MyPromise3( function ( resolve, reject) {
        setTimeout( function () {
            resolve('this is resolve');
        },300)
    }))
    .then(function(data){
        console.info('then ', data)
        // return (new MyPromise( function ( resolve, reject) {
        //     setTimeout( function () {
        //         resolve('this is resolve 2');
        //     },300);
        // }));
    }).then(function (data){
        console.info('then2 ', data)        
    })

}
testPromise3();

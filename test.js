"use strict"

var startTime, endTime;
//  x.match(/[a-z]*\$/ig)
// [ 'abc$' ]
// > x.match(/[a-z]*\$[0-9]/ig)
// [ 'abc$1' ]
// > x.match(/[a-z]*\$[0-9]*/ig)
// [ 'abc$1000' ]
// > x.match(/[a-z]*\$[0-9]*[a-z]*/ig)
// [ 'abc$1000defg' ]
/*

Number of permutation in 8 digit ode but only 2 posible values (0,1) 2 to the power of 8   Math.pow(2,8)
for 3 digit but 10 posible is Math.pow(10,3)
for like Jai alai 3 digit but 9 posible is Math.pow(9,3)

Trees (especially Binary Search Trees)
Trees (especially Binary Search Trees) - again
Big O Notation
   is a way to measure algorithm scales as the amount of data involved increases
   somethig like an array of 20 compare to when array element increases like 10,000 element array

   is not only always a measure of speed but intead how well the algorithm scales 
    how the runtime scales to some input variable

Hash Tables
Object Oriented Design/System Design
Algorithms: Breadth First Search/Depth First Search, Binary Search, Merge Sort and Quick Sort

*/

/*
    Mortgage formula
    M = P r(1 + r)pow(n)/ (( 1 + r )pow(n)) - 1
M - > is your monthly payment.
P - > is your principal.
r - > is your monthly interest rate, calculated by dividing your annual interest rate by 12.
n - > is your number of payments (the number of months you will be paying the loan)[6]

*/


// function test(){
//     console.log('test')
//     console.log(this)
// }
//  ( function (){
//     console.log('test1 anonymous')
//     console.log(this)
// } )();

// test();
// test1();


// functor test
function plus1(value) {
    console.info('function plus1 value='+value)  
    return value + 1  
}  
function F(value, fn) {  
    console.info('function F value='+value)  
    return fn(value)  
}

// console.info(F(1, plus1));

// console.info(F([1, 2, 3], plus1));

function getDuplicates(str){
    str = str.toLowerCase();
    var m = {};
    var m = str.split('').reduce( (pv,v, idx)=>{
        pv[ v ] = pv[ v ] ? pv[ v ] + 1 : 1;
        return pv;
    } ,{} );
    m = Object.keys(m).reduce(function(pv,cv,idx){
        if (m[cv] > 1) pv[cv] = m[cv];
        return pv; 
    },{});
    return m;
} 

console.info('getDuplicates',getDuplicates('Bay Area'));

function getDuplicates2(str){
    var out={};
    str.split('').forEach(v=>{
        if (!out[v.toLowerCase() ]){
            var count = str.match( (new RegExp(v,'ig')) || [] ).length;
            if ( count > 1){
                out[v.toLowerCase()] = count;
            }
        }
    });
    return out;
}
console.info('getDuplicates2',getDuplicates2('Bay Area'));

function reverse(s){
    var sarr = [];
    for(var i = s.length - 1; i  > -1 ;i--){
        sarr.push( s.charAt(i) );
    }    
    return sarr.join('');
}

// console.info(reverse('abcdefg'));

// for(var i = 0; i < 10; i++) {
//     setTimeout((function(i) {
//       console.log(i);
//     })(i), 10)
// }

function countZero(n){
  var count = 0;
  while(n>9){
    console.info(n)
    count += Math.floor(n/10);
    n = n/10;
  }
  return count;
}

console.info('countZero',countZero(2014));

function reverseRecursive(s){
    s = s || '';
    if (s.length === 1){
        return s
    } else {
        return reverseRecursive( s.substr(1) ) + s.substr(0,1);
    }
}

// console.log( reverseRecursive('Henry Polangcos') );  

function sentenceToCamelCase(str){
    //const m = /[0-9]*\.?[0-9]+%\s/ig;
    //const m2 = /^[a-zA-Z]/;
    // const m2 = /^[a-z]|[A-Z]/g; 
    // const m3 = /\s[a-zA-Z]/g;
    const m3 = /^[a-zA-Z]|\s[a-zA-Z]/g;
    // let matchArr = str.match(m3);
    return str.replace(m3,(el,idx)=>{
        return el.trim().toUpperCase();
    })
}

// console.log(sentenceToCamelCase('the quick brown fox jump over the lazy dog' ));

function camelCaseToSentence(str){
    let str2=str
    const m1 = /[A-Z]/g;
    str2 = str2.replace(m1, (el,idx)=>{
        return ' ' + el;
    })
    return str2;
}

// console.log(camelCaseToSentence('theQuickBrownFoxJumpOverTheLazyDog') )

function removeRepeat(str){
    var out = str;
    str.split('').forEach( v => {
        if (v !== ' '){
            var rx = new RegExp(v,'g');
            if ( (out.match( rx ) || []).length > 1  ){
                out = out.replace(rx,'');
            }
        }
    },{});
    return out;
    // let prevStr = '';
    // return str.replace(/[a-zA-Z]/g,(el,idx)=>{
    //     if (prevStr === el){
    //         return ''
    //     } else {
    //         prevStr = el;
    //     }
    //     return prevStr;
    // })
// 'the quick brown fox jump over the lazy dog'.match(/^[a-z]/g)
}
console.info('removeRepeat',removeRepeat('the quick brown fox jump over the lazy dog'));

function pad (l, s) {
    // return (new Array(l + 1)).join(s || ' ');
    return (new Array(l )).fill(s || ' ');
}

function lpad(numStr,len, strToPad){
    numStr = (numStr || '') + '';
    if (numStr.length < len ){
        return pad( len - numStr.length, strToPad ) + numStr;
    }
    return numStr;
}

function rpad(numStr,len, strToPad){
    numStr = (numStr || '') + '';
    if (numStr.length < len ){
        return  numStr + pad( len - numStr.length, strToPad ) ;
    }
    return numStr;
}


function timeConversion(ampmInput){
    let inArr = ampmInput.split(':');
    let isPM = ampmInput.indexOf('PM') > -1;
    let outHr = inArr[0];

    if (isPM ){
        if (Number(outHr) < 12){
            outHr = Number(inArr[0]) + 12;
        }
    } else {
        if (Number(outHr) > 11 ){
            outHr = Number(outHr) - 12;
        }
    }
    return  lpad(outHr,2,'0') + ':' + inArr[1] + ':' + ( inArr[2].replace('AM','').replace('PM','')  );

}
console.info( 'timeConversion', timeConversion ('7:05:45AM'));
// console.info('timeConversion',  timeConversion ('11:45:54AM'))
// console.info('timeConversion',  timeConversion ('12:45:54PM'))
// console.info('timeConversion',  timeConversion ('12:00:00AM'))

function bigSum(arr){
    var sum = 0;
    arr.forEach((value,idx)=>{
        sum+= value;
    } );
    return sum;
}

// console.info(  bigSum ( [1001,1002,1003,1004,1005] ) )


function diagonalDiff(arr){
    var dir1=0;
    var dir2=0;

    arr.forEach((valuearr,idx)=>{
        console.info(valuearr)
        valuearr.forEach((val,idx2)=>{
            console.info(idx === idx2, idx === (valuearr.length - 1) - idx2 )
            if (idx === idx2 ){
                dir1 += val; 
            }
            if (idx === (valuearr.length - 1) - idx2 ){
                dir2 += val;            
            }
        });
    })
    console.info(dir1,dir2)
    return Math.abs( dir1 - dir2 );
}

// console.info(diagonalDiff([ [ 11, 2, 4 ], [ 4, 5, 6 ], [ 10, 8, -12 ] ])  )

function getStrLengthInArray(arr){
    let len=0;
    arr.forEach( (val,idx)=>{
        len += val.length;
    } )
    return len;
}

function textJustification(words, L) {
    let output=[];
    // let prevWord='';
    let phrase=[];
    let arrLen = words.length;
    let lookAheadWord = '';

    words.forEach( (word, idx, origWords)=>{
        lookAheadWord='';
        let tphraseLen = 0;
        let rspaces = 0;
        let rspaceWithLookAhead=0;
        phrase.push(word)

        tphraseLen = getStrLengthInArray( phrase );
        rspaces = L - tphraseLen;

        if (idx < arrLen -1){
            lookAheadWord=origWords[idx + 1];
            rspaceWithLookAhead = rspaces - lookAheadWord.length ;
        }
        // phrase.length > 1 &&
        if (  (rspaces > 1 && rspaces >=  phrase.length) || idx === arrLen -1){
            if (  rspaceWithLookAhead > 1  &&  rspaceWithLookAhead >=  phrase.length + 1  ){
                // continue
            } else {
                if (phrase.length === 1){
                    // output.push( word +  pad( rspaces ,' ')) ;
                    output.push( word +  (new Array(rspaces)).fill (' ').join('') );
                } else {
                    let d = Math.ceil(rspaces / (phrase.length - 1));
                    let slen = rspaces;
                    
                    let str = phrase.reduce((pv,cv,idx)=>{
                        let ret = ''
                        if (idx === phrase.length - 1){
                            ret = pv + cv;
                        } else {
                            ret =  pv + cv +  (new Array(slen < d ? slen : d )).fill(' ').join('');
                        }
                        slen -= d;
                        slen = slen < 1 ? 1 : slen;
                        return ret;
                    }, '')
                    output.push( str );
                }
                phrase=[];
            }
        } 
    });
    return output;
}
var words = ["This", "is", "an", "example", "of", "text", "justification."] , L =16;
// var words = ["Two", "words."],  L = 9;
// console.info( textJustification( words,L ) )

if (!String.prototype.reverse){
    String.prototype.reverse = function(){
        if (this.length > 1){
            // return String.prototype.reverse.call(this.substr(1)) +  this.substr(0,1) ;
            return this.substr(1).reverse() +  this.substr(0,1) ;
        } else return this;
    }
}

// var generateArray = arraySize =>{
//     var out=[];
//     for(var i=0; i<arraySize; i++){
//         out.push( Math.floor( Math.random() * (new Date()).getMilliseconds() ) );
//     }
//     return out;
// }

var generateArray = arraySize =>{
    var out=[];
    for(var i=0; i<arraySize; i++){
        out.push( Math.floor( Math.random() * 1000 ));
    }
    return out;
}

function palindrome(str){
    var revrse = str.reverse();
    console.info(revrse)
    if (str === revrse){
        return true;
    }
    return false;
}

// console.info('palindrome',palindrome('abcdeedcba'))

function stairCase(n){
    var out = [];
    for (var i = 1; i <= n ; i++){
        out.push((new Array(i)).fill('x').join('') );
    }
    return out.join('\n');
}

// console.info('stairCase',stairCase(6) )

function miniMaxSum(arrInt){
    var temp = [];
    arrInt.forEach((v,i)=>{
        temp.push(arrInt.reduce((pv,cv,idx)=>{
            return (idx !== i ? pv + cv : pv );
        },0));
    });    
            // console.info('temp',temp)
    return [
      Math.min.apply(null, temp),
      Math.max.apply(null, temp)
    ]
}

// console.info('miniMaxSum',miniMaxSum([1,2,3,4,5]))

function birthdayCandle(str){
    var numbers = str.split(' ');
    numbers = numbers.map(Number)
    var max = Math.max.apply(null,numbers);
    var counts = numbers.filter((v)=>{return v===max;});
    return counts;
}
// var val = birthdayCandle('3 2 1 3');
//console.info( 'array',val , 'len',val.length)

function gradingStudents(grades){
    return grades.map((g)=>{
        var r =(g % 10) % 5;
        if (  r > 2  ){
            return g + ( 5 - r);
        } else {
            return g;
        }
    });
}
// console.info( gradingStudents ([73,67,38,33]) )

var electronicShop = (input) =>{
    var inputs = input.split('\n');
    var amt = Number(inputs[0].split(' ')[0]);
    var noKeybBrands = Number(inputs[0].split(' ')[1]);
    var noUSBBrands = Number(inputs[0].split(' ')[2]);

    var keybPrices = inputs[1].split(' ').map(Number);
    var usbPrices = inputs[2].split(' ').map(Number);

    var loop = Math.max(noKeybBrands, noUSBBrands);
    var currentUsbPrice=0;
    var currentKeybPrice=0;
    var total = -1;
    for (var i=0; i<loop; i++){
        if (i < noUSBBrands){
            currentUsbPrice = usbPrices[i];
        }
        if (i < noKeybBrands){
            currentKeybPrice = keybPrices[i];
        }
        if ( currentUsbPrice + currentKeybPrice <= amt){
            total = Math.max (currentUsbPrice + currentKeybPrice, total);
        }
    }
    return total;

}
// var p = "10 2 3\n3 1\n5 2 8";
var p = "5 1 1\n4\n5";

// console.info(electronicShop(p));

var kangaroo = (str)=>{
    var strs = str.split(' ').map(Number);
    var x1 = strs[0];
    var v1 = strs[1];
    var x2 = strs[2];
    var v2 = strs[3];
    if ((x1 < x2 && v1 > v2) || (x1 > x2 && v1 < v2) ){
        return 'yes';
    }
    return 'no';
}

// console.info(kangaroo('0 3 4 2'))
// console.info(kangaroo('0 3 4 2'))

var magicSquare = (input) =>{
    var inputs = input.split('\n');
    var sumsx = [];
    var sumsy = [];
    var sum = (arr)=>{
        return arr.reduce((pv,v)=>{
            return pv + v;
        },0);
    }
    var matrix = [];
    inputs.forEach((cv)=>{
        var arr = cv.split(' ').map(Number)
        matrix.push( arr );
        sumsx.push( sum(arr) );
        if (sumsy.length ===0){
            sumsy = arr.slice(0);
        } else {
            arr.forEach( (cv2,idx2)=>{
                sumsy[idx2] += cv2;
            });
        }
    });

    var difX =0;
    var hasDupSum = 0;
    var minNum = 0;
    sumsx.forEach((cv,idx)=>{
        var count = sumsx.filter( cv1=>{ return cv === cv1} ).length;
        if (count < 2){
            difX = hasDupSum - sumsx[idx]
        } else {
            hasDupSum = cv;
        }
    });
    var difY =0;
    sumsy.forEach((cv,idx)=>{
        var count = sumsy.filter( cv1=>{ return cv === cv1} ).length;
        if (count < 2){
            difY = hasDupSum - sumsy[idx];
        } else {
            hasDupSum = cv;
        }
    });    
   
    console.info('sumsx',sumsx,'sumsy',sumsy,'matrix',matrix,'difY', difY, 'difX',difX)
    return Math.min(difX,difY);
}

//  console.info('magicSquare',magicSquare('4 9 2\n3 5 7\n8 1 5'))

var superReduceString = (s)=>{
    var out = s;
    if (s && s.length > 1 ){
        var idx = 0;
        while(true){
            var s1 = out.charAt(idx);
            var r2 = s1.repeat(2);        
            if (out.indexOf(r2) === 0){
                out = out.replace(r2,'');
            }
            idx++;
            if (idx >= out.length){
                break;
            }
        }
    } 
    return out.length === 0 ? 'Empty' : out;
}

// var superReduceString = function(s){
//     var out = s;
//     if (out && out.length > 1 ){
//         var s1 = out.charAt(0);
//         if (out.indexOf(s1.repeat(2) ) === 0 ){
//             var r2 = out.replace(s1.repeat(2),'');
//             out = superReduceString( r2 );
//         } else {
//             out = s1 + superReduceString( out.substr(1) );
//         }
//     }
//     if (arguments && arguments.callee.name !== 'superReduceString'){
//         return out.length === 0 ? 'Empty String': out;
//     } else {
//         return out;
//     }
// }
//  console.info('superReduceString',superReduceString('aa'))
//  console.info('superReduceString',superReduceString('aaabbbccddd'))


// beabeefeab  -> babab

var twoCharacters = s=>{
    var out=s;
    var firstChar = s.substr(0,1);
    var charCode = out.charCodeAt(0);
    var prevCharCode = charCode - 1;
    var nextCharCode = charCode + 1;

    var matchPrev = out.match(String.fromCharCode(prevCharCode))||[];
    var matchNext = out.match(String.fromCharCode(nextCharCode))||[];
    // console.info('prev', matchPrev)
    // console.info('next', matchNext)

    var theChar = matchPrev.length > matchNext.length ? matchPrev[0] : matchNext[0];
    console.info('theChar', theChar)
    out = s.split('').reduce((pv,cv,idx)=>{
        if (cv !== firstChar && cv !== theChar){
            return pv;
        } else {
            return pv + cv;
        }
    },'');

    return out + '; len ' + out.length;
}
// console.info(twoCharacters('beabeefeab'))

var weightedUniformString = s=>{
    // a is 97
    if (s.length === 1){
        return s.charCodeAt() - 96;
    } else {
        return (s.charCodeAt(0) - 96) + weightedUniformString(s.substr(1));
    }
}
// console.info(weightedUniformString('apple'))
// console.info(weightedUniformString('watch'))

var closestInArray = (arr, num)=>{
    var out=0;
    var idx = null;
    var b = null;
    arr.forEach((v,idx1)=>{
        var a = Math.abs(v-num);
        if (b === null || a < b){
            b = a;
            idx = idx1;
        } 
    });
    return arr[idx];
}

// console.info(closestInArray([1,5,6,9,11], 10))
var hackerLandRadioTransmitter = s =>{
    var firstLineA = s.split('\n')[0].split(' ');
    var noOfHouse = Number(firstLineA[0]);
    var rangeOfTrans = Number(firstLineA[1]);
    var houseXLocs = s.split('\n')[1].split(' ').map(Number)
    let out = 0;
    let currentRange = 1;

    houseXLocs.forEach((v,i) => {
        if (v <= noOfHouse){
            if ( Math.floor(currentRange/2) < rangeOfTrans && v < noOfHouse ){
                currentRange++;
                out++;
                // console.info('v1',v,'currentRange',currentRange,'out',out)
            } else {
                currentRange=1;
                // console.info('v2',v,'currentRange',currentRange,'out',out)
            }
        }
    });
    return out;
}

// console.info( 'hackerLandRadioTransmitter',hackerLandRadioTransmitter('7 1\n1 2 3 4 5 6 7') );
var swap = (theArray,idx1,idx2)=>{
    var tmp = theArray[idx1];
    theArray[idx1] = theArray[idx2];
    theArray[idx2] = tmp;
}

var quickSortPartion = s =>{
    var numbers = s;

    if ( typeof s === 'string' ){
        numbers = s.split(' ').map(Number);
    }

    var comparator = (leftVal, rightVal) =>{
        return leftVal - rightVal;
    }

// Lomuto partition scheme
    var partition = (theArray, left, right)=>{
        var pivotVal = theArray[right];
        var i=left -1;

        for(var j=left; j < right ; j++){
            if ( comparator( theArray[j], pivotVal) <= 0 ){
                i++;
                if (i !== j){
                    swap(theArray,i, j);
                }
            }
        }
        swap(theArray,i + 1, right);

        return i + 1;
        
    }

    var quickSort = (theArray,left, right)=>{
        if ( left < right ){
            var p = partition(theArray, left, right);
            quickSort(theArray, left, p -1);
            quickSort(theArray,  p + 1, right);
        }
        return theArray;
    }

    // var quickSort = (theArray, left,right)

    return quickSort(numbers,0,numbers.length - 1);
}
var iArr = generateArray(10000);
startTime = (new Date()).getTime();
// // console.info('quickSortPartion', quickSortPartion([4, 3, 6, 2, 7, 8, 2, 5, 1,10,45,20,56,43,20,15]) )
quickSortPartion(iArr);
endTime= (new Date()).getTime();
console.info('quickSortPartion elapseTime', endTime - startTime,' ms for ',iArr.length, ' rows');

var mergeSortArray = n =>{
    var comparator = (a , b) =>{
        return a - b;
    }

    var mergeSort = (theArray)=>{
        if (theArray.length < 2) return theArray;

        var mid = Math.floor( theArray.length/2 );
        var theArray1 = theArray.slice(0, mid );
        var theArray2 = theArray.slice(mid );
        
        theArray1 = mergeSort(theArray1);
        theArray2 = mergeSort(theArray2);

        return merge(theArray1, theArray2);
    }

    var merge = (theArray1, theArray2) =>{     
        var out = [];
        var max = Math.max(theArray1.length, theArray2.length);
        var ctr=0;
        while(theArray2.length > 0 && theArray1.length){
            if ( comparator (theArray1[0], theArray2[0]) > 0   ){
                out.push(theArray2.shift());
            } else {
                out.push(theArray1.shift());
            }
        }
        out = out.concat(theArray1,theArray2);
        return out;
    }

    return mergeSort(n);
}
// startTime = (new Date()).getTime();
// // console.info('mergeSortArray', mergeSortArray([4, 3, 6, 2, 7, 8, 2, 5, 1,10,45,20,56,43,20,15]) )
// mergeSortArray(iArr)
// endTime= (new Date()).getTime();
// console.info('mergeSortArray elapseTime', endTime - startTime,' ms for ',iArr.length, ' rows');


var bubbleSort = (n) =>{
    var comparator = (a , b) =>{
        return a - b;
    }
    
    var swap = (arr, idx1, idx2)=>{
        var tmp = arr[idx1];
        arr[idx1] = arr[idx2];
        arr[idx2] = tmp;
    }

    var doSort = (n)=>{
        for (var i=0; i < n.length; i++){
            for (var j=0; j < n.length; j++){
                if ( comparator(n[ j ], n[ j + 1 ]) > 0){
                    swap(n, j, j+1)
                }
            }
        }
        return n;
    }
    return doSort(n)
}

//startTime = (new Date()).getTime();
// console.info('bubbleSort', bubbleSort([4, 3, 6, 2, 10,45,20,56,7, 8, 2, 5, 1,43,20,15]) )
//bubbleSort(iArr)
//endTime= (new Date()).getTime();
//console.info('bubbleSort elapseTime', endTime - startTime);

var heapSort = (arr) =>{

    var arrayLength;

    function buildHeap(input) {
        arrayLength = input.length;

        for (var i = Math.floor(arrayLength / 2); i >= 0; i -= 1) {
            heapify(input, i);
        }
    }

    function heapify(input, i) {
        var left = 2 * i + 1;
        var right = 2 * i + 2;
        var largest = i;

        if (left < arrayLength && input[left] > input[largest]) {
            largest = left;
        }

        if (right < arrayLength && input[right] > input[largest]) {
            largest = right;
        }

        if (largest != i) {
            swap(input, i, largest);
            heapify(input, largest);
        }
    }

    function swap(input, index_A, index_B) {
        var temp = input[index_A];

        input[index_A] = input[index_B];
        input[index_B] = temp;
    }

    function heapSort(input) {
        buildHeap(input);

        for (var i = input.length - 1; i > 0; i--) {
            swap(input, 0, i);
            arrayLength--;
            heapify(input, 0);
        }
    }

    return heapSort(arr);
 
}

// startTime = (new Date()).getTime();
// // var example = [40, 10, 50, 24, 1, 2, 4, -10, 15, 7, 8, 5];
// heapSort(iArr)
// endTime= (new Date()).getTime();
// console.info('heapSort elapseTime', endTime - startTime,' ms for ',iArr.length, ' rows');


var javascriptSort = arr =>{
    return arr.sort((a,b)=>{
        return a - b;
    })
}

startTime = (new Date()).getTime();
// // console.info('javascriptSort', bubbleSort([4, 3, 6, 2, 10,45,20,56,7, 8, 2, 5, 1,43,20,15]) )
javascriptSort(iArr)
endTime= (new Date()).getTime();
console.info('javascriptSort elapseTime', endTime - startTime,' ms for ',iArr.length, ' rows');


var generateSeqArray = (start, end)=>{
    var out=[];
    for(var i=start; i<= end; i++){
        out.push(i);
    }
    return out;
}


var binarySeach = (arr, num)=>{
    num = num || 1;
    var leftIdx = 0;
    var rightIdx = arr.length - 1;
    var midIdx = Math.floor( arr.length/2 );
    var out=-1;
    var loopCtr = 0;

    while(leftIdx < rightIdx){
        var val = arr[midIdx];
        if ( val === num){
            out = midIdx;
            break;
        } else if ( val > num ){
            rightIdx = midIdx + 1
        } else {
            leftIdx = midIdx - 1;            
        }
        midIdx = Math.floor( (rightIdx + leftIdx) /2 );
        loopCtr++;
    }
    console.info('binarySeach finish in ',loopCtr,'loops')
    return out;
}

// var iArr =generateSeqArray(0,1000000)
// startTime = (new Date()).getTime();
// // var iArr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
// var result = binarySeach(iArr,500000)
// endTime= (new Date()).getTime();
// console.info('binarySeach elapseTime', endTime - startTime,' ms for ',iArr.length, ' rows','result', result);


function decimalToBinary(num) {
  return (num >>> 0).toString(2);  
}
var dec=10;
console.info("That decimal ",dec,"in binary is " + decimalToBinary(dec) );

var iArr =generateArray(1000)

startTime = (new Date()).getTime();
var maxVal=0;
iArr.forEach(v=>{
    maxVal = Math.max(maxVal,v);
})
// endTime= (new Date()).getTime();
// console.info("getMax value of", iArr.length,'rows takes', endTime - startTime,'using loop');
// startTime = (new Date()).getTime();
// maxVal=Math.max.apply(null,iArr);
// endTime= (new Date()).getTime();
// console.info("getMax value of", iArr.length,'rows takes', endTime - startTime,'using max apply');

Array.prototype.reverseLoop = function(callBackfn){
    var len = this.length -1;
    // console.info('arguments',callBackfn)
    var out=[];
    for (var i=len; i > -1; i--){
        out.push( callBackfn( this[i], i ) );
    }
    return out;
}

// setTimeout(function(){
    var x=1;
    var test = [1,2,3].reverseLoop(function(cv,idx,x){
        return cv;
    });
    console.info('reverseLoop',test)
// },100)

function sparseArrays(input){
    var inputs = input.split('\n');
    
    var noOfString = Number(inputs[0]);
    var qPos = inputs.slice(1).reduce((pv,cv,idx)=>{
        if ( isNaN(cv) ){
            return pv + 0
        } else {
            return pv + idx + 3;
        }
    },-1);
    var qStrings = inputs.slice(qPos);
    var srcStrings = inputs.slice(1,qPos);

    var out = qStrings.map((v,i)=>{
        return srcStrings.filter((vv)=>{
            return v === vv;
        }).length;
    });
    return out.join('\n');
    // return qPos + '; query=' + qStrings + ' ; src=' + srcStrings;
}

var ivar = '4\naba\nbaba\naba\nxzxb\n3\naba\nxzxb\nab'
console.info('sparseArrays',sparseArrays(ivar))

var pairs = (input) =>{
    var inputs = input.split('\n');
    var numbers = inputs[1].split(' ').map(Number);
    // var numberMap=inputs[1].split(' ').reduce(function(pv,cv){
    //     pv[cv] = cv;
    //     return pv;
    // },{})
    var NK = inputs[0].split(' ').map(Number);
    var N = NK[0];
    var K = NK[1];
    var numOfPairs = 0;
    var prevNumbers={};
    console.info('numbers',numbers)

    numbers.forEach((cv,idx)=>{
        var sum =  Math.abs(cv + K);
        var diff =  Math.abs(cv - K);
        
        if ( (prevNumbers[ diff ])  ){
            numOfPairs++
        }
        if (  ( prevNumbers[ sum ] ) ){
            numOfPairs++
        }
        prevNumbers[cv] = cv;
    });
    return numOfPairs;
}
var iVar = '5 2\n1 5 3 4 2';
console.info('pairs',pairs(iVar))


var findValueInDeep = (arr,num) =>{
    var out =false;
    for(var i=0;i< arr.length; i++){
        var v = arr[i];
        if (Array.isArray(v) ){
            out = findValueInDeep(v, num);
            if (out) break;
        } else if (v === num) {
            out = true;
            break;
        }
    }
    return out;
}
console.info( 'findValueInDeep', findValueInDeep( [3,4,5,[11,14,15],6,10,[21,23,24],8,9], 10 ) );

// get the diff of the hourhand and minute hand given a  time in string
var clockAngle = (timeStr)=>{
    var timeArr = timeStr.split(':').map(Number);
    var hrDeg = ( timeArr[0] * 30 ) + timeArr[1] * ( 30 / 360)  ;
    var minDeg = timeArr[1] * 6;
    // console.info('hrdeg',hrDeg,'minDeg',minDeg,'timeArr',timeArr )
    return Math.abs( hrDeg -  minDeg  )
}

console.info('clockAngle', clockAngle('07:15'))

// return true if you can find of 2 numbers
var findSum = (arr, num)=>{
    var prevNums = {};
    for(var i = 0; i < arr.length; i++){
        if (prevNums[ Math.abs( arr[ i ] -  num )  + '' ] &&  arr[ i ] < num ) {
            return true;
        }
        prevNums[ arr[ i ] ] = arr[ i ];
    }
    console.info(prevNums)
    return false;
}
console.info( 'findSum', findSum([3,5,7,9,1,2,4,3], 10 ) )

var findSums = (arr, num)=>{
    var prevNums = {};
    var numberOfSums=0;
    arr.forEach((v, i)=>{
        if (prevNums[ Math.abs( v -  num )  + '' ] && v < num) {
            numberOfSums++;
        }
        prevNums[ v ] = v;
    });
    console.info(prevNums)
    return numberOfSums;
}
console.info( 'findSums', findSums([3,5,7,9,1,2,4,21], 6 ) )

// Print the minimum number of swaps that should be performed in order to make the array beautiful.
// An array is beautiful if the sum of  among  is minimal possible (after, possibly, performing some swaps).
var lilysHomework = (arr)=>{
    console.info('orignal arry', arr)
    var arrLen = arr.length;
    var ctr=0;
    for (var i = 0; i < arrLen; i++){
        if (i < arrLen){
            if (arr[i] > arr[i + 1]){
                swap( arr, i, i + 1);
                ctr++;
            }
        }        
    }
    return {newArr: arr,'count':ctr}
}

console.info( 'lilysHomework', lilysHomework([2, 5, 3, 1] ) ) // correc answer 2

var standardDeviation = arr =>{
    let average = arr.reduce( (p,v)=>  p + v ,0) / arr.length;
    let differences = arr.map(v => Math.pow(v - average,2 ));
    let diffTotal = differences.reduce( (p,v)=> p + v ,0) ;
    // let variance = diffTotal / (arr.length - 1); // original
    let variance = diffTotal / ((arr.length - 1) || 1); // bessel's correction
    // console.info('standardDeviation average', average)
    // console.info('standardDeviation differences', differences)
    // console.info('standardDeviation diffTotal', diffTotal)    
    // console.info('standardDeviation variance', variance)
    return Math.sqrt(variance);
}
// console.info( 'standardDeviation', standardDeviation([2, 5, 3, 1, 7, 9] ) ) // correc answer 2
// console.info( 'standardDeviation', standardDeviation([9, 2, 5, 4, 12, 7] ) ) // correc answer 
console.info( 'standardDeviation', standardDeviation([ 9, 2, 5, 4, 12, 7, 8, 11, 9, 3, 7, 4, 12, 5, 4, 10, 9, 6, 9, 4 ] ) ) // correc answer 

var moneyToNumber = s => {
    return s.replace(/\$|\,/ig,'');
}

console.info('moneyToNumber', moneyToNumber('$10,000.00'));
// return true if all letters in the string is unique
var isUnique = s =>{
    return s.split('').some(v=>(s.match( new RegExp(v) )||[]) > 1  )
}

console.info('isUnique', isUnique('abcdeaf'))

// check permutaion of 2 string, if one permutation is the same as the other
var checkPermutation = (s1, s2)=>{
    return s1.split('').sort().join('') === s2.split('').sort().join('');
}
console.info('checkPermutation', checkPermutation('dog','god '))

var isPrimeNumber = n =>{
    if ( n < 2) return false;
    if ( n === 2 || n === 3) return true;
    let sqrt = Math.floor( Math.sqrt(n) );

    for (var i = 2; i < sqrt; i++){
        if ( n % i === 0){
            return false;
        }
    }
    return true;
}

console.info('isPrimeNumber', isPrimeNumber( 101 ))

var urlify = s =>{
    return s.replace(/\s/g,'%20');
}
console.info('urlify', urlify( 'jack in the box' ))

var stringCompression = s =>{
    var out=[];
    var map={};
    s.split('').forEach(v=>{
        if (!map[v]){
            var count = (s.match( new RegExp(v,'g') ) || []).length;
            map[v] = count;
        }
    });
    return Object.keys(map).reduce( (p,v)=>{
        return p + v + map[v];
    } ,'')
}

console.info('stringCompression', stringCompression( 'aaabbbccdddddfffff' ));

// var stringByWordPermutation = (s)=>{
//     var permCount =[];
//     var wordArr = s.split(' ');

//     wordArr.forEach(word=>{
//         var sarr = word.split('')
//         var ctr=0;
//         permCount.push(0);
//         word.split('').forEach( (v,i)=>{
//             var str2 = word.replace( new RegExp(v,'i'),'' );
//             str2.split('').forEach((v1,i1)=>{
//                 var str3 = str2.replace( new RegExp(v1,'i'),'' )
//                 console.info('stringByWordPermutation', v + v1 + str3);
//                 ctr++;
//                 permCount[ permCount.length -1 ] = ctr;
//             });
//         });
//     })
//     return permCount;
// }

// console.info('stringByWordPermutation', stringByWordPermutation('abcd'));


var stringPermCount = s =>{
    var len = s.length;
    var out = 1;
    while(len >= 2){
        // console.info('stringPermCount',out,len,len-1)
        out *= len ;
        len --;
    }
    return out;
}

console.info('stringPermCount', stringPermCount('abc'))


  var permutations = s => {

    var res =[];
    var arr1 = s.split('');
    function swap(arr2, i, j) {
        var temp = arr2[i];
        arr2[i] = arr2[j];
        arr2[j] = temp;
    }

    function doProcess(arr, current) {
        if (current >= arr.length) {
            res.push(arr.join(''));  
        } else {
            for (var i = current; i < arr.length; i += 1) {
                swap(arr, i, current);
                doProcess(arr, current + 1);
                swap(arr, i, current);
            }
        }
    }
    doProcess(arr1, 0);
    return res;
  };

var tmp = permutations('abc')
console.info('permutations',tmp.length, tmp)

var iArr = generateArray(10000)
// console.info( 'arr unsorted', iArr)
var numTofind = iArr[ Math.floor(iArr.length/2) ] - 1;

startTime = (new Date()).getTime();
var findClosestInArrayUnsorted = (arr, num) =>{
    var min1 = null;
    var idx = null;
    var value=null;
    arr.forEach( (v,i,arr)=>{
        var v1 = Math.abs(v - num);
        if (min1 === null || min1 > v1){
            min1 = v1;
            idx = i;
            value=v;
        }
    });
    return {value:value, idx: idx, loop:arr.length}
}
console.info('findClosestInArrayUnsorted find ' ,numTofind ,findClosestInArrayUnsorted(iArr, numTofind))
endTime = (new Date()).getTime();
console.info('findClosestInArrayUnsorted ',iArr.length,'rows', (endTime - startTime)/1000,'secs' )
iArr = iArr.sort();

// console.info( 'arr sorted', iArr)
startTime = (new Date()).getTime();

var findClosestInArraySorted = (arr,num) =>{
    var leftIdx = 0;
    var rightIdx = arr.length - 1;
    var out=-1;
    var loopCtr = 0;
    var idx=0;
    var minDiff=null;
    var value=null;
    var midIdx = Math.floor( (arr.length)/2 );

    while(leftIdx < rightIdx){
        var diff = Math.abs( arr[midIdx] - num );
        // console.info('leftIdx',leftIdx,'rightIdx',rightIdx,'arr[midIdx]',arr[midIdx],'diff',diff,'midIdx',midIdx)

        if (!minDiff || diff < minDiff){
            idx = midIdx;
            minDiff = diff;
            value = arr[midIdx];
        } else {
            // console.info('break')
            break;
        }
        if (arr[midIdx] < num){
            // console.info(' diff < num ')
            leftIdx = midIdx -1;           
        } else if (arr[midIdx] >num){
            // console.info(' diff > num ')
            rightIdx = midIdx + 1;
        }
        midIdx = Math.floor( (rightIdx + leftIdx)/2 );
        
       loopCtr++;
    }
    return {value:value, idx:idx, loop:loopCtr}
}

console.info('findClosestInArraySorted find',numTofind ,findClosestInArraySorted(iArr, numTofind))
endTime = (new Date()).getTime();
console.info('findClosestInArraySorted ',iArr.length,'rows', (endTime - startTime)/1000, 'secs' )

var oneWayEdit = function(s1, s2){
    let s,s3;
    if (s1.length > s2.length){
        s = s1
        s3 = s2;
    } else {
        s = s2;
        s3 = s1;
    }

    let diffCount = s.split('').reduce( (p,v,i)=>{
        // var rx = new RegExp(v,'g');
        // var mat = s3.match( rx ) ;
        if ( !(s3.match( new RegExp(v,'g') )) ){
            p++;
        }
        return p;
    },0);
    return (diffCount < 2)
}

console.info('oneWayEdit pale, ple',oneWayEdit( 'pale', 'ple' ));
console.info('oneWayEdit pales, pale',oneWayEdit( 'pales', 'pale' ));
console.info('oneWayEdit pale, bale',oneWayEdit( 'pale', 'bale' ));
console.info('oneWayEdit pale, bake',oneWayEdit( 'pale', 'bake' ));

var zeroMatrix = function(arr){
    let marray = Array.from(arr);
    let idxs = [];
    let colIdx =-1;
    marray.forEach( (arr, rowIdx ) =>{
        colIdx = arr.indexOf( 0 );
        if ( colIdx > -1){
            idxs.push([ rowIdx, colIdx]);
        }
    })
    if (idxs.length > 0){
        idxs.forEach( (v,i)=>{
            let rowIdx = v[0];
            let colIdx = v[1];
            marray.forEach( (varr,j)=>{
                // console.info('zero', varr)
                varr[colIdx] = 0;
                if ( j === rowIdx){
                    varr.fill(0);
                }
            })
        })
    }
    return marray;
}
// 
console.info('zeroMatrix',zeroMatrix([ [1,2,3],[4,5,6],[0,8,9]  ]))

var matrixRotation = (arr) =>{
    var newArr = Array.from(arr);    
    
    let rotate = ()=> {
        var len  = newArr.length;
        var len2 = newArr[0].length;
        var tmp  = newArr[0][ 0 ]; 
        // left most
        newArr.forEach((v,i)=>{
            if ((i + 1) < newArr.length ){
                v[ 0 ] = newArr[ i + 1 ][ 0 ];
            }
        });
        // bottom
        newArr[ len - 1].shift();
        newArr[ len - 1].push( 0 ); // this is temp value, will be filled by the loop
        // newArr[ len - 1].forEach((v,i, arrLast)=>{
        //     if ((i + 1) < arrLast.length ){
        //         arrLast [ i ] = arrLast [ i + 1];
        //     }
        // });
        // right most
        for (var i = len - 1; i > 0; i--){
            newArr [ i ] [ len2 - 1 ] = newArr [ i - 1 ] [ len2 - 1 ]
        }
        // top or first row
        newArr[ 0 ].splice(1,0,tmp);
        newArr[ 0 ].pop();

    }
    rotate();
    return newArr;
}
var arr = [ [1,2,3,4], [5,6,7,8], [9,10,11,12], [13,14,15,16] ]
console.info('matrixRotation orig',arr)
console.info('matrixRotation',matrixRotation( arr ));

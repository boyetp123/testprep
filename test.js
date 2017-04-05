"use strict"

var startTime, endTime;
/*

Trees (especially Binary Search Trees)
Trees (especially Binary Search Trees) - again
Big O Notation
Hash Tables
Object Oriented Design/System Design
Algorithms: Breadth First Search/Depth First Search, Binary Search, Merge Sort and Quick Sort

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
    for(var i =0;i<str.length;i++){
        var s = str.charAt(i).trim();
        m[ s ] = m[ s ] ? m[ s ] + 1 : 1;
    }
    m = Object.keys(m).reduce(function(pv,cv,idx){
        if (m[cv] > 1){
            pv[cv] = m[cv];
        }
        return pv; 
    },{});
    console.info(m);
} 

// getDuplicates('Bay Area');


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

// console.info(countZero(2014));

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
    let prevStr = '';
    return str.replace(/[a-zA-Z]/g,(el,idx)=>{
        if (prevStr === el){
            return ''
        } else {
            prevStr = el;
        }
        return 
    })
// 'the quick brown fox jump over the lazy dog'.match(/^[a-z]/g)
}

function pad (l, s) {
    return (new Array(l + 1)).join(s || ' ');
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
// console.info( timeConversion ('7:05:45AM'));
// console.info( timeConversion ('11:45:54AM'))
// console.info( timeConversion ('12:45:54PM'))
// console.info( timeConversion ('12:00:00AM'))

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

var generateArray = arraySize =>{
    var out=[];
    for(var i=0; i<arraySize; i++){
        out.push( Math.random() * 1000 )
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

var quickSortPartion = s =>{
    var numbers = s;

    if ( typeof s === 'string' ){
        numbers = s.split(' ').map(Number);
    }

    var comparator = (leftVal, rightVal) =>{
        return leftVal - rightVal;
    }

    var swap = (theArray,idx1,idx2)=>{
        var tmp = theArray[idx1];
        theArray[idx1] = theArray[idx2];
        theArray[idx2] = tmp;
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
var iArr = generateArray(10000000);
startTime = (new Date()).getTime();
// console.info('quickSortPartion', quickSortPartion([4, 3, 6, 2, 7, 8, 2, 5, 1,10,45,20,56,43,20,15]) )
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

startTime = (new Date()).getTime();
// var example = [40, 10, 50, 24, 1, 2, 4, -10, 15, 7, 8, 5];
heapSort(iArr)
endTime= (new Date()).getTime();
console.info('heapSort elapseTime', endTime - startTime,' ms for ',iArr.length, ' rows');


var javascriptSort = arr =>{
    return arr.sort((a,b)=>{
        return a - b;
    })
}

startTime = (new Date()).getTime();
// console.info('javascriptSort', bubbleSort([4, 3, 6, 2, 10,45,20,56,7, 8, 2, 5, 1,43,20,15]) )
javascriptSort(iArr)
endTime= (new Date()).getTime();
console.info('javascriptSort elapseTime', endTime - startTime,' ms for ',iArr.length, ' rows');




var binaryTree = ()=>{

    var Node = (value, left,right)=>{
        this.value = value;
        this.left = left;
        this.right = right;
    }




}

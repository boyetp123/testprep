// [1,2].print() 1,2

// Array.prototype.print = function() {
//     console.log(this.join(','))
// }

// var test = [1,2]
// test.print()

// // print the values or keys of the object
// var x = {
//     a:1,
//     b:3
// }
// console.log( Object.values(x) , Object.keys(x), Object.entries(x))

// console.log('string', new String( [1,2] ).toString() )




//// find for first none repeating charater from a string

var nonRepeat1 = 'aaadbccdceeef';
var nonRepeat2 = 'abcbadsat'

function findNonRepeatCharactoers1(chars) {
    var strArray = chars.split('').sort();
    var repeatedStrs = {};
    var prevString = '';
    for (var i = 0; i < strArray.length; i++) {
        var currentStr = strArray[i]

        var count = repeatedStrs[currentStr] || 0;
        console.log('debug ', currentStr, count, prevString, repeatedStrs)

        if (prevString !== currentStr  && repeatedStrs[prevString] === 1) {
            console.log('first non repeated string is ', prevString)
            break;
        }
        repeatedStrs[currentStr] = count + 1;
        prevString = currentStr;

    }

}

//  findNonRepeatCharactoers1(nonRepeat1)

function findNonRepeatCharactoers2(chars) {
    var strArray = chars.split('');
    var objStrs = {};
    var arrayStrs = [];

    var prevString = '';
    
    strArray.forEach(function(currentStr){
        if (objStrs[currentStr] ) {
            objStrs[currentStr] ++;
        } else {
            objStrs[currentStr] = 1;
            arrayStrs.push(currentStr);
        }
    })

    // for(var i=0; i < arrayStrs.length; i++) {
    //     if (objStrs[arrayStrs[i]] === 1) {
    //         console.log('first non repeated string is ', arrayStrs[i])       
    //         break;     
    //     }
    // }
    // or loop thr the same set of string
    for(var i=0; i < strArray.length; i++) {
        if (objStrs[strArray[i]] === 1) {
            console.log('first non repeated string is ', strArray[i])       
            break;     
        }
    } 

}

findNonRepeatCharactoers2(nonRepeat2)
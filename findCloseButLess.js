
findClosestButLess(arrOfSeconds, secVal) {

    var leftIdx = 0, rightIdx = arrOfSeconds.length -1;
    var out = -1;
    var minDiff =null;
    var midIdx = Math.floor( (leftIdx/2) );
    
    while ( leftIdx < rightIdx ) {
        var currVal = arrOfSeconds[ midIdx ];
        var diff = currVal - secVal;
        
        
        if ( (minDiff !== null || diff < minDiff) && diff < 0 ){
            out = midIdx;
            minDiff = diff;
        } else {
            break;
        }
        
        if ( currVal < secVal ) {
            leftIdx = midIdx;
        } else if ( currVal > secVal ) {
            rightIdx = midIdx;
        }
    
        midIdx = Math.floor( (leftIdx + rightIdx) / 2 );
    
    }
    
    return out;
}
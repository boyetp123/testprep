function getDuplicate(str){
  var rmap = {};
  var str2 = str.toLowerCase();
  
  for (var i = 0; i < str2.length; i++){    
    
    if ( rmap[ str2.charAt(i) ] ){
      rmap[ str2.charAt(i) ] ++
    } else {
      rmap[ str2.charAt(i) ] = 1
    }
  }

    for (var x in rmap){
      if (rmap[x] < 2){
        delete rmap[x];
      }
    }
  
  return rmap;
}

console.log( getDuplicate("Bay Area")  )

// [25,23,2,5,7,9,4,10,30]/

function find2Max( arr ){
  
  var max1 = Math.max.apply(null,arr);
  var max2 =0;
  for (var i =0; i < arr.length; i++){
     if (arr[i] < max1){
       max2=Math.max(max2,arr[i])
     }
  }
  
  console.log('max1=',max1,'max2=',max2)  
  
}

find2Max([12, 4, 2, 10, 25])




function dupString(str){
  var rval=[];
  for(var i=0; i < str.length; i++){
    var x = str.charAt(i);
    rval.push(x + x);
  }
  return rval.join('');
}
console.log(dupString("Hi-There") );
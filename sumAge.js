const profile = {
    name: 'test',
    age: 50,
    kids: [
        {
            name:'alan',
            age: 25,
            kids: [
                {name: 'bob',
                age: 3}
            ]
        },
        {
            name:'joy',
            age: 23,
            kids: [
                {name:'baby',
                age: 2}
            ]
        },
        
    ]
}

function sumAges(obj) {
    let totalAge = 0;
    if (obj.age) {
        totalAge +=  obj.age
    }
    if (obj.kids) {
        obj.kids.forEach( (o,i) => {
            totalAge += sumAges(o)
        } )
    }
    return totalAge
}


function sumAges2(obj) {
    let totalAge = 0;
    for (let key in obj) {
        if (key === 'age') {
            totalAge +=  obj.age            
        }
        if ( Array.isArray(obj[key])) {
            obj[key].forEach( (o,i) => {
                totalAge += sumAges(o)
            } )
        }
    }
    return totalAge    
}
 console.log('total Age:', sumAges2(profile))

 function genRandomInt(max, min) {
     let rand = Math.random() * (max - min) + min
     if (Math.floor(rand)%2===0 ) {
        return Math.ceil(rand)        
     }
     return Math.floor(rand);
 }
 function printRandomAdditionLessThan10() {
     let maxTotal = 10;
     let rNum = 0
     for (let i =0; i < 5; i++) {
        rNum = genRandomInt(maxTotal, i)
        console.log(`${rNum} + ${ maxTotal - rNum} =`)
     }
 }
 printRandomAdditionLessThan10()
// [1,2].print() 1,2

Array.prototype.print = function() {
    console.log(this.join(','))
}

var test = [1,2]
test.print()

// print the values or keys of the object
var x = {
    a:1,
    b:3
}
console.log( Object.values(x) , Object.keys(x), Object.entries(x))

console.log('string', new String( [1,2] ).toString() )
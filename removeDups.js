var data = [
	{
		name: 'Kyle',
		occupation: 'Fashion Designer'
	},
	{
		name: 'Liza',
		occupation: 'Web Developer'
	},
	{
		name: 'Emily',
		occupation: 'Web Designer'
	},
	{
		name: 'Melissa',
		occupation: 'Fashion Designer'
	},
	{
		name: 'Tom',
		occupation: 'Web Developer'
	}
];
// this will be very slow  On^2
var unique = data.filter((d,i)=> data.findIndex((d2,i2)=>d.occupation === d2.occupation) === i)
console.log(unique)

var unique2 = []
for (let i of data) {
	
}


// var jobsUnique = jobs.filter(function(item, index){
// 	return jobs.indexOf(item) >= index;
// });

// // Logs ["Fashion Designer", "Web Developer", "Web Designer"]
// console.log(jobsUnique);

const names = ['John', 'Paul', 'George', 'Ringo', 'John'];

// let x = (names) => names.filter((v,i) => names.indexOf(v) === i)
// let x = function(name) {
//     return names.filter(function(v, i){
//         let r = names.indexOf(v);
//         console.log(v, r, i)
//         return r === i;
//     }) 
// }

// console.log(x(names))
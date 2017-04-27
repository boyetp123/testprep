LinkedIn

https://i.imgur.com/R2f8oNH.png
<style>
  #main-container{
    width:200px;
    height:150px;
  }
  #drop-down{
    position:absolute;
    width: 80px;
    height:30px;
    border:dark-gray;
    background-color:gray;
  }
  #drop-down:hover{
    background-color:blue;
  }   
  .icon-calendar{
    margin:1px 3px;
    width:2px;
    height:2px;
    background-color:red;
  }
  .icon-task{
    margin:1px 3px;
    width:2px;
    height:2px;
    background-color:blue;
  }
  .buttons-container button{
    margin-right:5px;    
  }
  .body label{
    text-align:left:
  }
  .body li div{
    float:right;
  }
</style>


<div class="main-container">
  <div class="header">
    Interview Scheduled for J.Doe 
  </div>
  <div class="body">
    <ul>
      <li>
        <label for="location">location</label>
         <div id="location"> Room1 </div>
      </li>
      <li>
        <label for="invitees">invitees</label>
         <div id="invitees"> john<br>paul<br>ringo<br>george </div>
      </li>
      <li>
        <label for="calendar">calendar</label>
         <div id="calendar"> Room1 </div>
      </li>
    </ul>
  </div>
  <div class="buttons-container">
    <button>Maybe</button>
    <button>Decline</button>
    <button>Accept</button>
  </div>

  <div id="drop-down">
    <ul>
      <li>
        <div class="icon-calendar">Calendar</div>
      </li>
      <li>
        <div class="icon-task">Task</div>
      </li>
    </ul>
  </div>        
</div>
  
  

http://i.imgur.com/UIeB3n4.png

// Given
var endorsements = [
  { skill: 'css', user: 'Bill' },
  { skill: 'javascript', user: 'Chad' },
  { skill: 'javascript', user: 'Bill' },
  { skill: 'css', user: 'Sue' },
  { skill: 'javascript', user: 'Sue' },
  { skill: 'html', user: 'Sue' }
];
 
// Result
[
  { skill: 'javascript', user: [ 'Chad', 'Bill', 'Sue' ], count: 3 },
  { skill: 'css', user: [ 'Sue', 'Bill' ], count: 2 },
  { skill: 'html', user: [ 'Sue' ], count: 1 } 
]; 


function transform(endorsementsArry) {
  var out = 	endorsementsArry.reduce( (p,v) => {
    	if ( !p[v.skill ] ){
       	p[v.skill] = [v.user] 
      } else {
        p[v.skill].push(v.user);
      }
    	return p;
  },{}); // map
  return Object.keys(out).map( v =>{
  	return {skill: v, users: out[v], count :out[v].length} 
  });    
}


function transform2(endorsementsArry) {
	var map={};
	var out = [];
	endorsementsArry.forEach( (v,i)=>{
		if ( !map[ v.skill ] ){
			out.push( {skill:v.skill ,users:[v.user], count:1 } );			
			map[ v.skill ] = out.length - 1;
		} else {
			out[ map[ v.skill ] ].users.push(v.user] 
			out[ map[ v.skill ] ].count++;
		}
	});

	return out;
}


function transform3(endorsementsArry) {
  var mapIdx = {};  
  return endorsementsArry.reduce( (p,v) => {
      if ( !mapIdx[v.skill ] ){
        p.push({skill:v.skill,users:[v.user],count:1});   
       	mapIdx[v.skill] = p.length - 1;
      } else {
        var o = p[ mapIdx.skill ];
        o.users.push( v.user );
        o.count = o.users.length;
      }
     return p;
  },[]); // map
}



var Foo = function( a ) { 
  this.a = a;
  this.bar = function() {   
    return this.a; 
  }
  this.baz = function() {   
    return this.a; 
  };
};
 
Foo.prototype = {
  biz: function() {    
    return this.a; 
  }
};
 
var f = new Foo( 7 );
f.bar(); // undefined (error - f.bar is not a function)
f.baz(); // 7
f.biz(); // undefined (referenceError)
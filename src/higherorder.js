"use strict";

/*eslint null:0*/
const repeat =  (num,fn) => {
	if (num > 0){
           repeat (num - 1,fn) 
	   fn(num-1)
	}
}

repeat(9,function(num){
	console.log("number : ", num)
})

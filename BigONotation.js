
function BigONotation(size){
	var that = {};
	var theArray = []; //private int[] 
	var arraySize =0; //private int 
	var itemsInArray = 0; // private int 
	var startTime = 0; // static long 
	var endTime = 0; // static long 

	arraySize = size;
	that.theArray = theArray = new Array(size);

    // function main(){
    // }

	var addItemToArray = that.addItemToArray =  function ( newItem) {
		// theArray[itemsInArray++] = newItem;
		theArray.push( newItem );
		that.theArray.push( newItem );
	}
	var setArrayItems = that.setArrayItems = function(arrayItems){
		that.theArray = theArray = arrayItems;
	}

	var linearSearchForValue = that.linearSearchForValue = function ( value) {

		var valueInArray = false;
		var indexsWithValue = "";

		startTime =  (new Date()).getTime(); // System.currentTimeMillis();

		for (var i = 0; i < arraySize; i++) {

			if (theArray[i] == value) {
				valueInArray = true;
				indexsWithValue += i + " ";
			}

		}

		console.info("Value Found: " + valueInArray);
		endTime =  (new Date()).getTime(); //System.currentTimeMillis();
		console.info("Linear Search Took " + (endTime - startTime));
	}

	var bubbleSort = that.bubbleSort = function bubbleSort() {

		startTime =  (new Date()).getTime(); // System.currentTimeMillis();

		for (var i = arraySize - 1; i > 1; i--) {

			for (var j = 0; j < i; j++) {

				if (theArray[j] > theArray[j + 1]) {

					swapValues(j, j + 1);

				}
			}
		}

		endTime =  (new Date()).getTime(); //System.currentTimeMillis();

		console.info("Bubble Sort Took " + (endTime - startTime));
	}

	var binarySearchForValue = that.binarySearchForValue = function binarySearchForValue( value) {

		startTime =  (new Date()).getTime(); // System.currentTimeMillis();
		var lowIndex = 0;
		var highIndex = arraySize - 1;
		var timesThrough = 0;

		while (lowIndex <= highIndex) {
			var middleIndex = Math.ceil ((highIndex + lowIndex) / 2);

			if (theArray[middleIndex] < value){
				lowIndex = middleIndex + 1;
			}else if (theArray[middleIndex] > value){
				highIndex = middleIndex - 1;
			}else {

				console.info("\nFound a Match for " + value + " at Index " + middleIndex, 'array value',theArray[middleIndex],'search value',value);
				lowIndex = highIndex + 1;
			}
			timesThrough++;
		}

		// This doesn't really show anything because
		// the algorithm is so fast
		endTime =  (new Date()).getTime(); //System.currentTimeMillis();
		console.info("Binary Search Took " + (endTime - startTime));
		console.info("Times Through: " + timesThrough);
    }

	var quickSort = that.quickSort = function quickSort( left,  right) {
		if (right - left <= 0){
			return;
		} else {
			var pivot = theArray[right];
			var pivotLocation = partitionArray(left, right, pivot);
			quickSort(left, pivotLocation - 1);
			quickSort(pivotLocation + 1, right);
		}
	}

    // var partitionArray = that.partitionArray = function partition(array, left, right, compare) {
    //   var cmp = array[right - 1];
    //   var minEnd = left;
    //   var maxEnd;
    //   for (maxEnd = left; maxEnd < right - 1; maxEnd += 1) {
    //     if (compare(array[maxEnd], cmp) < 0) {
    //       swap(array, maxEnd, minEnd);
    //       minEnd += 1;
    //     }
    //   }
    //   swap(array, minEnd, right - 1);
    //   return minEnd;
    // }


	var partitionArray = that.partitionArray = function partitionArray( left,  right,  pivot) {

		var leftPointer = left - 1;
		var rightPointer = right;

		while (true) {

			while (theArray[++leftPointer] < pivot)	;

			while (rightPointer > 0 && theArray[--rightPointer] > pivot)	;

			if (leftPointer >= rightPointer) {
				break;
			} else {
				swapValues(leftPointer, rightPointer);
			}
		}

		swapValues(leftPointer, right);

		return leftPointer;

	}


	var generateRandomArray = that.generateRandomArray = function generateRandomArray() {

		for (var i = 0; i < arraySize; i++) {
			theArray[i] =  (Math.random() * 1000) + 10;
		}
		itemsInArray = arraySize - 1;
	}

	var swapValues =  that.swapValues = function swapValues( indexOne,  indexTwo) {
		var temp = theArray[indexOne];
		theArray[indexOne] = theArray[indexTwo];
		theArray[indexTwo] = temp;
	}

	return that;
    // main();
}

var start, end;
var bigO = BigONotation(100000);
bigO.generateRandomArray();

// start = (new Date()).getTime();
// bigO.bubbleSort();
// end = (new Date()).getTime();
// console.info('bubbleSort  elapse', end - start );

// var bigO1 = BigONotation(100000);
// bigO1.generateRandomArray();
// start = (new Date()).getTime();
// bigO1.quickSort(0,100000);
// end = (new Date()).getTime();
// console.info('quicksort elapse', end - start );


var bigO2 = BigONotation(20);
// bigO2.generateRandomArray();
//bigO2.setArrayItems( [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20] );
bigO2.setArrayItems( [1,12,3,14,5,16,7,18,9,20,11,2,13,4,15,6,17,8,19,10] );
start = (new Date()).getTime();
console.info( 'bigO2.theArray', bigO2.theArray )
bigO2.binarySearchForValue(4);
end = (new Date()).getTime();
console.info('binarySearchForValue elapse', end - start );




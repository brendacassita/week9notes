// June
//                Paper	 Online   VR
// Fiction	        2  	  4       1
// Non-Fiction	    3	    1       3
// Magazines	      4	    5       5

// July
//                  Paper	 Online  VR
// Fiction	          3  	  4       0
// Non-Fiction	      1	    1       3
// Magazines	        1	    2       3

// store in a data structure computer
// part 1: One matrix



const juneDataMatrix = [
  [2, 4, 1],
  [3, 1, 3],
  [4, 5, 5],
];

const julyDataMatrix = [
  [3, 4, 0],
  [2, 1, 3],
  [1, 2, 3],
];

//1. sub step takes an array and sums it up
const sumArray = (arr) => arr.reduce ((sumAccum, value) => value + sumAccum)


// sumRows
// matrix => [[1,2,3],[1,2,3],[23,34,2]] => [6,6,59]
// matrix => [[1,2,3,4],[1,2,3,4],[23,34,2,4]] => [10,10,]
// matrix => [[1,2,3,4],[1,2,3,4]]
const sumRows = (matrix) => {
    let rowTotals = matrix.map(nestedArray => sumArray(nestedArray))
    return rowTotals
}


 const juneRowTotals = sumRows(juneDataMatrix)
 const randomRowTotals = sumRows([[1,2,3,4],[1,2,3,4],[23,34,2,4],[100,34,2,4]])
console.log(juneRowTotals)
console.log(randomRowTotals)


// 2. find columns sums
sumColumns = (matrix) => {
    const sum = (r, a) =>
      r.map((b, i) => {
        return a[i] + b;
      });
    let x = matrix.reduce(sum);
    return x;
  };



const getMonthData = (monthData) =>{
    // sumRows returns array of three numbers => [1,2,3]
    // arrayDestructring 
    const [totalFiction, totalNonFiction, totalMagazines] = sumRows(monthData)
    const [totalPaper, totalOnline, totalVR] = sumColumns(monthData)
    return {totalFiction, totalNonFiction, totalMagazines, totalPaper, totalOnline,totalVR }

    // same thing down here
    // let monthTotal = sumRows(monthData)
    // return {totalFiction:monthTotal[0], totalNonFiction:monthTotal[1], totalMagazines:monthTotal[2] }
}

console.log(getMonthData(juneDataMatrix))



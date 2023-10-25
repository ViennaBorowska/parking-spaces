//Parking Space Arrangement Calculator
//(M) Motorcycle = 1 space
//(C) Car = 2 spaces
//(V) Van = 3 spaces

//Recursive Function
//Base Case 1: 1 - M (1 space = 1 arrangement possible; 1 mototcycle))
//Base Case 2: 2 - MM, C (2 spaces = 2 arrangements possible; 2 motorcycles, 1 car )
//Base Case 3: 4 - MMM, CM, MC, V (3 spaces = 4 arrangements possible; 3 motorcycles, 1 car 1 motorcycle, 1 motorcycle 1 car, 1 van)

//Function takes in the number of spaces available
//IF spaces available = 1, return 1 (base case 1)
//IF spaces available = 2, return 2 (base case 2)
//IF spaces available = 3, return 4 (base case 3)
//ELSE calculate available spaces by splitting spaces down into manageable chunks i.e when base cases are met
//RETURN all possible parking arrangements as number

const fs = require("fs");
const { performance } = require("perf_hooks");

if (fs.existsSync("recursiveParkingRuntimes.csv"))
  fs.unlinkSync("recursiveParkingRuntimes.csv");
// create and write a header to the output csv file
fs.appendFile("recursiveParkingRuntimes.csv", "N, Average Runtime\n", (err) => {
  if (err) throw err;
});

function parkingSpaceArrangement(numOfSpaces) {
  //Outline 3 base cases, one for each vehicle
  if (numOfSpaces == 1) {
    return 1;
  } else if (numOfSpaces == 2) {
    return 2;
  } else if (numOfSpaces == 3) {
    return 4;
  } else {
    //Increment down number of spaces using recursive calls to function to calculate data in manageable sizes according to outlined base cases
    return (
      parkingSpaceArrangement(numOfSpaces - 1) +
      parkingSpaceArrangement(numOfSpaces - 2) +
      parkingSpaceArrangement(numOfSpaces - 3)
    );
  }
}

//Driver & Testing Code
for (let parkingSize = 1; parkingSize <= 47; parkingSize++) {
  //Calculate runtime
  let timestart = performance.now();
  parkingSpaceArrangement(parkingSize);
  let runtime = performance.now() - timestart;
  console.log(runtime);

  let data = `${parkingSize}, ${runtime}\n`;
  fs.appendFile("recursiveParkingRuntimes.csv", data, (err) => {
    if (err) throw err;
  });
}

// Testing function against manual calculations
// console.log(parkingSpaceArrangement(1));
// console.log(parkingSpaceArrangement(2));
// console.log(parkingSpaceArrangement(3));
// console.log(parkingSpaceArrangement(4));
// console.log(parkingSpaceArrangement(5));
// console.log(parkingSpaceArrangement(6));
// console.log(parkingSpaceArrangement(7));

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
// ELSE call function to calculate spaces down until base cases are met and stack return value

function parkingSpaceArrangement(numOfSpaces) {
  if (numOfSpaces == 1) {
    return 1;
  } else if (numOfSpaces == 2) {
    return 2;
  } else if (numOfSpaces == 3) {
    return 4;
  } else {
    return (
      parkingSpaceArrangement(numOfSpaces - 1) +
      parkingSpaceArrangement(numOfSpaces - 2) +
      parkingSpaceArrangement(numOfSpaces - 3)
    );
  }
}

console.log(parkingSpaceArrangement(4));
console.log(parkingSpaceArrangement(5));
console.log(parkingSpaceArrangement(6));
console.log(parkingSpaceArrangement(7));

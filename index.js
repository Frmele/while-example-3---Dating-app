'use strict';

let hobbies = "";

let wantsToAddMoreHobbies = true;
while (wantsToAddMoreHobbies) {
  const answer = prompt("Do you want to add more hobbies? Y/N");
  if (answer === "Y") {
    const newHobby = prompt("What is another hobby you have?");
    hobbies = `${hobbies} ${newHobby}`
  } else if (answer === "N") {
    wantsToAddMoreHobbies = false;
  } else {
    console.log("Your answer was unclear");
  }
}


console.log(`Your hobbies are: ${hobbies}.`);


// Other exercise
let hobbies = "";

while (true) {
  const answer = prompt("Do you want to add more hobbies? Y/N");
  if (answer === "N") {
    // We exit the while loop so we don't need to do if-else here.
    break; 
  }
  
  if (answer === "Y") {
    const newHobby = prompt("What is another hobby you have?");
    hobbies = `${hobbies} ${newHobby}`
  } else {
    console.log("Your answer was unclear");
  }
}


console.log(`Your hobbies are: ${hobbies}.`);
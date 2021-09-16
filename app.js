// Defining functions

function grumpus() {
    console.log("ugh");
    console.log("not this again");
    console.log("just 5 mins more...");
}

function singSong() {
    console.log("DO");
    console.log("RE");
    console.log("MI");
}

function greet(firstName) {
    console.log(`Hey there, ${firstName}`);
}

// Running functions
greet("Carlos");


const yell = "Die bart, die!".toUpperCase();

yell; // DIE BART, DIE!

function sum(x, y) {
    let total = x + y;
    return total;
    console.log("Honk"); // This line of code won't run
}

const mathProdigy = sum(2, 2);
mathProdigy; // 4

function repeatThing(thing, numTimes) {
    let resultStr = "";
    for (let i = 0; i < numTimes; i++){
      resultStr += thing;
    }
    console.log(resultStr);
  }
  
repeatThing("lol", 5);
  


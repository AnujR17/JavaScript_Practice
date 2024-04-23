// calculate bmi 
function calculateBMI() {

  let markMass = 78;
  let markHeight = 1.69;
  let johnMass = 92;
  let johnHeight = 1.95;

  let markBMI = markMass / (markHeight ** 2);
  let johnBMI = johnMass / (johnHeight ** 2);

  let markHigherBMI = markBMI > johnBMI;

if (markHigherBMI) {
  console.log(`Mark's BMI (${markBMI.toFixed(1)}) is higher than John's (${johnBMI.toFixed(1)})!`);
} 
else {
  console.log(`John's BMI (${johnBMI.toFixed(1)}) is higher than Mark's (${markBMI.toFixed(1)})!`);
}

  markMass = 95;
  markHeight = 1.88;
  johnMass = 85;
  johnHeight = 1.76;

  markBMI = markMass / (markHeight ** 2);
  johnBMI = johnMass / (johnHeight ** 2);

  markHigherBMI = markBMI > johnBMI;

if (markHigherBMI) {
  console.log(`Mark's BMI (${markBMI.toFixed(1)}) is higher than John's (${johnBMI.toFixed(1)})!`);
} 
else {
  console.log(`John's BMI (${johnBMI.toFixed(1)}) is higher than Mark's (${markBMI.toFixed(1)})!`);
}
}
// second question of gymnasts 
function AverageGymnastics (){
let dolphinsScore1 = (96+108+89)/3
let dolphinsScore2 = (97+112+101)/3
let dolphinsScore3 = (97+112+101)/3;
let koalasScore1 = (88+91+110)/3
let koalasScore2 = (109 + 95 + 123) / 3
let koalasScore3 = (109 + 95 + 106) / 3

// simple case without any specific conditions
console.log ("Resutls of first case: ")
  if (dolphinsScore1 > koalasScore1) {
    console.log("Dolphins are the winners!");
  } 
  else if (dolphinsScore1 < koalasScore1){
    console.log("Koalas are the winners!");
  }
  else {
  console.log("Its a draw!")
  }
  // bonus 1 minimum 100 points to win

console.log("Resuslts of bonus1 case: ")
  if (dolphinsScore2 >= 100 && koalasScore2 >=100) {
    if (dolphinsScore2 > koalasScore2){
      console.log("Dolphins are the winners!")
    } else {
      console.log("Koalas are the winners!")
    }
  } else {
    if (dolphinsScore2 < 100) {
      console.log("Dolphins did not meet the minimum score requirement of 100 points.")
    } else {
      console.log("Koalas didnt meet the requirements of 100 points to win.")
      }
  } 

  // bonus 2 minimum 100 points and draw 
console.log("Results of Bonus 2 case: ")
  if (dolphinsScore3 >=100 && koalasScore3 >=100) {
    if (dolphinsScore3 === koalasScore3) {
      console.log("It's a draw!");
    } else if (dolphinsScore3 > koalasScore3) {
      console.log("Dolphins are the winners!");
    } else {
      console.log("Koalas are the winners!");
    }
  }
  else {
    console.log("No team wins.")
  }
}
// calculate bill calculator 
function billCalculator() {

  // for the first dataset
  let bill = 40 
  let tip = 0;
  let finalBill;

    if (bill >= 50 && bill <= 300) {
      tip = bill * 0.15
      finalBill = bill + tip
    }
    else {
      tip = bill * 0.2;
      finalBill = bill + tip;
    }
  
  console.log(`The bill of ${bill} along with the tip of ${tip.toFixed(2)} gets down to the final payment of ${finalBill.toFixed(2)}`)

}
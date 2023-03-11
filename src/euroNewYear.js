import { isLeapYear } from "./leapYear.js";
import { yearDifference } from "./yearDiff.js";
import { ethioNewYear } from "./ethioNewYear.js";

let leapSep = 12;
let notLeapSep = 11;
 export function gregorianNewYear(gregDate){
let yearDiff = yearDifference(gregDate.getMonth());
let year =  gregDate.getFullYear()
let sepDate = 0;
 if(yearDiff === 8){
  sepDate = isLeapYear(gregDate.getFullYear()) ? leapSep : notLeapSep;
  year = gregDate.getFullYear() - 1;
 }
else{
    sepDate = isLeapYear(gregDate.getFullYear()+1) ? leapSep : notLeapSep; 
}

return `${year}/9/${sepDate}`;

}

// let date = new Date()
//   let  greg = gregorianNewYear(date)
//   let yeardiff = yearDifference(date.getMonth())
//   console.log(ethioNewYear(greg,yeardiff))

// console.log(gregorianNewYear(new Date(1995,11,12)))
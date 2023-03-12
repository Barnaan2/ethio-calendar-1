import { ethioNewYear as ethiopNewYear } from "./ethioNewYear.js";
import { dayDifference } from "./dayDiff.js";
import { gregorianNewYear } from "./euroNewYear.js";
import { yearDifference } from "./yearDiff.js";
import { displayEthioDate } from "./displayEthioDate.js";

const DAY_IN_MONTH = 30;

export function ethioDate(date){
  let gregNew = gregorianNewYear(date)
  let remainSep = 30 - gregNew.split('/')[2]
  let yearDiff = yearDifference(date.getMonth())
  let ethiopNewY = ethiopNewYear(date.getFullYear(),yearDiff).split('/')
  let dayDiff = dayDifference(date)  + remainSep
  console.log("Original date",dayDifference(date) )
  let leftMonth = dayDiff / DAY_IN_MONTH
  let leftDay = dayDiff % DAY_IN_MONTH
  return displayEthioDate(leftMonth,leftDay,ethiopNewY)
}

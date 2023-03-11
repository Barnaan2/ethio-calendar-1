import { isLeapYear } from "./leapYear.js";

export function displayEthioDate(leftMonth,leftDay,ethioNewY){
  console.log(leftMonth)

  if(( parseInt(leftMonth) === 12)){
    console.log("month is 13")
    if(leftDay > 5){
      let customDay = leftDay - 5;
      if(isLeapYear(+ethioNewY[0])){
         customDay += 1
        return `${ +ethioNewY[0] + 1}/${parseInt(ethioNewY[1])}/ ${parseInt(customDay)}`;
      }
     else{
      return `${ +ethioNewY[0] + 1}/${parseInt(ethioNewY[1])}/${parseInt(customDay)}`;
     }
    }
    else{
      if(!isLeapYear(+ethioNewY[0])){
        return `${ethioNewY[0]}/${ parseInt(ethioNewY[1]) + parseInt(leftMonth)}/${ parseInt(ethioNewY[2]) + parseInt(leftDay)}`;
      }
      else{
        return `${ +ethioNewY[0] + 1}/${ parseInt(ethioNewY[1])}/${ parseInt(ethioNewY[2])}`;
      }

    }
   
  }

else{
  return `${ethioNewY[0]}/${ parseInt(ethioNewY[1]) + parseInt(leftMonth)}/${ parseInt(ethioNewY[2]) + parseInt(leftDay)}`;
}


}
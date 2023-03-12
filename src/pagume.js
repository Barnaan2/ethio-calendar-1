import { isLeapYear } from "./leapYear";

 //! Fix ME :( !  I should return an object of ethiopian date instead of String.
export function pagume(leftDay,leftMonth,ethiopNewY){
    if(leftDay > 5){
    let customDay = leftDay - 5;
    return isLeapYear(parseInt(ethiopNewY[0])) 
        ? `${ +ethiopNewY[0] + 1}/${parseInt(ethiopNewY[1])}/${parseInt(customDay) + 1}` 
        : `${ +ethiopNewY[0] + 1}/${parseInt(ethiopNewY[1])}/${parseInt(customDay)}`;
}
  else{
    return !isLeapYear(+ethiopNewY)
     ? `${ethiopNewY[0]}/${ parseInt(ethiopNewY[1]) +
         parseInt(leftMonth)}/${ parseInt(ethiopNewY[2]) + parseInt(leftDay)}`
     : `${ +ethiopNewY[0] + 1}/${ parseInt(ethiopNewY[1])}/${ parseInt(ethiopNewY[2])}`
  }
}
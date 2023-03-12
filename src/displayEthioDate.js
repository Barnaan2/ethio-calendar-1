
import { pagume } from "./pagume.js";
// A factory method: to create a EthioDate instance
export function displayEthioDate(leftMonth,leftDay,ethiopNewY){
// Month counting  starts from zero like an array's index so the 12th month is pagume or its 13th in calendar
  return !(parseInt(leftMonth) === 12 )
    ? `${ethiopNewY[0]}/${ parseInt(ethiopNewY[1]) + 
      parseInt(leftMonth)}/${ parseInt(ethiopNewY[2]) + 
      parseInt(leftDay)}`
    : pagume(leftDay,leftMonth,ethiopNewY) ;
}
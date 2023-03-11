import { isLeapYear } from "./src/leapYear.js"
console.log(isLeapYear(2012))
class ethioCalendar{
    constructor(day ,month ,year){
        this.day = day
        this.month=month
        this.year = year
    }


}

const obj = new ethioCalendar(12,3,2020).valueOf()
console.log(typeof obj)

 const dayInMonth = [30 , 31 ,30 ,31,31 ,28 ,31 ,30 ,31 ,30,31 ,31]
 let today = new Date()
 let day = today.getDate()
 let month = today.getMonth()

function dayDiff(day , month){
   
}

function monthToDay(month){
 let daySum = 0;
for(let i = 0;i<=month;i++){
   daySum += day
}
}


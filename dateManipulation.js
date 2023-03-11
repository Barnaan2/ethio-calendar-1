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




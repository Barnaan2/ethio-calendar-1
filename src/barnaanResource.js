// // Date manipulation resources
// class EthioDate{
//     constructor(date,month,year){
//         this.date=date
//         this.year=year
//         this.month=month
//     }
// // 12/2/2023
// valueOf(){
// return `${this.date}/${this.month}/${this.year}`
// }

// }



// let newDate = new Date()
// let date = newDate.getDate()
// let year = newDate.getFullYear()
// let month = newDate.getMonth()
// let ethioDate = new EthioDate(date,month,year)
// console.log(ethioDate)



class EthioDate {
    constructor(date, month, year) {
      this.date = date;
      this.month = month;
      this.year = year;
      this.valueOf() 
    }
  
    valueOf() {
        return 'hello'
    }
  }

  
  
  // Example usage
  const myDate = new EthioDate(12, 2, 2023);
  console.log(myDate); // Output: 12/2/2023
  


















//!  new Date() return new date object
// let dateObject = new Date(1995, 11, 17)
// console.log(typeof dateObject)
// console.log(dateObject)

// //  all getters
// console.log("getDay",dateObject.getDay())
// console.log("getFullYear",dateObject.getFullYear())
// console.log("getDate",dateObject.getDate())
// console.log("getMonth",dateObject.getMonth())
// console.log(dateObject.toLocaleDateString())
// //  output 12/17/1995

// currentYear = dateObject.getFullYear()
// newYear = currentYear - 7;
// dateObject.setFullYear(newYear)
// dateObject.setDate(1)
// dateObject.setMonth(1)


// console.log("you have just created me", newDate.toLocaleDateString())
// console.log("new one",dateObject.toLocaleDateString())

// // setters
// let dateObj = new Date()
// dateObj.setDate(29)
// dateObj.setMonth(11)
// dateObj.setFullYear(2000)
// console.log("I have been created by setters :)", dateObj.toLocaleDateString())
// //!! The output :
// // object
// //2023-03-11T06:22:29.342Z






// // ! Date() is a function it will return string value of the (new Date())
// let currentDate = Date()
// console.log(typeof currentDate)
// console.log(currentDate)
// //! The output:
// //string
// //Sat Mar 11 2023 09:22:29 GMT+0300 (East Africa Time)

// // ! Static methods
// //! source from the documentation : 
// /*
// Parsing of strings with Date.parse is strongly discouraged!
// due to browser differences and inconsistencies. 
// */ 
// console.log(Date.now())
// console.log(Date.parse())
// console.log(Date.UTC())
// //! The output
// //1678516311121
// //NaN
// //NAN

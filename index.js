const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");
const allTextAreas = document.querySelectorAll("textarea");
const arrowBtn = document.querySelector("svg");
const birthdayError = document.getElementById("birthday-error-text");
const birthMonthError = document.getElementById("birth-month-error-text");
const birthYearError = document.getElementById("birth-year-error-text");
const numberOfYears = document.getElementById("number-of-years");
const numberOfMonths = document.getElementById("number-of-months");
const numberOfDays = document.getElementById("number-of-days");
const dayLabel = document.getElementById("day-label");
const monthLabel = document.getElementById("month-label");
const yearLabel = document.getElementById("year-label");




const inValidDates = [["01","31"], ["02", "29"],["03","31"], ["04","30"], ["05","31"],["06","30"],["07","31"],["08","31"],["09","30"],["10", "31"],["11","30"], ["12","31"]]




function validateBirthDate(){
 
    
    if (day.value > 31 ){
        dayLabel.style.color = "hsl(0, 100%, 67%)"
        birthdayError.innerText = "Must be a valid day"
        setTimeout(()=>{
            dayLabel.style.color = ""
            birthdayError.innerText = ""
           },2000)
       
    } else if(day.value === ""){
        dayLabel.style.color = "hsl(0, 100%, 67%)"
        birthdayError.innerText = "This field is required"
        setTimeout(()=>{
            dayLabel.style.color = ""
            birthdayError.innerText = ""
           },2000)
    }
  return validateMonth()

   
}

function validateMonth (){
    if (month.value > 12) {
        monthLabel.style.color = "hsl(0, 100%, 67%)"
        birthMonthError.innerText ="Must be a valid month"
        setTimeout(()=>{
            monthLabel.style.color = ""
            birthMonthError.innerText = ""
           },2000)
    } else if(month.value === ""){
        monthLabel.style.color = "hsl(0, 100%, 67%)"
        birthMonthError.innerText ="This field is required"
        setTimeout(()=>{
            monthLabel.style.color = ""
            birthMonthError.innerText = ""
           },2000)
    }
 return validateYear()
}

function validateYear (){
    if (year.value > new Date().getFullYear()){
        yearLabel.style.color = "hsl(0, 100%, 67%)"
        birthYearError.innerText = "Must be in the past"
        setTimeout(()=>{
           yearLabel.style.color = ""
            birthYearError.innerText = ""
           },2000)
    } else if(year.value === ""){
        yearLabel.style.color = "hsl(0, 100%, 67%)"
        birthYearError.innerText = "This field is required"
        setTimeout(()=>{
            yearLabel.style.color = ""
             birthYearError.innerText = ""
            },2000)
    }
    age()
}




function previousMonth (currentMonth){
if (currentMonth === 1){ 
    return 31;
} else if(currentMonth === 2){
    return 31;
} else if (currentMonth === 3){
    return 29;
} else if( currentMonth === 4){
    return 31
} else if(currentMonth === 5){
    return 30;
} else if(currentMonth === 6){
    return 31
} else if (currentMonth === 7){
    return 30
} else if (currentMonth === 8){
    return 31
} else if(currentMonth === 9){
    return 31
} else if(currentMonth === 10){
    return 30
} else if(currentMonth === 11){
    return 31
} else if(currentMonth === 12){
    return 30
}
}


function age(){ 
    const today = new Date()
    const currentMonth = today.getMonth() + 1;
    const currentDay = today.getDate();
    const currentYear = today.getFullYear()
    const birthYear = year.value;
    const birthMonth = month.value;
    const birthDay = day.value

    inValidDates.forEach((arr)=>{
        const stringMonth = month.value.toString()
        const stringDay = day.value.toString()
    
        if (stringMonth === arr[0] && stringDay > arr[1]){
            dayLabel.style.color = "hsl(0, 100%, 67%)"
            birthdayError.innerText = "Must be a valid date"
            setTimeout(()=>{
                dayLabel.style.color = ""
                birthdayError.innerText = ""
               },2000)
        }
    })

    let  yearsOld = currentYear - birthYear
    let monthsOld = currentMonth - birthMonth;
    let daysOld = currentDay - birthDay;

    if(currentMonth < birthMonth  ){
        yearsOld -= 1
        monthsOld = currentMonth + 12 - birthMonth ;
        if(currentDay < birthDay){
            monthsOld = currentMonth + 12 - birthMonth -1
            daysOld = currentDay - birthDay + previousMonth(currentMonth)
        }
    }
numberOfYears.innerText = yearsOld;
numberOfMonths.innerText = monthsOld;
numberOfDays.innerText = daysOld;
}




arrowBtn.addEventListener("click", ()=>{
validateBirthDate() 
// age()
setTimeout(()=>{
    day.value = ""
    month.value = ""
    year.value = ""
},4000)

})






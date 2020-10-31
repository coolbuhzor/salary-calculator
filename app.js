//step 1 i defined the variables below
let fname, hour, salary, xtrahour, overtime, totalSalary


// step 2 i added an event listener to the submit button
document.querySelector('#submit').addEventListener('click', function(){
    // step 3 stored the input data for name inside a variable
    fname =  document.querySelector('#fname').value
console.log(fname);

    // no of hours
// step 4 i stored theinput data fr hur inside a variable and made sure its a number.
    hour =  document.querySelector('#work-hour').value
    if (isNaN(hour)) {
        // step 5 i made sure t return an errr message if the variable is not a number
        console.log('enter number');
      return 'ERRORR!!! Enter A Number';

// step 5 i made sure hurs wuld not exceed four hence an error message
    } else if (hour > 4) {

        console.log('number of hours can not be more than 4');
return 'You cant work for more than four hours'
        //step 6 the calculation of hour and salary
    } else {
        hour  = (hour*1000)
        salary = hour*30
        status = true
        console.log(salary);}

// overtime calculation

// step 7 similar to the above step
    xtrahour =  document.querySelector('#extra-time').value
    if (isNaN(xtrahour)) {
console.log('enter a number');
return 'Enter A Number'
    } else if (xtrahour > 19) {
        totalSalary = 'Extra Hour Per day can not be above 19 hours'
//return 'Extra Hour Per day can not be above 19 '
    } else{
        xtrahour  = (xtrahour*200)
        overtime = xtrahour*30
        console.log(overtime);
    
    }
// step 8 i added both the salary and over time together
    totalSalary = (salary + overtime)

    console.log(totalSalary);
// step 9 this is where i manipulated the DOM
    document.querySelector('#hour-pay-result').textContent = ` Total Hour Pay: #${salary} `
    document.querySelector('#extra-pay-result').textContent = ` Extra Pay: #${overtime}`
    document.querySelector('#total-payment-result').textContent = ` Total Salary: #${totalSalary}`
    document.querySelector('#final-text').textContent = `${fname} Thanks and have a nice day.`

})




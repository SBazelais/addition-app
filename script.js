
//variable
let option;
let result;
let userName = "";


//query selectors
let message = document.querySelector('.welcome-message');
let displayResult = document.querySelector('.display-result');
let lastMessage = document.querySelector('.last-message');


//welcome message
alert('Welcome to Simple Addition Application.\nOur application will add two input numbers and return the result');
userName = prompt("Please enter your name");


//confirming useruserName was entered
while(userName == "") {
    userName = prompt('Please enter your name to proceed');
}
alert('Welcome ' + userName);


//OPTION LOOP
do {
    // first number input and validation
    let firstNum = parseFloat(prompt('Please enter a  first number: '));
    while ( isNaN(firstNum)) {
    firstNum = parseFloat(prompt('Please input your first number to proceed: '));
    }

    // second number input and validation
    let secondNum = parseFloat(prompt('Please enter a  second number: '));
    while( isNaN(secondNum)) {
        secondNum = parseFloat(prompt('Please enter your second number to proceed: '));
    }
    
    //adding function and function call
    let adding = ( first, second) => {
        return first + second;
    };
    result = adding(firstNum, secondNum);
    
    //user display message
    if (result > 10 ) {
        alert('Your result is: ' + result + '\nTHIS IS A BIG NUMBER');
    } else {
        alert('Your result is: ' + result + '\nthis is a small number');
    }
    
    //
    option = prompt('Press Y to try add two other numbers.\nOr N to quit');
  
} while(option.toLowerCase() !== 'n');

//page display message
displayResult.textContent = 'Your last result was ' + result;
message.textContent = "Thank you " + userName + " for using our app";
lastMessage.textContent = "Please visit us again";

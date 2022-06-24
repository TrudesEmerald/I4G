
var firstNum = window.prompt("Enter first number");
var secondNum= window.prompt("Enter second number");
var operator = window.prompt("Enter operator");

function calculate ( ){
    if ( operator == "+" ) {
        var add = parseInt(firstNum ) + parseInt(secondNum );
    alert(firstNum + ' + ' +  secondNum +' = ' + add) ;
    }

    else if( operator == "*") {
        var multiply= parseInt(firstNum) * parseInt(secondNum);
        alert(firstNum + ' * ' + secondNum + ' = ' + multiply );
    }

    
    else if( operator == "-") {
        var subtract= parseInt(firstNum) - parseInt(secondNum);
        alert(firstNum + ' - ' + secondNum + ' = ' + subtract );

     }    
    
    else if( operator == "/") {
        var divide= parseInt(firstNum) / parseInt(secondNum);
        alert(firstNum + ' / ' + secondNum + ' = ' + divide );

     }

        else{
            alert(operator + " is not a valid operator, enter a different one!!!");
        }
}

calculate();
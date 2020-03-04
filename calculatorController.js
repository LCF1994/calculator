class calculatorController{

    constructor(segmentsArr){

        this._display = new Display(segmentsArr);
        this._firstNumber = 0;
        this._secondNumber = 0;
        this._result = 0;
        this._toggleNumber = false;
        this._operation = null;
        this._signal = 11;

        this._displayNumber = null;
        this._displayNumberArray = [11,11,11,11,11,11,11];

        this._render();
    }

    inputNumber(value){

        /* Responsability:
            append to first or second number the buttom pressed 
        */

        /* Refactered code -> check toggle and append new number into first or second number */
        this._toggleNumber ? this._appendNumber(this._secondNumber,value) : this._appendNumber(this._firstNumber,value);

        console.log("first = " + this._firstNumber);
        console.log("second = " + this._secondNumber);

        this._lengthCheck();
    }

    _appendNumber(number, value){
        number = ( number * 10 ) + parseInt( value, 10);
        this._displayNumber = number;
        this._toggleNumber ? this._secondNumber = number : this._firstNumber = number;
    }


    _lengthCheck(){
        console.log('lenghtCheck');
        this._displayNumber.toString().length == 7 ? this._lengthEight() : this._lenghthWrong(this._displayNumber.toString().length);

        this._render();
    }   


    _lengthEight(){
        console.log("_lenght == 7");
        // Transform value into a string, create an Array, convert each element to number and add signal at beggining ( blank or - )
        this._displayNumberArray = Array.from(this._displayNumber.toString()).map(i=>parseInt(i,10));
    }


    _lenghthWrong(length){
        length > 7 ? this._renderError() : this._lenghtSmall() ;
    }


    _lenghtSmall(){
        console.log("_lenghthWrong < 7");
        let incompleteArray = Array.from(this._displayNumber.toString()).map(i=>parseInt(i,10)).reverse();
        this._displayNumberArray.forEach( (digit,i) => {
            /* Refactered code -> Check if the current input fits to display  */
            i < incompleteArray.length ? this._displayNumberArray[i] = incompleteArray[i] : this._displayNumberArray[i] = 11;
        });
        console.log(this._displayNumberArray);

        this._displayNumberArray = this._displayNumberArray.reverse();
    }


    inputClear(){
        /* Responsability:
            remove last digit from first number or second number
        */

        console.log("inputClear  says :  displayNumber = " + this._displayNumber);
        console.log("inputClear  says :  displayNumberArray = " + this._displayNumberArray);

        this._displayNumber == null ? console.log("Display already blanked") :  this._removeLast();
        
    }

    _removeLast(){
        /* Responsability:
            check if display is showing more then one digit. 
            True : Redirect to 'Number
        */
        console.log("removeLast");

        this._displayNumber > 9 ? this._removeLastAndKeepTheRest() : this._clearNumber() ;
    }

    _clearNumber(){
        console.log("clearNumber")
        this._toggleNumber ? this._secondNumber = 0 : this._firstNumber = 0 ;
        this._displayNumber = null; 
        this._displayNumberArray = [11,11,11,11,11,11,11];

        this._render();
    }

    _removeLastAndKeepTheRest(){

        console.log("removeLastAndKeepTheRest")
        let value = null;
        this._toggleNumber ?  value = this._secondNumber : value = this._firstNumber; 

        value = ( ( value - ( value % 10 ) ) / 10);

        this._toggleNumber ?  this._secondNumber = value : this._firstNumber = value; 
        this._displayNumber = value;

        this._lengthCheck();
    }


    inputOperator(value){

        this._operation == null ? this._toggleNumber = true : null;
        console.log(this._toggleNumber);

        this._operation = value;
    }

    showResult(){
        this._calculate();                                          // Call calculation method
        this._checkSignal();                                        // Check if it's below ZERO

        this._result == null ? this._renderError() : null;          // Lookup for Errors in calculation's returns 
                                                
        this._moveResultToFirst();                                  // Save result as firstNumber

        console.log("result = " + this._result)
        this._lengthCheck();                                        // Check length and render
    }

    _calculate(){

        const operatorHandler = {
            div(number1, number2){
                console.log("calculate div");
                if (number2 ==0 ){
                    console.log("Dividing by ZERO is not possible");
                    return null;
                } else {
                    return parseInt( number1 / number2 );
                }                
            },
            mul(number1, number2){
                console.log("calculate mul");
                return parseInt( number1 * number2 ); 
            },
            sub(number1, number2){
                console.log("calculate sub");
                return parseInt( number1 - number2 ); 
            },
            add(number1, number2){
                console.log("calculate add");
                return parseInt( number1 + number2 ); 
            }
        }

       
        this._result = operatorHandler[this._operation](this._firstNumber, this._secondNumber);
    }

    _checkSignal(){
        /*
        Check if result is lower than Zero
        True  : signal = 12  ->  segment print " - "
        False : signal = 11  ->  segment print "   "
        */
        if ( this._result < 0 ) { 
            this._signal = 12; 
            this._result *= -1; 
        } else {
            this._signal = 11;
        }
    }

    _moveResultToFirst(){
        /* Move result to display */
        this._displayNumber = this._result;

        /* Reset operator, save result into firstNumber, reset secondNumber */
        this._operation = null;
        this._signal == 12 ? this._firstNumber = ( this._result * -1 ): this._firstNumber = this._result;
        this._toggleNumber = false;
        this._secondNumber = 0;
    }

    changeSignal(){
        /* Invert current's number signal */
        this._toggleNumber ? this._secondNumber *= -1 : this._firstNumber *= -1 ;
        
        /* Change Signal  */
        this._signal == 11 ? this._signal = 12 : this._signal = 11;

        /* Render */
        this._render();
    }


    _renderError(){
        console.log("renderError");
        this._signal = 10;
        this._displayNumberArray = [11,11,11,11,11,11,11];
        this._render();
    }

    _render(){
        console.log("rendering ... ");
        console.log("signal = " + this._signal);
        console.log("displayNumberArray = " + this._displayNumberArray);
        this._display.update(this._displayNumberArray, this._signal);
    }

}
class Calculator {
    constructor(){
        this.currentNumber = ''
        this.previusNumber = ''

        this.dot= false
        this.dotSize = 0

        this.memory = ''
    }

    inputNumber(value){
        value = parseInt(value)
        this.dot ? this._appendDecimalDigit(value) : this._appendDigit(value)
        return this.currentNumber
    }

    _appendDigit(number){
        this.currentNumber == '' ?
            this.currentNumber = number : 
            this.currentNumber = ( this.currentNumber * 10 ) + number
    }
    
    _appendDecimalDigit(number){
        if (this.currentNumber == '')  {
            this.currentNumber = 0 + (number / 10) 
        }
        else {
            this.dotSize += 1
            this.currentNumber += ( number / Math.pow(10, this.dotSize) )
        }
    }
    
    setDot(){
        this.dot = true
        this.currentNumber += .0 
    }

    //reset dot will be performed internaly

    clear(){
        this.currentNumber = ''
        this.dot = false
        return ''
    }

}

function calculatorFactory() {
    return new Calculator()
}
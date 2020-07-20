class Calculator {
    constructor(){
        this.currentNumber = ''
        this.previusNumber = ''

        this.arithmetics = ''

        this.dot= false
        this.dotSize = 0

        this.memory = ''

        this.ARITHMETICS = { 
            '+' : (n1, n2) => { return n1 + n2 },
            '-' : (n1, n2) => { return n1 - n2 },
            '*' : (n1, n2) => { return n1 * n2 },
            '/' : (n1, n2) => { return n1 / n2 } 
        }
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
            parseFloat( this.currentNumber )
            this.currentNumber += ( number / Math.pow(10, this.dotSize) )
        }
    }
    
    setDot(){
        this.dot = true
        this.currentNumber += .0 
    }

    _calc(value){
        return this.ARITHMETICS[value](this.previusNumber, this.currentNumber)
    }

    inputArithmatics(value){
        this.arithmetics = value

        this.previusNumber == '' ? 
        this.previusNumber = this.currentNumber :
        this.previusNumber = this._calc(value)  

        this.currentNumber = ''
        this.dot = false
    }

    result(){
        if ( this.previusNumber != '' ) {
            this.previusNumber = this._calc(this.arithmetics)   
            this.dot = false
        }
    }

    invert(){
        this.currentNumber *= -1
    }

    clear(){
        this.currentNumber = ''
        this.dot = false
        return ''
    }

    reset(){
        this.clear()
        this.previusNumber = ''
        return this.reset
    }

}

function calculatorFactory() {
    return new Calculator()
}
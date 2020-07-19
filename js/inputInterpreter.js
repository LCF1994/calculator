function buttonListener(value){
    interpreter(value)
}

function keyboardListener(key) {
    interpreter(key)
}

function interpreter(value) {
    if ( value == 't' ) { changeTheme() }

    if ( /[0-9]/.exec(value) ) { 
        calculatorDisplay.write(CPU.inputNumber(value)) 
    }

    if ( value == '.' | value == ',' ) { CPU.setDot() }
    
    if ( value == '+' |  value == '-' | value == '*' |  value == '/' ) {
         CPU.inputArithmatics(value) 
         calculatorDisplay.write(CPU.previusNumber)
        }

    if ( value == '=' | value == 'Enter' ) { 
        CPU.result()
        calculatorDisplay.write(CPU.previusNumber)
    }

    if ( value == 'inv' ) { console.log('inv pressed') }
    
    if ( value == 'c' | value == 'Backspace' | value == 'clear' ) { 
        calculatorDisplay.write(CPU.clear()) 
    }

    if ( value == 'C' | value == 'Escape' | value == 'reset' ) {
        CPU.reset()
        calculatorDisplay.clear()
         //console.log('reset pressed') 
        }    

}

document.addEventListener('keydown', event => { keyboardListener(event.key) })


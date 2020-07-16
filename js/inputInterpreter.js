function buttonListener(value){
    interpreter(value)
}

function keyboardListener(key) {
    interpreter(key)
}

function interpreter(value) {
    if ( value == 't' ) { changeTheme() }

    if ( /[0-9]/.exec(value) ) { calculatorDisplay.write(CPU.inputNumber(value)) }

    if ( value == '.' | value == ',' ) { CPU.setDot() }
    
    if ( value == '+' ) { console.log('add pressed') }
    if ( value == '-' ) { console.log('sub pressed') }
    if ( value == '*' ) { console.log('mul pressed') }
    if ( value == '/' ) { console.log('div pressed') }

    if ( value == '=' | value == 'Enter' ) { console.log('result pressed') }
    
    if ( value == 'c' | value == 'Backspace' | value == 'clear' ) { calculatorDisplay.write(CPU.clear()) }
    if ( value == 'C' | value == 'Escape' | value == 'reset' ) { console.log('reset pressed') }    

}

document.addEventListener('keydown', event => { keyboardListener(event.key) })


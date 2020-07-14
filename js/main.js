
function buttonListener(value){
    return { value, type : typeof value }
}

function keyboardListener(value) {
    console.log(value)
    return 'Not Implemented'
}

function interpreter(number) {
    
}

document.addEventListener('keydown', key => { keyboardListener(key) })

const display = document.getElementsByClassName('digit')
const calculatorDisplay = displayFactory(display)

/* Clear display */
calculatorDisplay.clear()

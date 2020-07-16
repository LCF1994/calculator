function changeTheme(){
    const styleSheet = document.getElementById("stylesheet")
    
    if (styleSheet.getAttribute('href') == "styles/classic.css"){
        styleSheet.setAttribute("href", 'styles/light.css')
        calculatorDisplay.changeSegmentColour('dodgeblue')
    }
    else{
        styleSheet.setAttribute("href", 'styles/classic.css')
        calculatorDisplay.changeSegmentColour('#003200')
    }
}

function buttonListener(value){
    return { value, type : typeof value }
}

function keyboardListener(key) {
    console.log(key)

    if ( key == 't' ) { changeTheme() }
}

function interpreter(number) {
    
}

document.addEventListener('keydown', event => { keyboardListener(event.key) })



const display = document.getElementsByClassName('digit')
const calculatorDisplay = displayFactory(display)
const CPU = calculatorFactory()

/* Clear display */
calculatorDisplay.clear()


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
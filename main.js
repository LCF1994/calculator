/* Cleaning Part*/
segments.forEach(element => element.style.background = "blanchedalmond");
comas.forEach(element => element.style.background = "blanchedalmond");

/* Converting object into Array */
const segmentsArr = Array.from(segments);

/*Intanciating Main Controller */
const calculator = new calculatorController(segmentsArr);

/* Adding an Event Listener in oder to capture Keyboard keys when pressed */
document.addEventListener("keypress", KeyboardEvent => console.log(KeyboardEvent.key));
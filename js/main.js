
// Listing digits
const display = document.getElementsByClassName('digit')
// Creating an Array from display
const displayArr = Array.from(display) 


/* Funciton: define_segments

inputs:
    - target : digit which state will be applied
    - state  : desired state for digit
    - dot    : parameter used to inform dot's activeness

expected: 
    - target : Div Element with digit svg child
    - state  : [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, E, r, o, -, null ]
    - dot    : [ True, False ]
*/
function define_segments(target, state=null, dot=false) {
    /* Segments map declaration */
    const valid_keys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'E', 'r', 'o', '-']    
    const SEGMENT_INDEX = {
        // 0 = 1,2,3,5,6,7
        '0': [
            'transparent',  
            'dodgerblue',   
            'dodgerblue',   
            'dodgerblue',   
            'transparent',   
            'dodgerblue',  
            'dodgerblue',   
            'dodgerblue' 
        ],
        // 1 = 2,5
        '1': [
            'transparent',  
            'transparent',   
            'dodgerblue',   
            'transparent',   
            'transparent',   
            'dodgerblue',  
            'transparent',   
            'transparent' 
        ],
        // 2 = 1,3,4,5,7
        '2': [
            'transparent',  
            'dodgerblue',   
            'transparent',   
            'dodgerblue',   
            'dodgerblue',   
            'dodgerblue',  
            'transparent',   
            'dodgerblue' 
        ],
        
        // 3 = 1,2,4,5,7
        '3': [
            'transparent',  
            'dodgerblue',   
            'dodgerblue',   
            'transparent',   
            'dodgerblue',   
            'dodgerblue',  
            'transparent',   
            'dodgerblue' 
        ],
        // 4 = 2,4,5,6
        '4': [
            'transparent',  
            'transparent',   
            'dodgerblue',   
            'transparent',   
            'dodgerblue',   
            'dodgerblue',  
            'dodgerblue',   
            'transparent' 
        ],
        // 5 = 1,3,4,5,7
        '5': [
            'transparent',  
            'dodgerblue',   
            'dodgerblue',   
            'transparent',   
            'dodgerblue',   
            'transparent',   
            'dodgerblue',  
            'dodgerblue' 
        ],
        // 6 = 1,2,3,4,6,7
        '6': [
            'transparent',  
            'dodgerblue',   
            'dodgerblue',   
            'dodgerblue',   
            'dodgerblue',   
            'transparent',  
            'dodgerblue',   
            'dodgerblue' 
        ],
        // 7 = 2,5,7
        '7': [
            'transparent',  
            'transparent',   
            'dodgerblue',   
            'transparent',   
            'transparent',   
            'dodgerblue',  
            'transparent',   
            'dodgerblue' 
        ],
        // 8 = 1,2,3,4,5,6,7
        '8': [
            'transparent',  
            'dodgerblue',   
            'dodgerblue',   
            'dodgerblue',   
            'dodgerblue',   
            'dodgerblue',  
            'dodgerblue',   
            'dodgerblue' 
        ],
        // 9 = 1,2,4,5,6,7
        '9': [
            'transparent',  
            'dodgerblue',   
            'dodgerblue',   
            'transparent',   
            'dodgerblue',   
            'dodgerblue',  
            'dodgerblue',   
            'dodgerblue' 
        ],
        // E = 1,3,4,6,7
        'E': [
            'transparent',  
            'dodgerblue',   
            'transparent',   
            'dodgerblue',   
            'dodgerblue',   
            'transparent',  
            'dodgerblue',   
            'dodgerblue' 
        ],
        // r = 3,4
        'r': [
            'transparent',  
            'transparent',   
            'transparent',   
            'dodgerblue',   
            'dodgerblue',   
            'transparent',  
            'transparent',   
            'transparent' 
        ],
        // o = 1,2,3,4
        'o': [
            'transparent',  
            'dodgerblue',   
            'dodgerblue',   
            'dodgerblue',   
            'dodgerblue',   
            'transparent',  
            'transparent',   
            'transparent' 
        ],
        // - = 4
        '-': [
            'transparent',  
            'transparent',   
            'transparent',   
            'transparent',   
            'dodgerblue', 
            'transparent',   
            'transparent',  
            'transparent'   
        ]
    }

    // Select all segments from target
    let segments = target.querySelectorAll('path')

    /* Clear digit */
    segments.forEach(segment => {
        segment.style.fill = "transparent"
        segment.style.stroke = "transparent"
    });

    /* Setting digit with state received */
    if (state != null){
        const key = state.toString()

        if (valid_keys.includes(key)){
            segments.forEach((segment,i)=>{
                segment.style.fill = SEGMENT_INDEX[key][i]
            });
         }
    }

    /* define if dot will be active or not */
    // set dot as blue
    if (dot) {      
        segments[0].style.fill = "dodgerblue"
        //segments[0].style.stroke = "deepskyblue"
    }
    
    // No return

} // End function define_segments

/* Function: display_input

info 
info
info

*/
function display_input(input='', target=displayArr) {
    // Verify if display length fits input received 
    if (input.length > target.length){
        // Display 'Error' for visual feedback
        input = 'Error'

        target.forEach((digit, i)=>{
            define_segments(digit, input[i])
        });

        // throw an error at console with more info
        throw console.error(`Invalid input lenght. Max lenght: ${target.length}`);    
    }

    // Display input received
    target.forEach((digit, i)=>{
        define_segments(digit, input[i])
    });
    
    // No return

} // End Function display_input

/* Clear display */
display_input()
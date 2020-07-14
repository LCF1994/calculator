class Display{
    constructor(target){
        this.target = Array.from(target)
        this.onLoadMessage = ''
        this.segmentColourOn = 'dodgerblue'
        this.segmentColourOff = 'transparent'

        this.valid_keys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'E', 'r', 'o', '-']
        this.SEGMENT_INDEX = {
            // 0 = 1,2,3,5,6,7
            '0': [
                this.segmentColourOff,  
                this.segmentColourOn,   
                this.segmentColourOn,   
                this.segmentColourOn,   
                this.segmentColourOff,   
                this.segmentColourOn,  
                this.segmentColourOn,   
                this.segmentColourOn 
            ],
            // 1 = 2,5
            '1': [
                this.segmentColourOff,  
                this.segmentColourOff,   
                this.segmentColourOn,   
                this.segmentColourOff,   
                this.segmentColourOff,   
                this.segmentColourOn,  
                this.segmentColourOff,   
                this.segmentColourOff 
            ],
            // 2 = 1,3,4,5,7
            '2': [
                this.segmentColourOff,  
                this.segmentColourOn,   
                this.segmentColourOff,   
                this.segmentColourOn,   
                this.segmentColourOn,   
                this.segmentColourOn,  
                this.segmentColourOff,   
                this.segmentColourOn 
            ],
            
            // 3 = 1,2,4,5,7
            '3': [
                this.segmentColourOff,  
                this.segmentColourOn,   
                this.segmentColourOn,   
                this.segmentColourOff,   
                this.segmentColourOn,   
                this.segmentColourOn,  
                this.segmentColourOff,   
                this.segmentColourOn 
            ],
            // 4 = 2,4,5,6
            '4': [
                this.segmentColourOff,  
                this.segmentColourOff,   
                this.segmentColourOn,   
                this.segmentColourOff,   
                this.segmentColourOn,   
                this.segmentColourOn,  
                this.segmentColourOn,   
                this.segmentColourOff 
            ],
            // 5 = 1,3,4,5,7
            '5': [
                this.segmentColourOff,  
                this.segmentColourOn,   
                this.segmentColourOn,   
                this.segmentColourOff,   
                this.segmentColourOn,   
                this.segmentColourOff,   
                this.segmentColourOn,  
                this.segmentColourOn 
            ],
            // 6 = 1,2,3,4,6,7
            '6': [
                this.segmentColourOff,  
                this.segmentColourOn,   
                this.segmentColourOn,   
                this.segmentColourOn,   
                this.segmentColourOn,   
                this.segmentColourOff,  
                this.segmentColourOn,   
                this.segmentColourOn 
            ],
            // 7 = 2,5,7
            '7': [
                this.segmentColourOff,  
                this.segmentColourOff,   
                this.segmentColourOn,   
                this.segmentColourOff,   
                this.segmentColourOff,   
                this.segmentColourOn,  
                this.segmentColourOff,   
                this.segmentColourOn 
            ],
            // 8 = 1,2,3,4,5,6,7
            '8': [
                this.segmentColourOff,  
                this.segmentColourOn,   
                this.segmentColourOn,   
                this.segmentColourOn,   
                this.segmentColourOn,   
                this.segmentColourOn,  
                this.segmentColourOn,   
                this.segmentColourOn 
            ],
            // 9 = 1,2,4,5,6,7
            '9': [
                this.segmentColourOff,  
                this.segmentColourOn,   
                this.segmentColourOn,   
                this.segmentColourOff,   
                this.segmentColourOn,   
                this.segmentColourOn,  
                this.segmentColourOn,   
                this.segmentColourOn 
            ],
            // E = 1,3,4,6,7
            'E': [
                this.segmentColourOff,  
                this.segmentColourOn,   
                this.segmentColourOff,   
                this.segmentColourOn,   
                this.segmentColourOn,   
                this.segmentColourOff,  
                this.segmentColourOn,   
                this.segmentColourOn 
            ],
            // r = 3,4
            'r': [
                this.segmentColourOff,  
                this.segmentColourOff,   
                this.segmentColourOff,   
                this.segmentColourOn,   
                this.segmentColourOn,   
                this.segmentColourOff,  
                this.segmentColourOff,   
                this.segmentColourOff 
            ],
            // o = 1,2,3,4
            'o': [
                this.segmentColourOff,  
                this.segmentColourOn,   
                this.segmentColourOn,   
                this.segmentColourOn,   
                this.segmentColourOn,   
                this.segmentColourOff,  
                this.segmentColourOff,   
                this.segmentColourOff 
            ],
            // - = 4
            '-': [
                this.segmentColourOff,  
                this.segmentColourOff,   
                this.segmentColourOff,   
                this.segmentColourOff,   
                this.segmentColourOn, 
                this.segmentColourOff,   
                this.segmentColourOff,  
                this.segmentColourOff   
            ]
        }
    }

    _writeError() {
        this.write('Error')
    }

    clear(){
        this.write('')
    }

    write(input){
        let inputTreated = this._inputTreatment(input)
        this._checkLength(inputTreated)
        this._writeSegments(inputTreated)
    }

    _inputTreatment(input){
        const arrValue = Array.from(input.toString())
        const value = arrValue.filter(value => {return value != '.'})

        const dotPosition = arrValue.findIndex(value => {return value == '.'})
        let dotMask = value.map( _ => {return false})

        dotMask[dotPosition - 1] = true

        return {
            value,
            dotMask
        }
    }

    _checkLength(input){
        if (input.value.length > this.target.length){
            this._writeError()

            // throw an error at console with more info
            throw new Error(`Invalid input lenght. Max lenght: ${this.target.length}`)
        }
    }

    _writeSegments(input){
        this.target.forEach((digit, i)=>{
            
            this._define_segments(digit, input.value[i], input.dotMask[i])
        })
    }

    _define_segments(target, state=null, dot=false) {
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

        // Select all segments from target
        const segments = target.querySelectorAll('path')
    
        /* Clear digit */
        segments.forEach(segment => {
            segment.style.fill = this.segmentColourOff
            segment.style.stroke = this.segmentColourOff
        });
    
        /* Setting digit with state received */
        if (state != null){
            const key = state.toString()
    
            if (this.valid_keys.includes(key)){
                segments.forEach((segment,i)=>{
                    segment.style.fill = this.SEGMENT_INDEX[key][i]
                });
             }
        }
    
        /* define if dot will be active or not */
        // set dot as blue
        if (dot) {      
            segments[0].style.fill = this.segmentColourOn
        }
        
        // No return
    
    } // End function define_segments
}

function displayFactory(target) {
    return new Display(target)
}

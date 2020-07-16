class Display{
    constructor(target, digitColour='dodgerblue'){
        this.target = Array.from(target)
        
        this.onLoadMessage = ''
        this.segmentColourOn = digitColour
        this.segmentColourOff = 'transparent'

        this.valid_keys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'E', 'r', 'o', '-']
        this.segment_index = {
            // 0 = 1,2,3,5,6,7
            '0': [
                false,  
                true,   
                true,   
                true,   
                false,   
                true,  
                true,   
                true 
            ],
            // 1 = 2,5
            '1': [
                false,  
                false,   
                true,   
                false,   
                false,   
                true,  
                false,   
                false 
            ],
            // 2 = 1,3,4,5,7
            '2': [
                false,  
                true,   
                false,   
                true,   
                true,   
                true,  
                false,   
                true 
            ],
            
            // 3 = 1,2,4,5,7
            '3': [
                false,  
                true,   
                true,   
                false,   
                true,   
                true,  
                false,   
                true 
            ],
            // 4 = 2,4,5,6
            '4': [
                false,  
                false,   
                true,   
                false,   
                true,   
                true,  
                true,   
                false 
            ],
            // 5 = 1,3,4,5,7
            '5': [
                false,  
                true,   
                true,   
                false,   
                true,   
                false,   
                true,  
                true 
            ],
            // 6 = 1,2,3,4,6,7
            '6': [
                false,  
                true,   
                true,   
                true,   
                true,   
                false,  
                true,   
                true 
            ],
            // 7 = 2,5,7
            '7': [
                false,  
                false,   
                true,   
                false,   
                false,   
                true,  
                false,   
                true 
            ],
            // 8 = 1,2,3,4,5,6,7
            '8': [
                false,  
                true,   
                true,   
                true,   
                true,   
                true,  
                true,   
                true 
            ],
            // 9 = 1,2,4,5,6,7
            '9': [
                false,  
                true,   
                true,   
                false,   
                true,   
                true,  
                true,   
                true 
            ],
            // E = 1,3,4,6,7
            'E': [
                false,  
                true,   
                false,   
                true,   
                true,   
                false,  
                true,   
                true 
            ],
            // r = 3,4
            'r': [
                false,  
                false,   
                false,   
                true,   
                true,   
                false,  
                false,   
                false 
            ],
            // o = 1,2,3,4
            'o': [
                false,  
                true,   
                true,   
                true,   
                true,   
                false,  
                false,   
                false 
            ],
            // - = 4
            '-': [
                false,  
                false,   
                false,   
                false,   
                true, 
                false,   
                false,  
                false   
            ]
        }
    }

    changeSegmentColour(colour){
        this.segmentColourOn = colour
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
        console.log(typeof this.segmentColourOn)
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

    _clearSegments(segments){
        segments.forEach(segment => {
            segment.style.fill = this.segmentColourOff
            segment.style.stroke = this.segmentColourOff
        });
    }

    _setDot(segments, dot){
        segments[0].style.fill = dot ? this.segmentColourOn : this.segmentColourOff
    }

    _checkInputValit(value){
        return this.valid_keys.includes(value)
    }
    
    _fillSegments(segments, key){
        segments.forEach((segment,i)=>{
            segment.style.fill = this.segment_index[key][i] ? this.segmentColourOn : this.segmentColourOff
        }) 
    }
    
    _define_segments(digit, state='', dot=false) {
        const segments = digit.querySelectorAll('path')
        const key = state.toString()
    
        this._clearSegments(segments)

        this._checkInputValit(key) ? this._fillSegments(segments, key) : null
        
        this._setDot(segments, dot)
    
    } // End function define_segments
}

function displayFactory(target) {
    return new Display(target)
}

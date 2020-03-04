class Display{

    constructor(segmentsArr){

        this._signal = new Digit(segmentsArr.slice(0, 7))
        this._digits = [
                        new Digit(segmentsArr.slice(7, 14)),
                        new Digit(segmentsArr.slice(14, 21)),
                        new Digit(segmentsArr.slice(21, 28)),
                        new Digit(segmentsArr.slice(28, 35)),
                        new Digit(segmentsArr.slice(35, 42)),
                        new Digit(segmentsArr.slice(42, 49)),
                        new Digit(segmentsArr.slice(49, 56)),
                        ]

    }

    update(array, signal){
        /* Update digits */
        this._digits.forEach((digit,i) => {
            digit.updateView(array[i]);
        } );
        
        /* Update Signal or Error */
        this._signal.updateView(signal); 
    }
}
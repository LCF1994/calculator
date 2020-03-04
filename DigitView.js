class Digit {
    constructor(segmentsArray) {

        if (segmentsArray.length != 7) {
            throw new Error("invalid Array received");
        }

        this._segments = segmentsArray;
        this.value = 11;
    }

    updateView(value){

        let code = [
            ["black","black","black","blanchedalmond","black","black","black"],
            ["blanchedalmond","blanchedalmond","black","blanchedalmond","blanchedalmond","black","blanchedalmond"],
            ["black","blanchedalmond","black","black","black","blanchedalmond","black"],
            ["black","blanchedalmond","black","black","blanchedalmond","black","black"],
            ["blanchedalmond","black","black","black","blanchedalmond","black","blanchedalmond"],
            ["black","black","blanchedalmond","black","blanchedalmond","black","black"],
            ["black","black","blanchedalmond","black","black","black","black"],
            ["black","blanchedalmond","black","blanchedalmond","blanchedalmond","black","blanchedalmond"],
            ["black","black","black","black","black","black","black"],
            ["black","black","black","black","blanchedalmond","black","black"],
            ["black","black","blanchedalmond","black","black","blanchedalmond","black"],
            ["blanchedalmond","blanchedalmond","blanchedalmond","blanchedalmond","blanchedalmond","blanchedalmond","blanchedalmond","blanchedalmond"],
            ["blanchedalmond","blanchedalmond","blanchedalmond","black","blanchedalmond","blanchedalmond","blanchedalmond","blanchedalmond"]
        ];

        this._segments.forEach((segment, index) => {
            segment.style.background = code[value][index];
        });

    }
}
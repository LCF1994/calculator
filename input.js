class inputHandler{

    constructor(){
        throw new Error ("inputHandler can not be instantiated");
    }

    static numberClick(value){
        console.log(value);

        calculator.inputNumber(value);
    }

    static dotClick(){
        console.log("dot");
    }

    static clearClick(){
        console.log("clear");

        calculator.inputClear();
    }

    static resetClick(){
        location.reload();
    }

    static operatorClick(value){
        console.log(value);

        calculator.inputOperator(value);
    }

    static resultClick(){
        calculator.showResult();
    }

    static inverterClick(){
        calculator.changeSignal();
    }
}
import {Fractions, MatrixFraction, MatrixNumber, MatrixString} from '../lu-decomposition/lu-decomposition.component';
import {EventEmitter} from '@angular/core';

type EventData = {
    action: 'RequestParamForInfCase' | 'DisplayStep' | 'StopNoSolution' | 'DisplaySolution',
    msg: string,
    value: MatrixFraction | number | Fractions | MatrixString;
    requestMat?: MatrixString;
};

export class DisplayItem {
    action: 'RequestParamForInfCase' | 'DisplayStep' | 'StopNoSolution' | 'DisplaySolution';
    msg: string;
    value: MatrixFraction | number | Fractions | MatrixString;
    inputParameter: number;
    inputParameterSubmited = false;
    requestMat?: MatrixString = null;

    constructor(value: EventData) {
        this.action = value.action;
        this.msg = value.msg;
        if (value.value instanceof MatrixFraction) {
            this.value = value.value.clone();
        } else if (value.value instanceof MatrixFraction) {
            this.value = value.value.clone();
        } else {
            this.value = value.value;
        }
        this.requestMat = value.requestMat;
    }

    isMatrix() {
        return this.value instanceof MatrixFraction;
    }

    isFractions() {
        return this.value instanceof Fractions;
    }

    isNumber() {
        return typeof this.value === 'number';
    }
}

export class LuDecompService {

    event: EventEmitter<EventData> = new EventEmitter<EventData>();


    fractionZero: Fractions = new Fractions(0, 1);
    fractionInput: Fractions[][];
    fractionLower: Fractions[][];
    fractionProduct: Fractions[][];
    fractionCopy: Fractions[];
    parameters: number[] = [];
    index = 0;
    private multiplier: Fractions;
    private lin = 0;
    private col = 0;

    public copyArray(dim: number, arr1: Fractions[][], arrcopy: Fractions[], numrow: number): Fractions[] {
        for (let i = 0; i < dim; i++) {
            arrcopy[i] = new Fractions(arr1[numrow][i].numerator, arr1[numrow][i].denominator);
        }
        return arrcopy;
    }

    public convert(arrsize: number, test: Fractions[][], numbers: number[][]): Fractions[][] {
        // make this do teh entire array and return an array
        let num2: number;
        let text = '';
        for (let i = 0; i < arrsize; i++) {
            for (let j = 0; j < arrsize; j++) {
                if (numbers[i][j] % 1 !== 0) {
                    text = Math.abs(numbers[i][j]) + '';
                    const integerPlaces: number = text.indexOf('.');
                    const decimalPlaces: number = text.length - integerPlaces - 1;
                    numbers[i][j] = numbers[i][j] * (Math.pow(10, decimalPlaces));
                    num2 = Math.pow(10, decimalPlaces);
                    test[i][j] = new Fractions(numbers[i][j], num2);
                    Fractions.reduce(test[i][j]);
                } else {
                    test[i][j] = new Fractions(numbers[i][j], 1);
                }
            }
        }
        return test;
    }

    public multiplyTwoMatrix(
        dim: number,
        lower: Fractions[][],
        upper: Fractions[][],
        test: Fractions[][]): Fractions[][] {

        let testing: Fractions = new Fractions(0, 1);
        for (let i = 0; i < dim; i++) {
            for (let j = 0; j < dim; j++) {
                test[i][j] = new Fractions(0, 1);
                for (let k = 0; k < dim; k++) {
                    testing = lower[i][k].multiplyingNoChange(upper[k][j]);
                    test[i][j] = test[i][j].addingNoChange(testing);

                }
            }
        }
        return test;
    }

    constructor(private dim: number, private input: MatrixNumber) {
        this.fractionZero = new Fractions(0, 1);
        this.fractionInput = this.initDoubleArray(dim);
        this.fractionLower = this.initDoubleArray(dim);
        this.fractionProduct = this.initDoubleArray(dim);
        this.fractionCopy = this.initArray(dim); // takes one row from the row to perform gaussian
        this.parameters = [];
        this.index = 0;

        this.fractionInput = this.convert(this.dim, this.fractionInput, this.input.data);
        // made fraction form of array c
        this.event.emit({
            action: 'DisplayStep',
            msg: ' Upper',
            value: new MatrixFraction(this.fractionInput, this.dim)
        });
        const lower: number[][] = this.initDoubleArray(this.dim, 0);
        for (let i = 0; i < dim; i++) {
            lower[i][i] = 1;
        }

        this.fractionLower = this.convert(this.dim, this.fractionLower, lower); // making lower fraction
        this.multiplier = new Fractions(1, 1);
    }


    addParameter(p: number) {
        this.parameters.push(p);
    }

    public infiniteString(xPos: number, yPos: number, fractionLower, infiniteSolString) {
        for (let i = 0; i < this.dim; i++) {
            for (let j = 0; j < this.dim; j++) {
                if (xPos === j && yPos === i) {
                    infiniteSolString.data[i][j] = 't';
                } else {
                    let fractionStr = fractionLower[i][j].numerator + ' / ' + fractionLower[i][j].denominator;
                    if ( fractionLower[i][j].denominator === 1){
                        fractionStr = fractionLower[i][j].numerator;
                    }
                    infiniteSolString.data[i][j] = fractionStr;
                }
            }
        }
        return infiniteSolString;
    }

    public compute(oldColPosition = 1) {
        // adjusting A(1,1), A(2,1) in the matrix L and U using gaussian
        for (; this.lin < (this.dim - 1); this.lin++) {// a represents column
            for (this.col = oldColPosition; this.col < (this.dim - this.lin); this.col++) {
                if (this.fractionInput[this.lin][this.lin].numerator !== this.fractionZero.numerator) {
                    this.multiplier = this.fractionInput[this.col + this.lin][this.lin]
                        .divisionNoChange(this.fractionInput[this.lin][this.lin]);
                    this.event.emit({
                        action: 'DisplayStep',
                        msg: 'Multiplier',
                        value: this.multiplier
                    });
                    this.fractionLower[this.col + this.lin][this.lin] =
                        this.fractionLower[this.col + this.lin][this.lin].addingNoChange(this.multiplier);
                    this.event.emit({
                        action: 'DisplayStep',
                        msg: ' Lower',
                        value: new MatrixFraction(this.fractionLower, this.dim)
                    });

                } else {
                    if (this.fractionInput[this.lin][this.lin].numerator === this.fractionZero.numerator
                        && this.fractionInput[this.col + this.lin][this.lin].numerator === this.fractionZero.numerator) {
                        // System.out.println("please pick a parameterCompute for the matrix since there is infinite solutions");
                        //  parameterCompute = input.nextInt();
                        if (this.parameters[this.index] === undefined) {
                            const mat = this.infiniteString(
                                 this.lin,
                                this.col + this.lin,
                                this.fractionLower,
                                new MatrixString(
                                    this.initDoubleArray(this.dim), this.dim));
                            this.event.emit({
                                action: 'RequestParamForInfCase',
                                msg: 'Please Input Parameter t ',
                                value: this.col,
                                requestMat: mat

                            });
                            return;
                        }

                        this.multiplier.numerator = this.parameters[this.index];
                        this.index++;
                        this.multiplier.denominator = 1;
                        this.fractionLower[this.col + this.lin][this.lin] =
                            this.fractionLower[this.col + this.lin][this.lin].addingNoChange(this.multiplier);
                        this.event.emit({
                            action: 'DisplayStep',
                            msg: 'Multiplier',
                            value: this.multiplier
                        });
                    } else {
                        if (this.fractionInput[this.lin][this.lin].numerator === this.fractionZero.numerator
                            && this.fractionInput[this.col + this.lin][this.lin].numerator !== this.fractionZero.numerator) {

                            this.event.emit({
                                action: 'StopNoSolution',
                                msg: 'No LU decomposition',
                                value: null
                            });
                            return;
                        }
                    }
                }
                this.copyArray(this.dim, this.fractionInput, this.fractionCopy, this.lin);
                for (let j = 0; j < this.dim; j++) {
                    this.fractionCopy[j] = this.fractionCopy[j].multiplyingNoChange(this.multiplier);
                    // copies all the number in the row into a copy matrix which will be used in gaussian elimnination
                }

                for (let j = this.lin; j < this.dim; j++) {
                    this.fractionInput[this.col + this.lin][j].subtracting(this.fractionCopy[j]);
                }

            }
            // if resuming a compute, after the the resume set the column to start at 1
            oldColPosition = 1;
        }
        this.event.emit({
            action: 'DisplaySolution',
            msg: ' Lower Final',
            value: new MatrixFraction(this.fractionLower, this.dim)
        });
        this.event.emit({
            action: 'DisplaySolution',
            msg: ' Upper Final',
            value: new MatrixFraction(this.fractionInput, this.dim)
        });

        this.multiplyTwoMatrix(this.dim, this.fractionLower, this.fractionInput, this.fractionProduct);
        this.event.emit({
            action: 'DisplaySolution',
            msg: ' Lower x Upper',
            value: new MatrixFraction(this.fractionProduct, this.dim)
        });


    }

    private initDoubleArray(dim: number, value: any = null): any[][] {
        const res = [];
        for (let i = 0; i < dim; i++) {
            res.push([]);
            for (let j = 0; j < dim; j++) {
                res[i].push(value);
            }
        }
        return res;
    }


    private initArray(dim: number, value: any = null): any[] {
        const res = [];
        for (let i = 0; i < dim; i++) {
            res.push(value);
        }
        return res;
    }
}

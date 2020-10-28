import {Component, OnInit} from '@angular/core';
import {DisplayItem, LuDecompService} from '../service/lu-decomp-service';
import {Subscription} from 'rxjs';

export class MatrixFraction {
    data: Fractions[][];
    dim: number;
    constructor(data: Fractions[][], dim: number) {
        this.data = data;
        this.dim = dim;
    }

    public clone(): MatrixFraction {
        const res = [];
        for (let i = 0; i < this.dim; i++) {
            res.push([]);
            for (let j = 0; j < this.dim; j++) {
                res[i].push(this.data[i][j].clone());
            }
        }
        return new MatrixFraction(res, this.dim);
    }
}

export class MatrixNumber {
    data: number[][];
    dim: number;
    constructor(data: number[][], dim: number) {
        this.data = data;
        this.dim = dim;
    }

}
export class MatrixString {
    data: string[][];
    dim: number;
    constructor(data: string[][], dim: number) {
        this.data = data;
        this.dim = dim;
    }

}

@Component({
    selector: 'app-lu-decomposition',
    templateUrl: './lu-decomposition.component.html',
    styleUrls: ['./lu-decomposition.component.scss']
})
export class LuDecompositionComponent implements OnInit {

    dimension = 3;
    data: MatrixNumber = new MatrixNumber([], 0);
    results: DisplayItem[] = [];
    luDecompService: LuDecompService;
    private sub: Subscription;

    constructor() {
    }

    ngOnInit(): void {
        this.changeDimension();
        this.testData();
    }

    changeDimension() {
        this.data.data = [];
        for (let i = 0; i < this.dimension; i++) {
            const line = [];
            for (let col = 0; col < this.dimension; col++) {
                line.push(0);
            }
            this.data.data.push(line);
        }
    }

    testData() {
        this.data.data = [
            [20, 5, 9],
            [16, 4, 7],
            [4, 1, 3]
        ];
    }

    computeMat() {
        this.results = [];
        if (this.sub) {
            this.sub.unsubscribe();
        }
        this.luDecompService = new LuDecompService(this.dimension, this.data);
        this.sub = this.luDecompService.event.subscribe(eventData => {
            console.log(eventData);
            this.results.push(new DisplayItem(eventData));
        });
        this.luDecompService.compute();
    }

    changeInputParameter(item: DisplayItem) {
        item.inputParameterSubmited = true;
        this.luDecompService.addParameter(item.inputParameter);
        const value: any = item.value;
        this.luDecompService.compute(value);
    }

    indexTrackerLin(index: number, value: any) {
        return index;
    }
    indexTrackerCol(index: number, value: any) {
        return index;
    }
}


export class Fractions {
    // a class is basically the blueprint of MY object that i plan to create
    numerator: number;
    denominator: number;

    constructor(num: number, denom: number) {
        this.numerator = num;
        this.denominator = denom;
    }

    public static reduce(test: Fractions): Fractions {
        // test is the fraction// do the 0 case
        for (let i = Math.abs(test.denominator); i >= 1; i--) {
            if (test.numerator % i === 0 && test.denominator % i === 0) {
                test.numerator = test.numerator / i;
                test.denominator = test.denominator / i;
                break;
            }
        }
        if (test.denominator < 0) {
            test.numerator = test.numerator * -1;
            test.denominator = test.denominator * -1;
        }
        return test;
    }

// from fracitons to that is the typescript conversion
    public static _addingNoChange(test: Fractions, addFrac: Fractions): Fractions {
        let temp1: number;
        let temp2: number;
        const result: Fractions = new Fractions(0, 1); // not sure if right
        if (test.denominator === addFrac.denominator) {
            result.numerator = test.numerator + addFrac.numerator;
            result.denominator = test.denominator;
        } else {
            temp1 = test.denominator;
            temp2 = addFrac.denominator;
            test.denominator = temp1 * temp2;
            addFrac.denominator = temp1 * temp2;
            test.numerator = temp2 * test.numerator;
            addFrac.numerator = temp1 * addFrac.numerator;
            test.numerator = test.numerator + addFrac.numerator;
            result.numerator = test.numerator;
            result.denominator = test.denominator;
        }
        Fractions.reduce(result);
        return result;
    }

    public static _subtracting(test: Fractions, subFrac: Fractions): Fractions {
        let temp: number;
        let temp2: number;
        if (test.denominator === subFrac.denominator) {
            test.numerator = test.numerator - subFrac.numerator;
        } else {
            temp = test.denominator;
            temp2 = subFrac.denominator;
            test.denominator = temp * temp2;
            subFrac.denominator = temp * temp2;
            test.numerator = temp2 * test.numerator;
            subFrac.numerator = temp * subFrac.numerator;
            test.numerator = test.numerator - subFrac.numerator;
        }
        Fractions.reduce(test);
        return test;
    }
    public static _multiplyingNoChange(test: Fractions, multFrac: Fractions): Fractions {
        const results: Fractions = new Fractions(0, 1);
        results.numerator = test.numerator * multFrac.numerator;
        results.denominator = test.denominator * multFrac.denominator;
        Fractions.reduce(results);
        return results;
    }
    public static _divisionNoChange(test: Fractions, divFrac: Fractions): Fractions {
        const result: Fractions = new Fractions(0, 1);
        result.numerator = test.numerator * divFrac.denominator;
        result.denominator = test.denominator * divFrac.numerator;
        Fractions.reduce(result);
        return result;
    }

    public divisionNoChange(divFrac: Fractions): Fractions {
        return Fractions._divisionNoChange(this, divFrac);
    }
    public multiplyingNoChange(multFrac: Fractions): Fractions {
        return Fractions._multiplyingNoChange(this, multFrac);
    }
    public subtracting(subFrac: Fractions): Fractions {
        return Fractions._subtracting(this, subFrac);
    }
    public addingNoChange(addFrac: Fractions): Fractions {
        return Fractions._addingNoChange(this, addFrac);
    }
    public clone(): Fractions {
        return new Fractions(this.numerator, this.denominator);
    }
}

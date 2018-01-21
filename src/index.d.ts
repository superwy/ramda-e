declare var RE: RamdaE.Static;

declare namespace RamdaE {


    export interface Static {
        isInputPrice(val: any): boolean;

        isInputInteger(val: any): boolean;

        fMultiply(a: number, b: number): number;

        fDivide(a: number, b: number): number;

        fenToYuan(val: any): number;

        yuanToFen(val: any): number;
    }

}

export = RE;

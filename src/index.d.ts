declare var RE: RamdaE.Static;

declare namespace RamdaE {


    export interface Static {
        /**
         * Checks if input value is `Price`.
         */
        isInputPrice(val: any): boolean;
    }

}

export = RE;

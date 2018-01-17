declare var RE: RamdaE.Static;

declare namespace RamdaE {


    export interface Static {
        /**
         * Checks if input value is `Price`.
         */
        isPrice(val: any): val is Array<any>;
    }

}

export = RE;

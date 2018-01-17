(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.RE = {})));
}(this, (function (exports) { 'use strict';

/**
 * Checks if value is `Price`.
 *
 * @func
 * @memberOf RE
 * @since v0.0.1
 * @category Math
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {Boolean}
 * @example
 *
 *      RE.isPrice('0.12');       //=>  true
 *      RE.isPrice(10.1);      //=> true
 */
var isPrice = function (val) {
    var reg = /(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/;
    return reg.test(("" + val))
};

/**
 * @namespace RE
 */

exports.isPrice = isPrice;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ramda-e.js.map

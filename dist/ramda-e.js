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
 *      RE.isInputPrice('0.12');       //=>  true
 *      RE.isInputPrice(10.1);      //=> true
 */
var isInputPrice = function isInputPrice(val) {
    var reg = /(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/;
  return reg.test("" + val);
};

/**
 * Checks if value is `Integer`.
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
 *      RE.isInputInteger('11');       //=>  true
 *      RE.isInputInteger(12);      //=> true
 */
var isInputInteger = function isInputInteger(val) {
    var reg = /^(0|[1-9][0-9]*|-[1-9][0-9]*)$/;
    return reg.test(val)
};

/**
 * @namespace RE
 */

exports.isInputPrice = isInputPrice;
exports.isInputInterger = isInputInteger;

Object.defineProperty(exports, '__esModule', { value: true });

})));

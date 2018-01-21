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

var fMultiply = function fMultiply (a, b) {
    var m = 0;
    var t1 = a.toString();
    var t2 = b.toString();
    try {
        m += t1.split('.')[1].length;
    } catch (e) {
    }
    try {
        m += t2.split('.')[1].length;
    } catch (e) {
    }
    return Number(t1.replace('.', '')) * Number(t2.replace('.', '')) / Math.pow(10, m)
};

var fDivide = function fMultiply(a, b) {
    var t1 = 0;
    var t2 = 0;
    var r1;
    var r2;
    try {
        t1 = a.split('.')[1].length;
    } catch (e) {}
    try {
        t2 = b.split('.')[1].length;
    } catch (e) {}
    r1 = Number(a.toString().replace('.', ''));
    r2 = Number(b.toString().replace('.', ''));
    return (r1 / r2) * Math.pow(10, t2 - t1)
};

var fenToYuan = function fenToYuan (val) {
    return fDivide(parseFloat(val), 100)
};

var yuanToFen = function yuanToFen (val) {
    return fMultiply(parseFloat(val), 100)
};

/**
 * @namespace RE
 */

exports.isInputPrice = isInputPrice;
exports.isInputInteger = isInputInteger;
exports.fMultiply = fMultiply;
exports.fDivide = fDivide;
exports.fenToYuan = fenToYuan;
exports.yuanToFen = yuanToFen;

Object.defineProperty(exports, '__esModule', { value: true });

})));

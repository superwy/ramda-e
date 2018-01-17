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
const isInputInteger = function isInputInteger(val) {
    const reg = /^(0|[1-9][0-9]*|-[1-9][0-9]*)$/
    return reg.test(val)
};

export default isInputInteger;
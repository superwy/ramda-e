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
const isInputPrice = function isInputPrice(val) {
    const reg = /(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/;
  return reg.test("" + val);
};

export default isInputPrice;
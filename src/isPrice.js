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
const isPrice = (val) => {
    const reg = /(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/
    return reg.test(`${val}`)
}

export default isPrice;

const fMultiply = function fMultiply (a, b) {
    let m = 0
    let t1 = a.toString()
    let t2 = b.toString()
    try {
        m += t1.split('.')[1].length
    } catch (e) {
    }
    try {
        m += t2.split('.')[1].length
    } catch (e) {
    }
    return Number(t1.replace('.', '')) * Number(t2.replace('.', '')) / Math.pow(10, m)
};

export default fMultiply;
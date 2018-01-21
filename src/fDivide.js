const fDivide = function fMultiply(a, b) {
    let t1 = 0
    let t2 = 0
    let r1
    let r2
    try {
        t1 = a.split('.')[1].length
    } catch (e) {}
    try {
        t2 = b.split('.')[1].length
    } catch (e) {}
    r1 = Number(a.toString().replace('.', ''))
    r2 = Number(b.toString().replace('.', ''))
    return (r1 / r2) * Math.pow(10, t2 - t1)
};

export default fDivide;
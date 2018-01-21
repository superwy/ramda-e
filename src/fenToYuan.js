import fDivide from './fDivide'

const fenToYuan = function fenToYuan (val) {
    return fDivide(parseFloat(val), 100)
};

export default fenToYuan;
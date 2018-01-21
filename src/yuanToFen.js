import fMultiply from './fMultiply'

const yuanToFen = function yuanToFen (val) {
    return fMultiply(parseFloat(val), 100)
};

export default yuanToFen;
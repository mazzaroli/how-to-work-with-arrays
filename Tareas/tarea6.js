const list = [1,2,3,3,4,5,2,1,1,3,4,5,6,7,5,5,4,7,8,9,8,7,5,4,5,8,9];

const rta = list.reduce((obj, item) => {
    if (item < 6)   obj['1-5']    += 1;
    else if (item < 9)   obj['6-8']    += 1;
    else if (item < 11)  obj['9-10']   += 1;
    return obj
}, {
    '1-5':  0,
    '6-8':  0,
    '9-10': 0,
});

console.log(rta)
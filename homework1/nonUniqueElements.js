export default function nonUniqueElements(data) {
    let mp = new Map();
    data.forEach(function (i) {
        mp.set(i, mp.has(i) ? mp.get(i) + 1 : 1);
    })
    let res = [];
    data.forEach(function (i) {
        if (mp.get(i) !== 1) {
            res.push(i);
        }
    })
    return res;
}

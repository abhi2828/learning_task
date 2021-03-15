var str = `Why Are Farmers abhay abhay a Protesting in  4564545 $^^&%^%`;
var temp_arry = [];
var strAry = str.split(' ').reverse();

strAry.forEach((ele) => {
    if (ele.length > 1 && ele.match(/[A-Za-z]/)) {
        temp_arry.push(ele);
    }
})


temp_arry2 = temp_arry[0]
temp_arry[0] = temp_arry[0].split('').reverse().join('')
console.log(typeof temp_arry[0], temp_arry[0], 'temp_arry')

console.log(typeof temp_arry2, temp_arry2, '=> temp_arry2')
newstr = strAry.join(' ').replace(temp_arry2, temp_arry[0]).split(' ').reverse().join(' ')
console.log(typeof newstr, newstr, '=> newstr')
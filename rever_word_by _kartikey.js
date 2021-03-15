var str = `Why Are Farmers abhay abhay a Protesting in abhay ghghh
fhfhg gjgyn kartkey abhay`;

if (str.match(/[A-Za-z]/)) {
    console.log(splitArr, '=>1')
    splitArr[splitArr.length - 2] = splitArr[splitArr.length - 2].split('').reverse().join('')

    console.log(splitArr[splitArr.length - 2], '3')
    var res = splitArr.join(' ')
    console.log(res, '=>2');
} else {
    var splitArr = str.split(' ')
    console.log(splitArr, '=>1')
    splitArr[splitArr.length - 1] = splitArr[splitArr.length - 1].split('').reverse().join('')

    console.log(splitArr[splitArr.length - 1], '3')
    var res = splitArr.join(' ')
    console.log(res, '=>2');

}


// var str = 'abhay @28';
// var regex = /[^\w\s]/gi;

// if(regex.test(str) == true) {
//     alert('Your search string contains illegal characters.');
// }else
//   {
//     alert('everything looks good');
// }
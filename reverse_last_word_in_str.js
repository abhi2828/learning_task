// reverse last word in str by removing any valid single spcial character in a valid sentence(string)

var str = `Why Are Farmers abhay abhay a Protesting in abhay ghghh fhfhg gjgyn kartkey abhay kartkey33 ?`;

var ary = str.split(' ').reverse();
console.log(typeof ary, ary, '=> output1')

var Shift_word;

if (ary[0].length < 2) {
    console.log("hi ", typeof ary.shift(), ary, ' => if condition test')
    Shift_word = ary.shift().split('').reverse().join('')

    console.log(typeof Shift_word, Shift_word, ' => Shift_word')

}
ary = ary.reverse()
var ary3 = ary.push(Shift_word);
// console.log(typeof ary3, ary3, '=> ary3')
ary2 = ary.join(' ');
// console.log(typeof ary, ary, '=> ary')
console.log(typeof ary, '=>', ary2, '=> output')
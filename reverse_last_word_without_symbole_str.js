// reverse last word in str special spcial character in a valid sentence(string).

var str = `Why Are Farmers abhay abhay a Protesting in abhay ghghh fhfhg gjgyn kartkey abhay`;

var ary = str.split(' ').reverse();
var shift_word = ary.shift()
var reverse_word = shift_word.split('').reverse().join('');
var ary2 = ary.reverse().push(reverse_word);
ary = ary.join(' ')





console.log(typeof ary, ary, '=> output')
console.log(typeof shift_word, '=>', shift_word, '=> shift_word ')
console.log(typeof reverse_word, '=>', reverse_word, '=> reverse_word ')
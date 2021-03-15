// in a given json merge all the data with same name in same object. see the expected o/p below the json data 

/*expected o/p:

[ { Name: 'bhavesh',

Mobile: '8741874100',

Email: 'bhavesh@gmail.com',

'what is tv?': null,

'what is pc?': null,

'what is cpu?': null,

'what is ABC?': null,

'what is KBC?': null,

'what is Mouse?': null},

{ Name: 'karan',

Mobile: '9966996699',

Email: 'karan@gmail.com',

'what is tv?': 'television',

'what is pc?': null,

'what is cpu?': 'central processing unit' },

{ Name: 'deepak',

Mobile: '87418746660',

Email: 'deepak@gmail.com',

'what is tv?': null,

'what is pc?': null,

'what is cpu?': null }]*/

var data = [{
        Name: 'bhavesh',

        Mobile: '8741874100',

        Email: 'bhavesh@gmail.com',

        'what is tv?': null,

        'what is pc?': null,

        'what is cpu?': null
    },

    {
        Name: 'karan',

        Mobile: '9966996699',

        Email: 'karan@gmail.com',

        'what is tv?': 'television',

        'what is pc?': null,

        'what is cpu?': 'central processing unit'
    },

    {
        Name: 'bhavesh',

        Mobile: '8741874100',

        Email: 'bhavesh@gmail.com',

        'what is ABC?': null,

        'what is KBC?': null,

        'what is Mouse?': null
    },

    {
        Name: 'deepak',

        Mobile: '87418746660',

        Email: 'deepak@gmail.com',

        'what is tv?': null,

        'what is pc?': null,

        'what is cpu?': null
    }
];
var array_json = [];
var new_arry = [];
var new_arry2 = [];
let unique_keys;
data.forEach((i) => {
    new_arry.push(Object.keys(i))
        // new_arry = Object.keys(i);
});
// console.log(Object.assign({}, ...data));

// console.log(typeof new_arry, new_arry, '=> new_arry');
new_arry.forEach((ele) => {
    // console.log(typeof ele, ele)
    ele.forEach((ele2) => {
        // console.log(typeof ele2, ele2)
        new_arry2.push(ele2)
    })
})

unique_keys = [...new Set(new_arry2)];

// console.log(typeof unique_keys, unique_keys, '=> unique_keys')

array_json = data.filter(word => {
    console.log(word.Name, 'word')
    if (word.Name == 'bhavesh') {
        // console.log('found match')
        array_json.push(data[word.Name])
    }
});

console.log(array_json, '=> array_json')
const object1 = {
    a: 'somestring',
    b: 42,
    c: false
};
const object2 = {
    a: 'somestring',
    d: 42,
    e: true
};
const key1 = Object.keys(object1)
inputAray.forEach()
const key2 = Object.keys(object2)

console.log(Object.keys(object1));
console.log(Object.keys(object2));
// expected output: Array ["a", "b", "c"]
let final_key_arry = key1;
key2.forEach((ele) => {
    if (final_key_arry.includes(ele) == false) {
        final_key_arry.push(ele);
    }
})
console.log(final_key_arry, 'final_key_arry')

var merge_objects = (object1, object2) => {
    let obj = {};
    final_key_arry.forEach((ele) => {
        if (`${ele}` in object1 && `${ele}` in object2 && object1[`${ele}`] == object2[`${ele}`]) {
            obj[`${ele}`] = object1[`${ele}`]
        }
        if (`${ele}` in object1 && (`${ele}` in object2 == false)) {
            obj[`${ele}`] = object1[`${ele}`]
        }
        if (`${ele}` in object2 && (`${ele}` in object1 == false)) {
            obj[`${ele}`] = object2[`${ele}`]
        }
    })
    console.log(obj)

}
merge_objects(object1, object2)
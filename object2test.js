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

var keys1 = Object.keys(object1);
var keys2 = Object.keys(object2);
let new_arry = keys1.concat(keys2)
let unique_keys = [...new Set(new_arry)];
obj_abhay = {};


// const merge_obj = (object1, object2) => {
//     unique_keys.forEach((ele) => {
//         return (ele in object1 && ele in object2 && object1[ele] == object2[ele]) ? obj_abhay[ele] = object1[ele] :
//             ele in object1 ? obj_abhay[ele] = object1[ele] :
//             ele in object2 ? obj_abhay[ele] = object2[ele] :
//             value4; // what is use of this if i remove this it shows me syntex error with red marking...
//     });
// }
const merge_obj = (object1, object2) => {
    unique_keys.forEach((ele) => {
        if (ele in object1 && ele in object2 && object1[ele] == object2[ele]) {
            obj_abhay[ele] = object1[ele]
        }
        if (ele in object1 && (ele in object2 == false)) {
            obj_abhay[ele] = object1[ele]
        }
        if (ele in object2 && (ele in object1 == false)) {
            obj_abhay[ele] = object2[ele]
        }
    });
}
merge_obj(object1, object2)

console.log(unique_keys, '=> unique_keys')
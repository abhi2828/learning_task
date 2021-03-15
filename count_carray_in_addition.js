function numberOfCarryOperations(x, y) {
    var num_str1 = x.toString();
    var num_str2 = y.toString();
    var cary = 0;
    var operations = 0;
    var xCurrent;
    var yCurrent;
    console.log(num_str1.substr(num_str1.length - 1), 'abhay')
    while (num_str1.substr(num_str1.length - 1) || num_str2.substr(num_str2.length - 1)) {
        yCurrent = num_str2.substr(num_str2.length - 1);
        xCurrent = num_str1.substr(num_str1.length - 1);
        num_str1 = num_str1.substr(0, num_str1.length - 1);
        num_str2 = num_str2.substr(0, num_str2.length - 1);

        var sum = cary + Number(yCurrent) + Number(xCurrent);

        if (sum >= 10) {
            cary = Math.floor(sum / 10);
            operations += 1;
        }

    }

    return operations;
}

console.log(numberOfCarryOperations(986, 97))
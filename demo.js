var json = '{"rows":[{"key":["zeit.de"],"value":98},{"key":["google.com"],"value":49},{"key":["spiegel.de"],"value":20},{"key":["spiegel.de"],"value":12},{"key":["spiegel.de"],"value":20},{"key":["spiegel.de"],"value":12},{"key":["netmng.com"],"value":49},{"key":["zeit.de"],"value":300}]}';
var obj = JSON.parse(json);

var newObj = {};
for (i in obj['rows']) {
    var item = obj['rows'][i];
    if (newObj[item.key[0]] === undefined) {
        newObj[item.key[0]] = 0;
    }
    newObj[item.key[0]] += item.value;
}

var result = {};
result.rows = [];
for (i in newObj) {
    result.rows.push({ 'key': i, 'value': newObj[i] });
}
console.log(result);
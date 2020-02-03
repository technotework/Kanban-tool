

function template(strings, ...keys) {
    return (function (...values) {
        let dict = values[values.length - 1] || {};
        let result = [strings[0]];
        keys.forEach(function (key, i) {
            let value = Number.isInteger(key) ? values[key] : dict[key];
            result.push(value, strings[i + 1]);
        });
        return result.join('');
    });
}
let temp = template`<hoge my="${'action'}">`;

function hoge(temp) {


    let result = temp({ action: "piyooiyo" });

    console.log(result);

}

hoge(temp);
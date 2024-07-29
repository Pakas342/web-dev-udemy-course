var output = [];
var count = 1

function fizzbuzz() {
    if (count%3 === 0 || count%5 === 0) {
        if (count%3 === 0 && count%5 === 0) {
            var response = "FiizBuzz";
        } else if (count%3 === 0) {
            var response = "Fizz";
        }else if (count%5 === 0) {
            var response = "Buzz";
        }
    } else {
        var response = count
    }
    output.push(response);
    console.log(output);
    count++
}

while (count <= 100) {
    fizzbuzz()
}
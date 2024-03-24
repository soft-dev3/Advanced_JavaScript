var name = "kuddus"; // Global variable
function add(num1,num2){
    var result = num1+ num2;
    // console.log(result);
    function double(num){
        return num*2;
    }
    var total = double(result);
    return total;
}

var sum=add(23,34);
console.log(sum);
// console.log('result inside without var',result);

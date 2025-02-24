function myFunction()
{
    console.log("Welcome to Apna College");
    console.log("We are learning JS :)");
}
myFunction();
function add(a,b) //a and b are parameters
{
    console.log("Sum is",a + b);
}
add(5,4); //5 and 4 are arguments
function sum(a,b)
{
    s = a + b;
    return s;
}
let val = sum(3,4);
console.log("Sum is ",val);
//Arrow Functions
const arrowSum = (a,b) =>
{
    console.log(a + b);
};
arrowSum(3, 4);
const arrowMul = (x,y) =>
{
    console.log(x * y);
};
arrowMul(3,4);
let vowels = 0;
function string(str)
{
    for(let i=0; i < str.length; i++)
    {
        if(str[i] == 'a'||str[i] == 'e'||str[i] == 'i'||str[i] == 'o'||str[i] == 'u')
        {
            vowels++;
            console.log(vowels);
        }
    }
}
string("Drishti");
const countVow = (str) =>
{
    let vowels = 0;
    for(let i=0; i < str.length; i++)
    {
        if(str[i] == 'a'||str[i] == 'e'||str[i] == 'i'||str[i] == 'o'||str[i] == 'u')
        {
            vowels++;
        }
    }
    return vowels;
}
countVow("apna college");
let arr = [1, 2, 3, 4, 5];
arr.forEach(function printVal(val){
    console.log(val);
});
arr.forEach((val) =>{
    console.log(val);
});
let arr1 = [1, 2, 3, 4, 5, 6];
arr.forEach((val) =>{
    console.log(val*val);
});
console.log(arr);
let calcSquare = (val) =>
{
    console.log(val*val);
};
arr.forEach(calcSquare);
Map
arr.map((val) => {
    console.log(val);
});
filter
let evenArr = arr.filter((val) => {
    return val % 2 === 0;
});
console.log(evenArr);
reduce
let newArr = [1,2,3,4];
const output = newArr.reduce((res, curr) => {
    return res + curr;
});
console.log(output);
let marks = [32, 45, 97, 91, 36, 96, 21];
let output1 = marks.filter((val) => {
    return val > 90;
});
console.log(output);
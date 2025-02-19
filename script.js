let a = 5; 
let b = 2;
//Arithmetic Operators
console.log("a is ",a, " and b is ",b);
console.log("a + b is ",a+b);
console.log("a - b is ",a - b);
console.log("a * b is ",a * b);
console.log("a / b is ",a / b);
console.log("a % b is ",a % b);
console.log("a ** b is ",a ** b); //5^2
//Unary Operators
console.log("a is ",a, " and b is ",b);
a++;
console.log("a is ",a); //6
a--;
console.log("a is ",a); //5
//Comparison Operators
console.log("a is ",a, " and b is ",b);
console.log("5 == 2",a == b); //false
console.log("5 == 2", a != b); //true
//Logical Operators
let cond1 = a > b; //true
let cond2 = a === 6; //false
console.log("a is ",a, " and b is ",b);
console.log("cond1 && cond2 is ", cond1 && cond2);
console.log("cond1 || cond2 is ", cond1 || cond2);
console.log("5 > 2 = ",!(cond1)); //true
//Conditional Statements
let num = 7;
if(num % 2 === 0)
    console.log(num,"is even");
else 
console.log(num, "is odd");
let mode = "red";
let color;
if(mode === "dark")
{
    color = "black";
}
else if(mode === "blue")
{
    color = "blue";
}
else if(mode === "pink")
{
    color = "pink";
}
else 
{
    color = "white";
}
console.log(" Color is ",color);
//Ternary Operator
let age = 17;
let result = age >= 18 ? "You are an adult" : "You are not an adult";
console.log(result);
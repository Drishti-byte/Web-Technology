// loops
// for loops 
let i;
for(i=1; i <= 5;i++)
{
    console.log("My name is Drishti");
}
// program to print sum of 1 to 5 numbers 
let sum = 0;
let n = prompt("Enter how many times you want to print sum of numbers: ");
for(i=1; i <= n;i++)
{
    sum = sum + i;
}
console.log("Sum is ", sum);
//while loop
i = 1;
while(i <= 5)
{
    console.log("My name is Drishti");
    i++;
}
//do-while loop
i = 1;
do 
{
    console.log("My name is Drishti");
    i++;
}while(i <= 5);
//for-of loop(Used for strings and arrays)
let str = "JavaScript";
let length = 0;
for(i of str)
{
    console.log(i);
    length++;
}
console.log("Length of string is ",length);
//for-in loop(Used for objects)
let student={
    name: "Drishti",
    cgpa:7.5,
    age:20,
    isPass: true
};
for(key in student)
{
    console.log("Key = ",key, "Value = ",student[key]);
}
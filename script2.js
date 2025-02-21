//strings
let obj={
    item: "Pen",
    cost : 10
};
console.log("The cost of ",obj.item, "is", obj.cost, "rupees");
//Template Literals
let output;
output = `The cost of ${obj.item} is ${obj.cost} rupees`;
console.log(output);
//Methods of Strings
let str = "Drishti Bansal";
let str1 = str.toUpperCase();
console.log(str);
console.log(str1);
let str2 = str.length;
console.log(str2);
let str3 = str.toLowerCase();
console.log(str3);
str = "     Drishti Bansal    ";
let str4 = str.trim();
console.log(str4);
str = "01234567";
console.log(str.slice(1,3));
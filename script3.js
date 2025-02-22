//Arrays
let marks = [98, 85, 74, 65, 56];
console.log(marks);
console.log(marks.length);
console.log(typeof marks);
let heroes = ["ironman", "hulk", "batman", "antman", "Superman"];
console.log(heroes);
for(let i=0; i < heroes.length;i++)
{
    console.log(heroes[i]);
}
//for-of loop
for(hero of heroes)
{
    console.log(hero);
}
let cities = ["Delhi", "Hyderabad", "Pune", "Bangalore", "Kerala", "Mumbai", "Gurgaon"];
for(city of cities)
{
    console.log(city);
    console.log(city.toUpperCase());
}
//Array methods
let foodItems = ["Potato", "Litchi", "Apple", "Tomato"];
console.log(foodItems);
foodItems.push("Chips");
console.log(foodItems);
let deletedItems = foodItems.pop("Chips");
console.log("Deleted ",deletedItems);
console.log(foodItems);
console.log(foodItems.toString());
let marvalHeroes = ["Spiderman", "Thor", "Ironman"];
let dcHeroes = ["Batman", "Superman"];
let heros = marvalHeroes.concat(dcHeroes);
console.log(heros);
console.log(marvalHeroes.shift());
console.log(marvalHeroes);
console.log(marvalHeroes.unshift("Antman"));
console.log(marvalHeroes);
let marval1Heroes = ["Thor", "Spiderman", "Ironman", "Antman", "Dr. Strange"];
console.log(marvalHeroes);
console.log(marvalHeroes.slice(1,3));
let array = [1,2,3,4,5,6,7];
array.splice(2,2,101,102);
console.log(array);
array.splice(2,0,101);
console.log(array);
array.splice(3,1);
console.log(array);
array.splice(3,1,101);
console.log(array);
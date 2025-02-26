let div = document.querySelectorAll(".box");
console.log(div);
// divs[0].innerText = "New Unique Value 1";
// divs[1].innerText = "New Unique Value 2";
// divs[2].innerText = "New Unique Value 3";
let idx = 1;
for(div of div)
{
    div.innerText = `New Unique Value ${idx}`;
    idx++;
}
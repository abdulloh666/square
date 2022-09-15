let number = prompt("Enter your number: ");
let btn = document.querySelector("button");

function sqr(a){
    let result = (a **2);
    return result;  
}


let result = sqr(number);
btn.addEventListener('click' , () => {
    document.getElementById("div").innerHTML = result;
})

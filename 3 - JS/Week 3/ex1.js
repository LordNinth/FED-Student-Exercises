

// Ex: 1 Getting the elements from DOM
const check = document.querySelector("button");
const str = document.querySelector("input");
const inputStr = document.querySelector(".inputStr");
const revStr = document.querySelector(".revStr");
const outputText = document.querySelector(".output-text")

check.addEventListener("click", (e)=>{
    e.preventDefault();


    const input = str.value.toLocaleLowerCase(); //lowercasing for comparision
    const string = input.split(""); //putting string into new array called string
    const rearray = string.reverse(); //reverse array
    const revdStr = rearray.join("");//join the array back to string and assign it to another variable
    inputStr.textContent = input; //assigning to display value on web
    revStr.textContent = revdStr; 

    if(input == revdStr) {
        outputText.textContent = "True";
    } else {
        outputText.textContent="False";
    }

    str.value = ""; //reset on click

})

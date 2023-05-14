function reset(){

    document.getElementById("inputString").value = "0";
    document.getElementById("ex3Result").value = "0";
}


function titleCase(arr) {
str = arr.toString();
return str.replace(/\w\S*/g, //checks for non alphanumeric / white spaces and replace with empty string

function(txt){
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

//console.log(titleCase(arr)) ttesting

function add(){
    const inputString= document.getElementById("inputString").value;
    console.log(inputString)
    const result = titleCase(inputString);
    document.getElementById("ex3Result").value = result;
}



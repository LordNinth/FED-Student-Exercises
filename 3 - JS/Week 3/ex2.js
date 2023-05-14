
//turn values to 0
function reset(){
    document.getElementById("userInput").value = "0";
    document.getElementById("result").value = "0";
}

//find even number total
function  total(a){
    const sumArr = a;
    let sum = 0;
    for (let i = 0; i< sumArr.length;i++) {
        if(sumArr[i]%2==0){ //check index position if even
            sum += sumArr[i];
        }  
    }
    return sum;
}


//onclick event 
function add() {
    const result = document.getElementById("result");
    const num = Number(document.getElementById("userInput").value); //change string input to number
    
    const numArr = num.toString().split('').map(Number); //turn to list and to array

    const sumNum= total(numArr); //call another function
    console.log(sumNum)
    document.getElementById("result").value = sumNum;


}


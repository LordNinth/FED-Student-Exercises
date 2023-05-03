//exercise 1
const numberCheckerForm = document.querySelector("#numberCheckerForm")

const numCheck = (num) =>{
    return !(num%2)
}
    


numberCheckerForm.addEventListener("submit",(event)=> {
    const numberCheckerInput =document.querySelector("#numberCheckerInput")
    const numberCheckerResult =document.querySelector("#numberCheckerResult")
    const numberValue = numberCheckerInput.value
    event.preventDefault() //stops refreshing browser on submit
    
    

    if (numCheck(numberValue)){
        numberCheckerResult.textContent="even"

    } else {
        numberCheckerResult.textContent="odd"
    }

    })


//ex 2

const guessCheckerForm = document.querySelector("#guessCheckerForm");
const randNumber = Math.floor(Math.random() * 10) + 1;



//event listener for click on form
guessCheckerForm.addEventListener("submit", (event)=> {
    const guessCheckerInput = document.querySelector("#guessCheckerInput");
    //const guessResult = document.querySelector("#guessCheckerResult")
    const guessNumber = guessCheckerInput.value;
   
    event.preventDefault() //stops refreshing browser on submit

    if(guessNumber == randNumber){
       
        alert("Congratulation" + randNumber + "is the right number")
    }
    else if (guessNumber> randNumber){
       
        alert("try small number" )
      }
    else
    { 
        alert("try greater number" )
    }
})






   

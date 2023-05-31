const genBtn = document.querySelector(".genBtn");
const result = document.querySelector(".result");
const alphaNum = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// const pwLength = document.querySelector("#userInput").value;






//tring to get used to arrow function :(
const pwGenerator = (pwLength) => {
    let password = "";
    
    while(pwLength> password.length){
        password += alphaNum [Math.floor(Math.random()*alphaNum.length)];
        
    }
    return password;
}


  

//event listener

genBtn.addEventListener('click', () =>{
    const pwLength = document.querySelector("#userInput").value;

  
    pwGenerator(pwLength);

    document.querySelector(".result").textContent = pwGenerator(pwLength);
    
})


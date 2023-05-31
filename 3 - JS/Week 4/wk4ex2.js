const exBtn = document.querySelector("#exBtn")
const exBtn2 = document.querySelector("#exBtn2")
const fahrenheitResult = document.querySelector(".result");




convertTemp = (inputCelcius) => {
    const calcInput = parseFloat(inputCelcius);
    const res = (calcInput*1.8) + 32;
    return res;
}


convertFarenheitTemp = (inputFarenheit) =>{
    const calcFarenheitInput = parseFloat(inputFarenheit);
    const res = (calcFarenheitInput -32)/1.8;
    return res;
}


exBtn.addEventListener('click', () =>{ 
    
    const inputCelcius = document.querySelector("#inputCelcius").value;   
    
    convertTemp(inputCelcius);
   
    document.querySelector(".result").textContent = convertTemp(inputCelcius);

})
exBtn2.addEventListener('click', () =>{ 
    
    const inputFarenheit = document.querySelector("#inputFarenheit").value 
    convertFarenheitTemp(inputFarenheit)
    document.querySelector(".result2").textContent =convertFarenheitTemp(inputFarenheit);

})

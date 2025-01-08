const inputElement= document.getElementById("text-input");
const checkBtn=document.getElementById("check-btn");
const resultBox=document.getElementById("result");
const regex=/[^0-9a-zA-Z]/g;  
const cleanString=(str)=>{  
    return str.replace(regex,'').toUpperCase()
}
function reverse(str){
    return str.split('').reverse().join("");
}
const checkPalindrome=()=>{
    const inputValue=inputElement.value;
    const clearStr=cleanString(inputValue); 
    const reverseString=reverse(clearStr);
    
    if (inputValue==""){
        alert("Please input a value");
        return;
    }
    if(reverseString==clearStr){
        resultBox.innerText=`${inputValue} is a Palindrome`; 
    }
    else {
        resultBox.innerText=`${inputValue} is not a Palindrome`;
    }
}
checkBtn.addEventListener('click',checkPalindrome);

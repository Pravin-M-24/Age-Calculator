const input = document.querySelector("#date");

const button = document.querySelector("#button");

button.addEventListener("click" , (e)=>{
    if(!input.value) alert("Enter your Date of Birth");

    let today = new Date();
    let birthDate = new Date(input.value);
    let currentmillisec = today.getTime() - birthDate.getTime();
    let millisecPerYear = 365*24*60*60*1000;
    let age = Math.floor(currentmillisec/millisecPerYear);

    let ageMsg = document.querySelector("#age");
    ageMsg.innerHTML = `Your age is  ${age} years old `;
});
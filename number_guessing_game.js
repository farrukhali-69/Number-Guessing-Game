
let myinput = document.getElementById("myinput");
let mysubmit = document.getElementById("mysubmit");
let myguess = document.getElementById("myguess");
let myanswer = document.getElementById("myanswer");
let attempts=0;

let number = Math.floor(Math.random()*100)+1;

mysubmit.onclick = function(){
    let userinput = parseInt(myinput.value);

    myguess.textContent = `${userinput}`
    if(userinput !==""){
        attempts++;
    }

    if(userinput>100 || userinput<0){
        myanswer.textContent =(`Please enter a number between 1-100`)
    }

    else if(userinput == number){
        myanswer.textContent = (`You Won! ${userinput} is the right answer. You took ${attempts} attempts.`);
    }

    else if(userinput > number){
        myanswer.textContent =(`too high`);
    }

    else if(userinput < number){
        myanswer.textContent =(`too low`);
    }
}

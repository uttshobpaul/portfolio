const words = [
    "Java Backend Developer",
    "Spring Boot Learner",
    "Problem Solver",
    "Tech Enthusiast"
];

let word = 0;
let letter = 0;
let deleting = false;

const typing = document.getElementById("typing");

function type(){

    const current = words[word];

    if(!deleting){

        typing.textContent = current.substring(0,letter++);

        if(letter > current.length){

            deleting = true;

            setTimeout(type,1200);

            return;

        }

    }else{

        typing.textContent = current.substring(0,--letter);

        if(letter===0){

            deleting=false;

            word=(word+1)%words.length;

        }

    }

    setTimeout(type,deleting?60:120);

}

type();
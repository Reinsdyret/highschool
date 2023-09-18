let questionTitle = document.getElementById("title");

let inputs = [
    document.getElementById("one"),
    document.getElementById("two"),
    document.getElementById("three")
];

let labels = [
    document.getElementById("labelOne"),
    document.getElementById("labelTwo"),
    document.getElementById("labelThree")
];

let btnSubmit = document.getElementById("btnSubmit");

let questions = [];

let currentQuestion = 0;

let score = 0;

class Question {
    title;
    answers = null;
    rightAnswer = null;

    constructor(title){
        this.title = title;
    }

    displayQuestion() {
        questionTitle.innerHTML = this.title;
        for(let i = 0; i<labels.length; i++){
            labels[i].innerHTML = this.answers[i];
            inputs[i].checked = false;
        }
    }
}

let questionOne = new Question("Carbon-14 dating");
questionOne.answers = ["a carbon found in rocks that shows what type of rock they are", "analysis of the amount of carbon-14 within a once-living m aterial,used the determine apporximate age", "a way of dating between tribes"];
questionOne.rightAnswer = 1;
questions.push(questionOne);

let questionTwo = new Question("Nomad");
questionTwo.answers = ["a bob marley song about not getting angry", "a human who has no fixed home and travels from place to place in search of food and water", "a cavemen who stayed in one home their whole lives"];
questionTwo.rightAnswer = 1;
questions.push(questionTwo);

let questionThree = new Question("Artisan");
questionThree.answers = ["a guy with a beard", "a ruler", "a worker with skill in a specific class"];
questionThree.rightAnswer = 2;
questions.push(questionThree);

let questionFour = new Question("Theocracy");
questionFour.answers = ["a government in which the ruler ruled over the gods", "a government in which the ruler is seen as a god or chosen representative by the gods", "the goverment not dealing with the gods at all"];
questionFour.rightAnswer = 1;
questions.push(questionFour);

let questionFive = new Question("Patrick");
questionFive.answers = ["P", "E", "Riktig"];
questionFive.rightAnswer = 2;
questions.push(questionFive);

questionOne.displayQuestion();

btnSubmit.onclick = function(){
    if(currentQuestion == questions.length -1){
        showScore();
    }else{
        if(rightAnswer){
            score++;
        }
        currentQuestion++;
        questions[currentQuestion].displayQuestion();
        
    }
    
}

function showScore(){
    for(let i = 0; i<inputs.length; i++){
        inputs[i].style.visibility = "hidden";
    }
    questionTitle.innerHTML = "Score";
    labels[0].innerHTML = "Out of four questions.";
    labels[1].innerHTML = "You got " + score + " right!";
    labels[2].innerHTML = "";
}

function rightAnswer(){
    let bool = false;
    for(let i = 0; i<inputs.length; i++){
        if(inputs[i].checked && i == questions[currentQuestion].rightAnswer){
            bool = true;
        }
    }
    return bool;
}
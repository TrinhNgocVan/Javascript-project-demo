var questions  = [
    {
        questionText : "What is 2*5?",
        anwsers : [2, 5, 10, 15, 20],
        correctAnswer : 2,
        point : 1
    },
    {
        questionText : "What is 3*6?",
        anwsers : [2, 5, 10, 18, 20],
        correctAnswer : 3,
        point : 1
    },
    {
        questionText : "What is 3*7?",
        anwsers : [2, 5, 10, 18, 21],
        correctAnswer : 4,
        point : 1
    },
    {
        questionText : "What is 3*8?",
        anwsers : [2, 5, 10, 18, 24],
        correctAnswer : 4,
        point : 1
    }
]
var quizComponent = document.getElementById("quiz")
var nextButton  = document.getElementById("next")
var prevButton  = document.getElementById("prev")
var startButton  = document.getElementById("start")
var index = 0;
var chooseAnsValues = []


var component = function (){
    var loadQuestion = (question, index) => {
        console.log(chooseAnsValues)
        let chooseAnsValue = chooseAnsValues[index]
        let text = ""
        text += "<h6>Question "+ (index + 1) + " </h6>"
        text += "<p>"+ question.questionText + "</p>"
        text += '<ul>';
        // vong lap chay qua questions.anwsers
        question.anwsers.forEach((value,index)=>{
            text += '<li>';
            // <input type="radio" id="html" name="fav_language" value="HTML">
            text += '<input type="radio"'+((chooseAnsValue !== undefined && chooseAnsValue == value) ? 'checked' : '' )+' id = '+index+'   name = "answer" value = '+value+' >'+value+'</input>'
            text += '</li>';
        })
        text += '</ul>';
        quizComponent.innerHTML = text;
        quizComponent.style.display = "block"
    }
    var loadPage = function (){
        nextButton.addEventListener('click', function (){
            let currentQuestion  = questions[index]
            let chooseAnsValue;
            // load cau tra loi cua ngi tham gia
            currentQuestion.anwsers.forEach((value,index) =>{
                if(document.getElementById(index).checked){
                    // element này là element mà ngi dùng chọn
                    chooseAnsValue = document.getElementById(index).value
                }
            })
            chooseAnsValues[index] = chooseAnsValue
            index++;
            prevButton.style.display = "block";
            if(parseInt(index) === parseInt(questions.length - 1)) nextButton.style.display = 'none'
            loadQuestion(questions[index],index)
        })
        prevButton.addEventListener('click', function (){
            let currentQuestion  = questions[index]
            let chooseAnsValue;
            // load cau tra loi cua ngi tham gia
            currentQuestion.anwsers.forEach((value,index) =>{
                if(document.getElementById(index).checked){
                    // element này là element mà ngi dùng chọn
                    chooseAnsValue = document.getElementById(index).value
                }
            })
            chooseAnsValues[index] = chooseAnsValue
            index--;
            loadQuestion(questions[index],index)
            if(parseInt(index) === 0){
                prevButton.style.display = 'none'
                nextButton.style.display = 'block'
            }
        })
    }

    return {
        init : function(){
            loadQuestion(questions[index],index);
            loadPage();
        }
    }
}();
document.addEventListener('DOMContentLoaded', function (){component.init()});

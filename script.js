let questionEle = document.querySelector('.question')
let option1Ele = document.querySelector('#option1')
let option2Ele = document.querySelector('#option2')
let option3Ele = document.querySelector('#option3')
let option4Ele = document.querySelector('#option4')
let subBtn = document.querySelector('#subBtn')
 const answeres = document.querySelectorAll('.answere') // we will get NodeList() or Array. or take element via 
//const answeres = document.querySelectorAll('.inner-Container input') // we will get NodeList() or Array.
console.log(answeres);
const scoreAreaANDMessage = document.querySelector('.scoreAreaANDMessage')
const totalQuestRemaining = document.querySelector('.totalQuestionHave')
const contentArea = document.querySelector('.content-area')



// questionEle.innerHTML =  quizDB[questionCount].question
// option1Ele.innerHTML = quizDB[0].a
// option2Ele.innerHTML = quizDB[0].b
// option3Ele.innerHTML = quizDB[0].c
// option4Ele.innerHTML = quizDB[0].d

// let questionCount = -1;
let questionCount = 0;
let currentQuesNo = 1;
let score = 0;


const loadQuestion = ()=>{

    totalQuestRemaining.innerHTML = `Total Questions: ${currentQuesNo} / ${quizDB.length}`;   //! 1st ----------  my addition --------------


    // questionEle.innerHTML =  quizDB[questionCount].question
    // option1Ele.innerHTML = quizDB[0].a
    // option2Ele.innerHTML = quizDB[0].b
    // option3Ele.innerHTML = quizDB[0].c
    // option4Ele.innerHTML = quizDB[0].d

    // or

    //  const questLists = quizDB[questionCount];

    //  questionEle.innerHTML = questLists.question
    //  option1Ele.innerHTML = questLists.a
    //  option2Ele.innerHTML = questLists.b
    //  option3Ele.innerHTML = questLists.c
    //  option4Ele.innerHTML = questLists.d

    // or

    questionEle.innerHTML = quizDB[questionCount].question

    option1Ele.innerHTML = quizDB[questionCount].a
    option2Ele.innerHTML = quizDB[questionCount].b
    option3Ele.innerHTML = quizDB[questionCount].c
    option4Ele.innerHTML = quizDB[questionCount].d

       //console.log(questionCount); // Cannot read properties of undefined (reading 'question') at loadQuestion
  
}
loadQuestion();


subBtn.addEventListener("click", function(){
    // currentQuesNo++;
    // task 1 - every click new object or next object 's data show.

    // questionCount++;  // if u write here logic will give incorrect.
    // currentQuesNo++;    
    // loadQuestion();

    // if(questionCount < quizDB.length){
        
    //         currentQuesNo++;    
    //         loadQuestion();
    // }
    // loadQuestion();

    //todo task 1 - checking which element was choosed,clicked,selected.(behind the scenec it count and stores.)

    //todo user prespective vs developer prespective.
    //todo It gets happend firstly 1st task then task 2 is next quiz , question or object load but user pov it happens secondly 2nd task.

    const checkedAnswere = getCheckAnswere(); // which element input checked,clicked,selected we got in this variable.
    
    // console.log(checkedAnswere);

    if(checkedAnswere ===  quizDB[questionCount].ans){
        score++; //❤️ 
        console.log("you answere is correct.");
    };
     
    //todo task 2 - every click new object or next object come and then show object's data.

    questionCount++; //❤️ 

   
    if(questionCount < quizDB.length){

        currentQuesNo++; //❤️
        loadQuestion();

    }else{
        
        contentArea.setAttribute('hidden', true);  //! 2nd  ---------- my addition --------------

        // dynamic div container and its class and css load or layout display.
        scoreAreaANDMessage.innerHTML = ` 
        <div  class="scoreAreaDsgn">
                <p>You Scored ${score} / ${quizDB.length}</p>
                <p></p> 
                <button id="againBtn" onclick="location.reload()">Start Again</button> 
        </div> `

        //! 3rd  ---------- my addition --------------

        passCriteria = quizDB.length * 50 / 100 ;

        if(score < passCriteria){
            console.log("Oops! You failed. Can't get certificate. Please try agian.");
            scoreAreaANDMessage.firstElementChild.children[1].innerHTML = scoreAreaANDMessage.firstElementChild.children[1].innerHTML + `<p class='failDsgn'>Oops! You failed. Can't get certificate.</p>
        `;
            
        }else{
            console.log("Congratulation! You have successfully Passed!");
            scoreAreaANDMessage.firstElementChild.children[1].innerHTML = scoreAreaANDMessage.firstElementChild.children[1].innerHTML + `<p class='passDsgn'>Congratulation! You have successfully Passed!</p>
             <p> Download Certificate</p>`;
        }

        
        // scoreAreaANDMessage.innerHTML = `
        // <div  class="scoreArea">
        //         <p>You Scored ${score} / ${quizDB.length}</p>
        //         <button id="againBtn" onclick="location.reload()">Start Again</button> 
        // </div> `

    } 
     //todo task 3 - every click new object or next object come and then show object's data.

     deselectAll(); // bcz evry next time last one selsect.

    console.log(score);
})

let getCheckAnswere = ()=>{

    let selectedAnswer;

    // answeres.forEach((currentCheckedElem)=>{

    //     console.log(currentCheckedElem.checked); 

    //     if(currentCheckedElem.checked){ //checked we gets by default by js
    //         selectedAnswer = currentCheckedElem.id;
    //     }
    // })

    // return selectedAnswer;

    for(let currentCheckedElem of answeres){

    //   console.log(currentCheckedElem);
      console.log(currentCheckedElem.checked); // which no. of element is checked.clicked that return true.
      
        if(currentCheckedElem.checked){ //.checked property we gets by default by js
           selectedAnswer = currentCheckedElem.id; //📗❌
        }
        // return selectedAnswer; // we dont want at every loop return.
    }
    return selectedAnswer; // once loop completed only then return.
}
// getCheckAnswere()

let deselectAll = ()=>{
   
    // for(let currentCheckedElemm of answeres){
    //     currentCheckedElemm.checked = false; // false do checked so that it can do  unchecked.
    // }

    answeres.forEach((currentCheckedElemm)=>{

        currentCheckedElemm.checked = false;
    })
    
}


//! Learning:-

//todo Easy:

//todo Basic DOM Manipulation: It uses simple JavaScript to manipulate HTML elements (document.getElementById, querySelectorAll, etc.).
//todo Event Handling: Adding a basic event listener to the "Submit" button to check answers and proceed to the next question.
//todo Conditionals and Loops: Simple use of conditionals to check if an answer is correct and increment the score.

//todo Intermediate:

//todo " Dynamic Rendering " : The app dynamically loads new questions,images etc as the quiz progresses, which requires an understanding of DOM updates and how to handle data (like quizData array).
//todo " State Management " : Managing the current question, score, and checking for the end of the quiz are basic state management concepts.
//! " Radio Inputs " : Handling user inputs via radio buttons, which can be slightly tricky for beginners when fetching the selected answer.
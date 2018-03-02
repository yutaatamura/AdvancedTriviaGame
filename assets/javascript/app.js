$(document).ready(function() {

    //countdown timer that counts down 
    
    var interval;
    var countDown = 15;
    var triviaContent = {
        questions: [{
           question : "What does the \'E'\ stand for in E-Corp?",
           answer: "evil" 
        },
            {
            question : "In what city was the series filmed?",
            answer : "New York"
        },
            {
            question : "What group is Fsociety based on?",
            answer : "Anonymous"
        },
            {
            question : "What OS does Elliot primarily use?",
            answer : "Kali Linux"
        },
            {
            question : "What is Elliot's fish's name?",
            answer : "Qwerty"
        },
            {
            question: "Who implemented the hack that Elliot found on Allsafe's servers in Season 1?",
            answer : "Elliot"
        },
            {
            question: "What did the five/nine hack actually do?",
            answer : "Erased everyone's financial debt"
        },
            {
            question: "Who helped Fsociety hack the FBI?",
            answer : "Angela"
        },
            {
            question: "How does Elliot first greet viewers?",
            answer : "Hello, friend"
        },
            {
            question: "What was the name of the toxic dump cover up by E-Corp?",
            answer : "Washington Township Scandal"
        },
            {
            question: "What is the name of the leader of the Chinese hacker group, the Dark Army",
            answer : "White rose"
        }
    
    ]};
    
    // how to push objects within objects into an array
    // for (var i=0; i<triviaContent.length;i++) {
    //     answersArray = answersArray.push(triviaContent.)
    
    var answersArray = [
        "a",
        "b",
        "a",
        "c",
        "a",
        "c",
        "a",
        "b",
        "c",
        "a",
        "b"
    
    ]
    console.log(triviaContent.questions[0].question);
    var questionsArray = [];
    //for loop to build the array with all questions
    for (var i=0; i<triviaContent.questions.length; i++) {
        
        questionsArray.push(triviaContent.questions[i].question)
    };
    
    //.text to show the first count of counter before counting down
    $('#countDown').text(countDown);
    interval = setInterval(count, 1000);
    
    function count() {
        
        countDown--;
        $('#countDown').text(countDown);
        //make it stop at 0
        if (countDown === 0) {
            clearInterval(interval);
            disableSubmitButton();
            $('#messageBox').text("You ran out of time!");
        }
    }
    
    //create an array and populate with the user selected answers when the user clicks 'Submit' button 
    var selAnswerArr;
    var placeHolder = 1;
    $('#section1').css("display", "block")
    $('#question1').text(triviaContent.questions[0].question); 



    $('#submitButton').click(function() {
        for (var i=0; i<answersArray.length; i++) {
        //push the selected answer into the selAnswerArr
        selAnswerArr = $('input[name=answer'+[i+1]+']:checked').val();
        
    
        console.log(selAnswerArr);
            if (selAnswerArr === "") {
                $('#messageBox').text("Please answer question before submitting.");
                selAnswerArr = [];
                console.log(selAnswerArr);
                return;
                
            } else if (selAnswerArr === answersArray[i]) {
                    correctScore++;
                    $('#correctScore').text(correctScore);

                    $('#section'+placeHolder).css("display", "hidden");
                    $('#section'+(placeHolder+1)).css("display", "block");
                    placeHolder++;
                    console.log(placeHolder);
                    $('#question'+placeHolder).text(triviaContent.questions[placeHolder].question);
                    
                    



            } else {
                    wrongScore++;
                    $('#wrongScore').text(wrongScore);
            }
        };
        
        // if (selAnswerArr === answersArray.length) {
        //     clearInterval(interval);
        //     disableSubmitButton();
        //     $('#messageBox').text("Check out your results!");
        // }



    
    });
        
            //compare the selected answer array to the answers array by index; increment correctScore if match, wrongScore if no match.
            
    
    
    
    //reveal number of questions player answers correctly and incorrectly 
    
    var correctScore = 0;
    var wrongScore = 0;
    
    $('#correctScore').text(correctScore);
    $('#wrongScore').text(wrongScore);
    
    function disableSubmitButton() {
        $('#submitButton').prop("disabled", true);
    };
    
    function enableSubmitButton() {
        $('#submitButton').prop("disabled", false);
    };
    
});
    
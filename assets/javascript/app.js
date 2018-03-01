$(document).ready(function() {

    //countdown timer that counts down 
    
    var interval;
    var countDown = 15;
    var triviaContent = {
        one: {
           question : "What does the \'E'\ stand for in E-Corp?",
           answer: "evil" 
        },
        two: {
            question : "In what city was the series filmed?",
            answer : "New York"
        },
        three: {
            question : "What group is Fsociety based on?",
            answer : "Anonymous"
        },
        four: {
            question : "What OS does Elliot primarily use?",
            answer : "Kali Linux"
        },
        five: {
            question : "What is Elliot's fish's name?",
            answer : "Qwerty"
        },
        six: {
            question: "Who implemented the hack that Elliot found on Allsafe's servers in Season 1?",
            answer : "Elliot"
        },
        seven: {
            question: "What did the five/nine hack actually do?",
            answer : "Erased everyone's financial debt"
        },
        eight: {
            question: "Who helped Fsociety hack the FBI?",
            answer : "Angela"
        },
        nine: {
            question: "How does Elliot first greet viewers?",
            answer : "Hello, friend"
        },
        ten: {
            question: "What was the name of the toxic dump cover up by E-Corp?",
            answer : "Washington Township Scandal"
        },
        eleven: {
            question: "What is the name of the leader of the Chinese hacker group, the Dark Army",
            answer : "White rose"
        }
    }
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
    //how to simplify this code; loop?
    $('#question1').text(triviaContent.one.question);
    $('#question2').text(triviaContent.two.question);
    $('#question3').text(triviaContent.three.question);
    $('#question4').text(triviaContent.four.question);
    $('#question5').text(triviaContent.five.question);
    $('#question6').text(triviaContent.six.question);
    $('#question7').text(triviaContent.seven.question);
    $('#question8').text(triviaContent.eight.question);
    $('#question9').text(triviaContent.nine.question);
    $('#question10').text(triviaContent.ten.question);
    $('#question11').text(triviaContent.eleven.question);
    
    
    
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
    var selAnswerArr = [];
    $('#submitButton').click(function() {
    
    //push the selected answer into the selAnswerArr
    $('input[name=answer]:checked').each(function(){
        selAnswerArr.push($(this).val());
    });
    console.log(selAnswerArr);
    });
    
        //compare the selected answer array to the answers array by index; increment correctScore if match, wrongScore if no match.
        for (var i=0; i<answersArray.length; i++) {
        if (selAnswerArr.length != answersArray.length) {
            $('#messageBox').text("Please answer question before submitting.");
            selAnswerArr = [];
            console.log(selAnswerArr);
            return;
            
        } else if (selAnswerArr[i] === answersArray[i]) {
                correctScore++;
                $('#correctScore').text(correctScore);
        } else {
                wrongScore++;
                $('#wrongScore').text(wrongScore);
        }
    };
    
    if (selAnswerArr.length === answersArray.length) {
        clearInterval(interval);
        disableSubmitButton();
        $('#messageBox').text("Check out your results!");
    }
    
    });
    
    //reveal number of questions player answers correctly and incorrectly 
    
    var correctScore = 0;
    var wrongScore = 0;
    
    $('#correctScore').text(correctScore);
    $('#wrongScore').text(wrongScore);
    
    function disableSubmitButton() {
        $('#submitButton').prop("disabled", true);
    }
    
    function enableSubmitButton() {
        $('#submitButton').prop("disabled", false);
    }
    
    });
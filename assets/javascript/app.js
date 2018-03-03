$(document).ready(function() {

    //countdown timer that counts down 
    
    var interval;
    var countDown = 60;
    var triviaContent = {
        questions: [{
           question : "What does the \'E'\ stand for in E-Corp?",
           answer: "Evil" 
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
            question: "What is the name of the leader of the Chinese hacker group, the Dark Army?",
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
    
    startClock();

    function startClock() {
    countDown = 60;
    //.text to show the first count of counter before counting down
    $('#countDown').text(countDown);
    interval = setInterval(count, 1000);
    }
    
    function count() {
        
        countDown--;
        $('#countDown').text(countDown);
        //make it stop at 0
        if (countDown === 0) {
            clearInterval(interval);
            disableSubmitButton();
            $('#messageBox').text("You ran out of time!");
            displayOutTimeImg();
            
            setTimeout(displayResults, 3000)

        }
    }
    
    //create an array and populate with the user selected answers when the user clicks 'Submit' button 
    var selAnswer;
    var placeHolder = 0;
    $('#section0').css("display", "block")
    $('#question0').text(triviaContent.questions[placeHolder].question); 



    $('#submitButton').click(function() {
        console.log(selAnswer);
        //push the selected answer into the selAnswer
        selAnswer = $('input[name=answer]:checked').val();
        
    
        console.log(selAnswer);
            if (selAnswer === undefined) {
                $('#messageBox').text("Please answer question before submitting.");
                selAnswer = "";
                console.log(selAnswer);
                return;
                
            } else if (selAnswer === answersArray[placeHolder]) {
                    correctScore++;
                    $('#correctScore').text(correctScore);
                    displayWinImg();
                    if (countDown < 3 ) {
                        return;
                    } else {
                    setTimeout(displayNextQuestion,1200);
                    }
                    
            } else {
                    wrongScore++;
                    $('#wrongScore').text(wrongScore);
                    displayWrongImg();
                    if (countDown < 3 ) {
                        return;
                    } else {
                    setTimeout(displayNextQuestion,1500);
                    }

            }
        }); 
        
        // if (selAnswerArr === answersArray.length) {
        //     clearInterval(interval);
        //     disableSubmitButton();
        //     $('#messageBox').text("Check out your results!");
        // }
    var correctImage = "http://www.eatgeeklove.com/wp-content/uploads/2016/09/Their_official_Wallpaper-e1474492988738.jpg";
    var wrongImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtNFdfFMfCLlgPN2ojwbq1zpck-1-psEmgGJZxNZz-r2wquzY8";

    var outTimeImage = "https://pre00.deviantart.net/0bcf/th/pre/f/2015/223/d/7/e_corp_by_threebik-d958irt.jpg";

    function displayWinImg() {
        //hide current question block
        $('#section'+placeHolder).css("display", "none");
        //hide submit button
        $('#submitButton').css("display", "none");
        //show correctImage
        $('#pictureContainer').html("<h3 id=\"correctDisplay\" class=\"correctImage text-center\">Correct!</h3><img class=\"correctImage img-thumbnail img-responsive\" src=" + correctImage + ">");
        //erase correctImage after 1.2s
        setTimeout(eraseWinImg, 1200) 
    }    

    function displayWrongImg() {
        $('#section'+placeHolder).css("display", "none");
        $('#submitButton').css("display", "none");

        $('#pictureContainer').html("<h3 id=\"incorrectDisplay\" class=\"wrongImage text-center\">Incorrect!</h3><img class=\"wrongImage img-thumbnail img-responsive\" src=" + wrongImage + "><h6 id=\"correctAnsDisplay\" class=\"wrongImage\">Correct answer: <span id=\"correctAns\"></span></h6>");

        $('#correctAns').text(triviaContent.questions[placeHolder].answer);
        setTimeout(eraseWrongImg, 1500)
    }

    function displayOutTimeImg() {
        $('#section'+placeHolder).css("display", "none");
        $('#submitButton').css("display", "none");

        $('#pictureContainer').html("<h3 id=\"outTimeDisplay\" class=\"outTimeImage text-center\">You're out of time!</h3><img class=\"outTimeImage img-thumbnail img-responsive\" src=" + outTimeImage + ">");
        setTimeout(eraseOutTimeImg, 3000)
    }

    function displayResults() {
        //when count=0 or when all questions answered placeholder=13;
        //hide existing section and show results section
        $('#section'+placeHolder).css("display", "none");
        $('#submitButton').css("display", "none");
        $('#resultsPage').css("display", "block");
        //show correct and wrong score
        $('#correctVal').text(correctScore);
        $('#wrongVal').text(wrongScore);
        restart();
    }

    function eraseWinImg() {
        $('.correctImage').remove();
    }

    function eraseWrongImg() {
        $('.wrongImage').remove();
    }

    function eraseOutTimeImg() {
        $('.outTimeImage').remove();
    }
    
            //compare the selected answer array to the answers array by index; increment correctScore if match, wrongScore if no match.
    function displayNextQuestion() {
                    
        placeHolder++;
        
        $('#section'+placeHolder).css("display", "block");
        $('#question'+placeHolder).text(triviaContent.questions[placeHolder].question);
        $('#submitButton').css("display", "block");
    };    
    
    


    function restart() {
//restart game
        $('#restartButton').click(function() {
            placeHolder = 0;
            $('#resultsPage').css("display", "none");
            $('#section'+placeHolder).css("display", "block");
            $('#question'+placeHolder).text(triviaContent.questions[placeHolder].question);
            $('#submitButton').css("display", "block");
            enableSubmitButton();
            correctScore = 0;
            wrongScore = 0;
            $('#correctScore').text(correctScore);
            $('#wrongScore').text(wrongScore);
            startClock();
        })
    }
    
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
    
var startButton = document.getElementById('start-btn')
var ans1= document.getElementById('ans1-btn')
var ans1= document.getElementById('ans2-btn')
var ans1= document.getElementById('ans3-btn')
var ans1= document.getElementById('ans4-btn')


var questions = [
    {
      question: 'What is 6*6?',
      answers:[
        { text: '36', correct: true },
        { text: '22', correct: false },
        { text: '32', correct: false },
        { text: '24', correct: false }
      ]
    },
    {
      question: 'If you have cryophobia, what are you afraid of?',
      answers: [
        { text: 'Ice/cold', correct: true },
        { text: 'heights', correct: false },
        { text: 'speed', correct: false },
        { text: 'darkness', correct: false }
      ]
    },
    {
      question: 'What is seven cubed?',
      answers: [
        { text: '42', correct: false },
        { text: '343', correct: true },
        { text: '77', correct: false },
        { text: '56', correct: false }
      ]
    },
    {
      question: 'In what part of the body would you find the fibula?',
      answers: [
        { text: 'arm', correct: false },
        { text: 'leg', correct: true },
        { text: 'head', correct: false },
        { text: 'stomach', correct: false }
      ]
    }
  ]



 ;
 


function answer(object) {
    console.log(object, 'ibject in function answer');
     $('body').append('<div id="questions" class="q1" >' + object.question + '</div>');
     $('#questions').append('<div class="container"></div>');
     $('.container').append('<button id='+object.answers[0].correct+'class="ans2-btn" onclick="testall()">' + object.answers[0].text + '</button>'); 
     $('.container').append('<button id='+object.answers[1].correct+' class="ans1-btn" onclick="testall()">' + object.answers[1].text + '</button>');
     $('.container').append('<button id='+object.answers[2].correct+'  class="ans3-btn" onclick="testall()">' + object.answers[2].text + '</button>');
     $('.container').append('<button id='+object.answers[3].correct+' class="ans4-btn" onclick="testall()">' + object.answers[3].text + '</button>');
  }

  var thequestion = 0;
  var score = 0;

  answer(questions[thequestion]); 
  function all() {
    $('body').empty();
    console.log($(this).text()); 
    for (var i = 0; i < questions[thequestion].answers.length; i++) {
      
      if ($(this).text() === questions[thequestion].answers[i].text && questions[thequestion].answers[i].correct) {
       
        score += 1; 
      }
    }
    thequestion += 1; 
    console.log(thequestion, 'the questions');
    console.log(score, 'score');
    answer(questions[thequestion]); 
  }
 //answer({
   // question: 'In what part of the body would you find the fibula?',
   // answers: [
   //   { text: 'arm', correct: false },
     // { text: 'leg', correct: true },
    //  { text: 'head', correct: false },
    //  { text: 'stomach', correct: false }
   // ]
 // })


  

  


var questions = [
    {
      question: 'What is 6*6?',
      answers: [
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


 var score = 0;
  
 function answer (object){
    $('body').append('<div id="questions" class="q1" >'+object.question+'</div>');
    $('#questions').append('<div class="container"></div>');
    $('.container').append('<button id="ans2"  class="ans2-btn" onclick="nextQuestion">'+object.answers[0].text+'</button>');
    $('.container').append('<button id="ans1"  class="ans1-btn" onclick="nextQuestion">'+object.answers[1].text+'</button>');
    $('.container').append('<button id="ans3"  class="ans3-btn" onclick="nextQuestion">'+object.answers[2].text+'</button>');
    $('.container').append('<button id="ans4"  class="ans4-btn" onclick="nextQuestion">'+object.answers[3].text+'</button>');

}



 answer({
    question: 'In what part of the body would you find the fibula?',
    answers: [
      { text: 'arm', correct: false },
      { text: 'leg', correct: true },
      { text: 'head', correct: false },
      { text: 'stomach', correct: false }
    ]
  })
 

  function  all( array) {
      
  }


  


var questions = {
  q1:'36',
  q2:'Ice/cold',
  q3: '343',
  q4:'leg'
}

  var score = 0;
  $('#sc').hide();
  function testFunc(value,current,next) {
    if(value) {
      if(value === 'score') {
        score++
        $('.q4').hide(1000)
        $('#score').html(score)
        $('#sc').show();
        $('#submit').show();
      } else {

        score++
        console.log(current,next)
        $('.'+current).hide(1000)
        $('.'+next).show(1000)
        
      }
    }
  }
 function wrong(current,next){
      $('.'+current).hide(1000)
      $('.'+next).show(1000)
      
 }
 
 $("#start").click(function(){
  window.location.href = 'file:///C:/Users/21626/Desktop/the-project/question1.html';
});
  
$("#submit").click(function(){
  window.location.href = 'file:///C:/Users/21626/Desktop/the-project/index.html';
});
  


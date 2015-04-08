$(document).ready(function(){
    var turnCount=0;
    
      $('#board').find('td').on('click', function(){
            if (turnCount % 2 === 0){
              $(this).text('X'); 
              checkVictory('X');
            } else {
           //player 2's turn (O)
              $(this).text('O');
              checkVictory('O');
            }
          turnCount++;
          
      });
     
    
    function checkVictory(player){
       //top row check
        if ($('#board').find('#1').text() !== ''){
            if ($('#board').find('#1').text() == $('#board').find('#2').text()) {
                if ($('#board').find('#1').text() == $('#3').text()) {
                    alert(' '+player+' Wins!');
                }
            }
        //left column check
            if ($('#board').find('#1').text() == $('#board').find('#4').text()) {
                if ($('#board').find('#1').text() == $('#7').text()) {
                    alert(' '+player+' Wins!');
                }
            }
        //left diagonal check
            if ($('#board').find('#1').text() == $('#board').find('#5').text()) {
                if ($('#board').find('#1').text() == $('#9').text()) {
                    alert(' '+player+' Wins!');
                }
            }    
        }
        
       //middle column check
        if ($('#board').find('#2').text() !== ''){
            if ($('#board').find('#2').text() == $('#board').find('#5').text()) {
                if ($('#board').find('#2').text() == $('#8').text()) {
                    alert(' '+player+' Wins!');
                }
            }
        }
        
        //right column check
        if ($('#board').find('#3').text() !== ''){
            if ($('#board').find('#3').text() == $('#board').find('#6').text()) {
                if ($('#board').find('#3').text() == $('#9').text()) {
                    alert(' '+player+' Wins!');
                }
            }
            //right diag check
            if ($('#board').find('#3').text() == $('#board').find('#5').text()) {
                if ($('#board').find('#3').text() == $('#7').text()) {
                    alert(' '+player+' Wins!');
                }
            }
        }
        
        //middle row check
        
        if ($('#board').find('#4').text() !== ''){
            if ($('#board').find('#4').text() == $('#board').find('#5').text()) {
                if ($('#board').find('#4').text() == $('#6').text()) {
                    alert(' '+player+' Wins!');
                }
            }
        }
        
        //bottom row check
        if ($('#board').find('#7').text() !== ''){
            if ($('#board').find('#7').text() == $('#board').find('#8').text()) {
                if ($('#board').find('#7').text() == $('#9').text()) {
                    alert(' '+player+' Wins!');
                }
            }
        }        
  
    }

});
function Player(name,){
   this.name = name;
   this.score = 0;
   this.roundTotal = 0;
   this.totalScore = 0;
 };

 var player1 ="";
 var player2 ="";

 function diceRoll(){
   return Math.floor((Math.random()*6)+1);   
 };

 Player.prototype.roll = function(){
   
  this.roundTotal += this.score;
 };
$(document).ready(function(){
  player1 = new Player;
  player2 = new Player;
  
  $("#startbtn").click(function(){  
  player1.name = $("input#player1Name").val();
  player2.name =$("input#player2Name").val();
  $("#name1Out").text(player1.name);
  $("#name2Out").text(player2.name);
  });
  $("#player1Roll").click(function(){
     player1.score = diceRoll(); 
     player1.roll();
     $("#scoreOutput").text(player1.score);
     $("#roundOutput").text(player1.roundTotal);
     
  });
  $(document).click(function(){
    player2.score = diceRoll();
    player2.roll();
    $("#score2").text(player2.score);
    $("#round2").text(player2.roundTotal);
  });
});

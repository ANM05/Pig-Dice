function Player(name,score,roundTotal,totalScore){
   this.name = name;
   this.score = score;
   this.roundTotal = roundTotal;
   this.totalScore = totalScore;
 };

 var player1 ="";
 var player2 ="";

 function diceRoll(){
   return Math.floor((Math.random()*6)+1);
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
  $("#player1Roll").click(function(event){
     player1.score = diceRoll();
     
     $("#scoreOutput").text(player1.score);
     
  });
});

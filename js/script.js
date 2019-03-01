function Player(name,score,roundTotal,totalScore){
   this.name = name;
   this.score = score;
   this.roundTotal = roundTotal;
   this.totalScore = totalScore;
 };

 var player1 ="";
 var player2 ="";

 function diceRoll(){
   Math.floor((Math.random()*6)+1);
 };
$(document).ready(function(){
  $("#startbtn").click(function(){
  player1 = new Player;
  player2 = new Player;
  this.name = $("input#player1Name").val();
  this.name =$("input#player2Name").val();
  $("#name1Out").text(this.name);
  $("#name2Out").text(this.name);
  });
});

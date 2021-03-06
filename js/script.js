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

 Player.prototype.roll1 = function(){ 
   if(this.score!==1) {
  this.roundTotal += this.score;
  $("#message2").empty();   
   }
    else{
      this.roundTotal = 0;
      this.roundTotal = 0;
     $("#player1Roll").hide();
     $("#player2Roll").show();
     $("#message1").text("Oops!! you rolled a ONE!!");
         
   };
 };

 Player.prototype.roll2 = function(){ 
  if(this.score!==1) {
 this.roundTotal += this.score; 
 $("#message1").empty();  
  }
   else{
     this.roundTotal = 0;
     this.totalScore = 0;
    $("#player2Roll").hide();
    $("#player1Roll").show();
    $("#message2").text("Oops!! you rolled a ONE!!");  
      
  }; 
};

Player.prototype.hold1 = function(){
  $("#player2Roll").show();  
  this.totalScore+=this.roundTotal; 
  this.roundTotal-=this.roundTotal; 
};

Player.prototype.hold2 = function(){
  $("#player1Roll").show();
  this.totalScore+=this.roundTotal; 
  this.roundTotal-=this.roundTotal;   
};
function resetGame(){  
$("#name1Out").empty();
$("#name2Out").empty();
document.getElementById("formInput").reset();
$("#scoreOutput").empty();
$("#roundOutput").empty();
$("#totalOutput").empty();
$("#score2").empty();
$("#round2").empty();
$("#total2").empty();
};

Player.prototype.winner = function(){
  if(this.totalScore>=100){
    alert("Congratulations you are the winner");
  }
  else{

  }
}

$(document).ready(function(){
  player1 = new Player;
  player2 = new Player;  
  $("#formInput").submit(function(event){
    event.preventDefault();  
  player1.name = $("input#player1Name").val();
  player2.name =$("input#player2Name").val();
  $("#name1Out").text(player1.name);
  $("#name2Out").text(player2.name);
  });
  $("#player1Roll").click(function(){
     player1.score = diceRoll(); 
     player1.roll1();
     $("#scoreOutput").text(player1.score);
     $("#roundOutput").text(player1.roundTotal);
     
     
  });
  $("#player2Roll").click(function(){
    player2.score = diceRoll();
    player2.roll2();
    $("#score2").text(player2.score);
    $("#round2").text(player2.roundTotal);
  
  });

  $("#player1Hold").click(function(){
    player1.hold1();
    $("#totalOutput").text(player1.totalScore);
  });

  $("#player2Hold").click(function(){
   player2.hold2();
   $("#total2").text(player2.totalScore);
  });
  $("#reset").click(function(){
    resetGame();
  })
});

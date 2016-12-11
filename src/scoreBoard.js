function Scoreboard (){
  this.currentScore = [];
  this.frameCount = 0;
  this.scores = [];
};

  Scoreboard.prototype.firstRoll = function(scoreOne){
    this.currentScore.push(scoreOne);
    return this.currentScore;
  };

  Scoreboard.prototype.secondRoll = function(scoreTwo){
    this.currentScore.push(scoreTwo);
    return this.currentScore;
  };

  Scoreboard.prototype.calculateScore = function() {
    this.scores.push(this.currentScore.reduce(function(a,b){return a + b },0));
    return this.scores;
  };

  

describe("Scoreboard", function(){
  var scoreBoard;

  beforeEach(function(){
    scoreBoard = new Scoreboard;
  });

  it("should initialize with currentScore being an empty array", function(){
    expect(scoreBoard.currentScore).toEqual([]);
  });

  it("should set the players first score", function(){
    scoreBoard.firstRoll(3);
    expect(scoreBoard.currentScore).toContain(3);
  });


});

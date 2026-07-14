/* 7. The following object represents a basketball game and keeps track of the score as the
game progresses.

a) Modify each of the methods so that they can be ‘chained’ together and the last line of
the example code works

b) Add a new method to print the full time final score

c) Add a new object property to keep track of the number of fouls and a method to
increment it, similar but separate to the score. 
Include the foul count in the half time and full time console messages

d) Test your object by chaining all the method calls together in different combinations.
*/

const basketballGame = {
  score: 0,
  freeThrow() {
    this.score++;
  },
  basket() {
    this.score += 2;
  },
  threePointer() {
    this.score += 3;
  },
  halfTime() {
    console.log("Halftime score is " + this.score);
  },
};
//modify each of the above object methods to enable function chaining as below:
basketballGame
  .basket()
  .freeThrow()
  .freeThrow()
  .basket()
  .threePointer()
  .halfTime();


/* 
My Answer:
========================================
a) 
const basketballGame = {
  score: 0,
  freeThrow() {
    this.score++;
    return this;
  },
  basket() {
    this.score += 2;
    return this;
  },
  threePointer() {
    this.score += 3;
    return this;
  },
  halfTime() {
    console.log("Halftime score is " + this.score);
    return this;
  },
};

basketballGame
  .basket()
  .freeThrow()
  .freeThrow()
  .basket()
  .threePointer()
  .halfTime();

OUTPUT: Halftime score is 9

========================================
b) 
const basketballGame = {
  score: 0,
  freeThrow() {
    this.score++;
    return this;
  },
  basket() {
    this.score += 2;
    return this;
  },
  threePointer() {
    this.score += 3;
    return this;
  },
  halfTime() {
    console.log("Halftime score is " + this.score);
    return this;
  },

  fullTime() {
    console.log("Fulltime score is " + this.score);
    return this;
  }
};

basketballGame
  .basket()
  .freeThrow()
  .freeThrow()
  .basket()
  .threePointer()
  .halfTime()
  .fullTime();

OUTPUT: Halftime score is 9
Fulltime score is 9
========================================
c)

const basketballGame = {
  score: 0,
  fouls: 0,

  freeThrow() {
    this.score++;
    return this;
  },

  foul() {
    this.fouls++;
    return this;
  },

  basket() {
    this.score += 2;
    return this;
  },
  threePointer() {
    this.score += 3;
    return this;
  },
  halfTime() {
    console.log("Halftime score is " + this.score);
    console.log("Foul count is " + this.fouls);
    return this;
  },

  fullTime() {
    console.log("Fulltime score is " + this.score);
    console.log("Foul count is " + this.fouls);
    return this;
  },
};

basketballGame
  .basket()
  .freeThrow()
  .freeThrow()
  .basket()
  .threePointer()
  .foul()
  .halfTime()
  .fullTime();

OUTPUT:
Halftime score is 9
Foul count is 1
Fulltime score is 9
Foul count is 1

========================================
d)
const basketballGame = {
  score: 0,
  fouls: 0,

  freeThrow() {
    this.score++;
    return this;
  },

  foul() {
    this.fouls++;
    return this;
  },

  basket() {
    this.score += 2;
    return this;
  },
  threePointer() {
    this.score += 3;
    return this;
  },

  halfTime() {
    console.log("Halftime score is " + this.score);
    console.log("Foul count is " + this.fouls);
    return this;
  },

  fullTime() {
    console.log("Fulltime score is " + this.score);
    console.log("Foul count is " + this.fouls);
    return this;
  },
reset() {
  this.score = 0;    // set the score back to zero
  this.fouls = 0;    // set the fouls back to zero
  return this;
},

};

basketballGame
.reset()
  .basket()
  .foul()
  .freeThrow()
  .foul()
  .basket()
  .freeThrow()
  .basket()
  .threePointer()
  .basket()
  .foul()
  .threePointer()
  .halfTime()
  .fullTime();

====================Test 01====================
basketballGame
.reset()
.basket()
.basket()
.threePointer()
  .halfTime()
  .fullTime();

Output:  Halftime score is 7
Foul count is 0
Fulltime score is 7
Foul count is 0

====================Test 02====================
basketballGame
.reset()
.foul()
.foul()
.foul()
.freeThrow()
  .halfTime()
  .fullTime();

Output: 
Halftime score is 1
Foul count is 3
Fulltime score is 1
Foul count is 3

====================Test 03====================
basketballGame
.reset()
.freeThrow()
.basket()
.foul()
.threePointer()
  .halfTime()
  .fullTime();

Output: 
Halftime score is 6
Foul count is 1
Fulltime score is 6
Foul count is 1
========================================
*/

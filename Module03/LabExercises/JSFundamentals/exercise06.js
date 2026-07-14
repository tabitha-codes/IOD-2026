/* 6. 
a) Complete the inigo object by adding a lastName property and including it in the greeting.
b) Complete getCatchPhrase so that if the person argument has 6 fingers, it instead
prints his famous catch phrase to the console. 
HINT: see https://www.imdb.com/title/tt0093779/characters/nm0001597.
c) Update getCatchPhrase to use arrow function syntax and a conditional operator.
*/

// Original
const westley = {
  name: "Westley",
  numFingers: 5,
};
const rugen = {
  name: "Count Rugen",
  numFingers: 6,
};
const inigo = {
  firstName: "Inigo",
  greeting(person) {
    let greeting = `Hello ${person.name}, my name is ${this.firstName}. `;
    console.log(greeting + this.getCatchPhrase(person));
  },
  getCatchPhrase(person) {
    return "Nice to meet you.";
  },
};
inigo.greeting(westley);
inigo.greeting(rugen);

/* 
My Answers: (FULL CODE BELOW)

=======================================
a)
const westley = {
  name: "Westley",
  numFingers: 5,
};
const rugen = {
  name: "Count Rugen",
  numFingers: 6,
};

const inigo = {
  firstName: "Inigo",
  lastName: "Montoya",
  greeting(person) {
    let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastName}.`;
    console.log(greeting + this.getCatchPhrase(person));
  },

    getCatchPhrase(person) {
    return "Nice to meet you.";
  },
};
inigo.greeting(westley);
inigo.greeting(rugen);

=======================================
b)   
const westley = {
  name: "Westley",
  numFingers: 5,
};
const rugen = {
  name: "Count Rugen",
  numFingers: 6,
};

const inigo = {
  firstName: "Inigo",
  lastName: "Montoya",
  greeting(person) {
    let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastName}.`;
    console.log(greeting + this.getCatchPhrase(person));
  },

  getCatchPhrase(person) {
    if (person.numFingers === 6) {
      return " You killed my father. Prepare to die.";
    } else {
      return " Nice to meet you.";
    }
  },
};
inigo.greeting(westley);
inigo.greeting(rugen);

=======================================
c) FULL FINAL CODE:
const westley = {
  name: "Westley",
  numFingers: 5,
};

const rugen = {
  name: "Count Rugen",
  numFingers: 6,
};

const inigo = {
  firstName: "Inigo",
  lastName: "Montoya",
  greeting(person) {
    let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastName}.`;
    console.log(greeting + this.getCatchPhrase(person));
  },

getCatchPhrase: (person) => {
return person.numFingers === 6 ? " You killed my father. Prepare to die." : " Nice to meet you."
    }
}

inigo.greeting(westley);
inigo.greeting(rugen);
*/

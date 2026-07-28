
/*
9. Given the below salaries object, perform the following tasks.
let salaries = {
"Timothy" : 35000,
"David" : 25000,
"Mary" : 55000,
"Christina" : 75000,
"James" : 43000
};
a) Write a function sumSalaries(salaries) that calculates and returns the total of all
salaries
b) Write a function topEarner(salaries) that calculates and returns the name of the
person earning the highest salary*/

let salaries = {
"Timothy" : 35000,
"David" : 25000,
"Mary" : 55000,
"Christina" : 75000,
"James" : 43000
};


/* MY ANSWERS:

A] let salaries = {
"Timothy" : 35000,
"David" : 25000,
"Mary" : 55000,
"Christina" : 75000,
"James" : 43000
};

function sumSalaries(salaries){
   let total = 0;
  for (let key in salaries) {
    total += salaries[key];
  }
  return total;
}

console.log(sumSalaries(salaries))

OUTPUT: 233000
=====================================
B]function topEarner(salaries) {
  const entries = Object.entries(salaries);
  if (entries.length === 0) return null;

  return entries.reduce((max, current) => {
    return current[1] > max[1] ? current : max;
  })[0];
}

let salaries = {
"Timothy" : 35000,
"David" : 25000,
"Mary" : 55000,
"Christina" : 75000,
"James" : 43000
};

function sumSalaries(salaries){
   let total = 0;
  for (let key in salaries) {
    total += salaries[key];
  }
  return total;
}

// console.log(sumSalaries(salaries))
console.log(topEarner(salaries)); 

OUTPUT:  Christina
=====================================
*/
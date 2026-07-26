// 4. Write a function camelCase(cssProp) that changes dash-separated CSS properties like
// 'margin-left' into camel-cased 'marginLeft'.
// The function should remove all dashes, and uppercase the first letter of each word after a
// dash.
// b) Create variants of the camelCase function that use different types of for loops, and
// c) with and without the conditional operator.
// console.log(camelCase('margin-left')) // marginLeft
// console.log(camelCase('background-image')) // backgroundImage
// console.log(camelCase('display')) // display

console.log(camelCaseFor('margin-left')) // marginLeft
console.log(camelCaseFor('background-image')) // backgroundImage
console.log(camelCaseFor('display')) // display


/*
MY ANSWERS:

A]function camelCase(cssProp) {
  return cssProp
    .split('-')
    .map((word, index) =>
      index === 0                                             
      ? word
      : word.charAt(0).toUpperCase() + word.slice(1)      
    )
    .join('');
}

console.log(camelCase('margin-left')) // marginLeft
console.log(camelCase('background-image')) // backgroundImage
console.log(camelCase('display')) // display

OUTPUT: marginLeft
backgroundImage
display

=====================================
B]function camelCase(cssProp) {
  return cssProp
    .split('-')
    .map((word, index) =>{
     if (index === 0){                                            
          return word;          
      } else {
        return word.charAt(0).toUpperCase() + word.slice(1);
      }
    })
    .join('');
}


console.log(camelCase('margin-left')) // marginLeft
console.log(camelCase('background-image')) // backgroundImage
console.log(camelCase('display')) // display

OUTPUT: marginLeft
backgroundImage
display
=====================================
C]function camelCaseFor(cssProp) {
  const words = cssProp.split('-');     
  let result = '';                       

  for (let i = 0; i < words.length; i++) {
    
    if (i === 0) {
      result += words[i];                  
    } else {
      result += words[i].charAt(0).toUpperCase() + words[i].slice(1);                  
    }
  }

  return result;
}

console.log(camelCaseFor('margin-left')) // marginLeft
console.log(camelCaseFor('background-image')) // backgroundImage
console.log(camelCaseFor('display')) // display

OUTPUT:marginLeft
backgroundImage
display
=====================================

*/

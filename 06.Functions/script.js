//Function Declaration
function doSomeMath(a, b) {
  let c = a + b;
  return c;
}

//Function Expression
const doMoreMath = function (a, b) {
  let c = a * b;
  return c;
};

console.log("Do Some Math: ", doSomeMath(1, 5));
console.log("Do More Math: ", doMoreMath(4, 5));

//Immediately Invoked Function (IIFE)
(function () {
  let a = 5;
  let b = 9;
  let c = doSomeMath(a, b);
  console.log(`Sum of a + b = ${c}`);
})();

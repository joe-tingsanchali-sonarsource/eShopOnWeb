function checkEqual(a, b) {
    if (a == b) { // Noncompliant: using non-strict equality '=='
      return "Equal";
    } else {
      return "Not equal";
    }
  }
  
  console.log(checkEqual(0, false)); // Output: "Equal"
  
  var i =0;

const pi = 3.14;
pi = 3.14159; // Noncompliant: TypeError: invalid assignment to const 'pi'

const a = NaN;

if (a === NaN) { // Noncompliant: Always false
  console.log("a is not a number"); // This is dead code
}

if (a !== NaN) { // Noncompliant: Always true
  console.log("a is not NaN"); // This statement is not necessarily true
}

function checkEqual(a, b) {
    if (a == b) { // Noncompliant: using non-strict equality '=='
      return "Equal";
    } else {
      return "Not equal";
    }
  }
  
  console.log(checkEqual(0, false)); // Output: "Equal"
  
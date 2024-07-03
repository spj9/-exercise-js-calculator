// greeting
alert("Välkommen till En Simpel JavaScript Miniräknare!");

// ask for first number
let num1 = parseFloat(prompt("Ange det första numret: "));

// ask for second number
let num2 = parseFloat(prompt("Ange det andra numret: "));

// ask for calculation method
let method = prompt("Ange beräkningsmetod (+, -, *, /): ");

// perform calculation
if (method === "+") {
  let result = num1 + num2;
  alert(`Resultatet av tillägget är: ${result}`);
} else if (method === "-") {
  let result = num1 - num2;
  alert(`Resultatet av subtraktionen är: ${result}`);
} else if (method === "*") {
  let result = num1 * num2;
  alert(`Resultatet av multiplikationen är: ${result}`);
} else if (method === "/") {
  if (num2 !== 0) {
    let result = num1 / num2;
    alert(`Resultatet av divisionen är: ${result}`);
  } else {
    alert("FEL: Det går inte att dividera med noll!");
  }
} else {
  alert("FEL: Ogiltig beräkningsmetod!");
}

// say goodbye
alert("Tack för att du använde En Simpel JavaScript Miniräknare! Välkommen åter!");
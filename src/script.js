// Header form
function editHeader() {
  document.getElementById("headerForm").style.display = "grid";
}

function displayHeader() {
  let monthYear = document.querySelector("#monthYear");
  let quote = document.querySelector("#quote");
  let month = document.querySelector("#month");
  let year = document.querySelector("#year");
  let quoteForm = document.querySelector("#quoteForm");

  monthYear.innerHTML = `${month.value} ${year.value}`;
  quote.innerHTML = `${quoteForm.value}`;
  document.getElementById("headerForm").style.display = "none";
}

// Final calculation
function finalCalculation() {
  let aTotal = document.querySelector("#aTotal");
  let bTotal = document.querySelector("#bTotal");
  let cTotal = document.querySelector("#cTotal");
  let dTotal = document.querySelector("#dTotal");
  let leftAmount = document.querySelector("#leftTotal");
  console.log(aTotal + bTotal - cTotal - dTotal);

  //  leftAmount.innerHTML = `${}`;
}

// Create Budget
function addToList() {
  let inputName = document.querySelector(".input-name");
  let inputAmount = document.querySelector(".input-amount");
  let inputItem = document.querySelector(".input-item");
  let listItemName = document.querySelector(".list-item-name");
  let listItemAmount = document.querySelector(".list-item-amount");
  console.log(1);
  console.log(`${inputName.value}`);
  console.log(`${inputAmount.value}`);
  console.log(2);
  // document.getElementsByClassName(".list-item").style.display = "block";
  console.log(3);
  listItemName.innerHTML = `${inputName.value}`;
  listItemAmount.innerHTML = `${inputAmount.value}`;
  console.log(4);
  const newOl = document.createElement("li");
  const newOlInput = document.createTextNode(`${inputName.value}`);
  const newUl = document.createElement("li");
  const newUlInput = document.createTextNode(`${inputAmount.value}`);
  newOl.appendChild(newOlInput);
  newUl.appendChild(newUlInput);

  let previousItemName = document.getElementsByClassName(".previous-item-name");
  let previousItemAmount = document.getElementsByClassName(
    ".previous-item-amount"
  );
  // insert after does not work. need to find another way
  document.insertAfter(newOl, previousItemName);
  document.insertAfter(newUl, previousItemAmount);
}

document.body.onload = addElement;

function addElement() {
  // create a new div element
  const newDiv = document.createElement("div");

  // and give it some content
  const newContent = document.createTextNode("Hi there and greetings!");

  // add the text node to the newly created div
  newDiv.appendChild(newContent);

  // add the newly created element and its content into the DOM
  const currentDiv = document.getElementById("div1");
  document.body.insertBefore(newDiv, currentDiv);
}

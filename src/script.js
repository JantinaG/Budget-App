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

  console.log(`${inputName.value}`);
  console.log(`${inputAmount.value}`);

  document.getElementsByClassName(".list-item").style.display = "block";
  inputItem.innerHTML = `<div class="col-9">
          <ol>
            <li>${inputName.value}</li>
                      </ol>
        </div>
        <div class="col-3 text-end">
          <ul>
            <li>${inputAmount.value}</li>
            
          </ul>
        </div>`;
}

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

const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", function () {
  const searchValue = searchInput.value.toLowerCase();
  const rows = document.querySelectorAll("tbody tr");

  rows.forEach((row) => {
    const coffeeName = row.cells[0].innerText.toLowerCase();

    if (coffeeName.includes(searchValue)) {
      row.style.display = "";
    } else {
      row.style.display = "none";
    }
  });
});

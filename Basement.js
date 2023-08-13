let scrollToTopButton = document.querySelector(".scroll-to-top");
let admin = document.getElementById("administrator");
let article = document.getElementById("article");
let nav = document.getElementById("nav");
let overlay = document.querySelector(".overlay");
let vacancy1 = document.getElementById("vacancy-1");
let indicate1 = document.getElementById("indicate1");
let cancel = document.getElementById("cancelLogin");
//To top of the page when clicked
scrollToTopButton.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// This function hide the nav bar of accommodation page when user click on Administrator
function hideNav() {
  if (nav.style.display === "none") {
    nav.style.display = "block";
  } else {
    nav.style.display = "none";
  }
}
// This function hide body content of accommodation page when user click on Administrator
function adminView() {
  if (article.style.display === "none") {
    article.style.display = "block";
  } else {
    article.style.display = "none";
  }
}
//this function bring back nav bar when user click cancel
function toggleBar() {
  nav.style.display = "block";
}
function toggleBody() {
  article.style.display = "block";
}

//event listeners for showing apartment description when user click on "i" of particular apartment
admin.addEventListener("click", adminView);
admin.addEventListener("click", hideNav);
cancel.addEventListener("click", toggleBar);
cancel.addEventListener("click", toggleBody);

//Retrieving store values from web-browser local storage
window.addEventListener("DOMContentLoaded", function () {
  //retrieve for admin 1
  const singlePriceAdmin1Input = document.getElementById("single-room-admin-1");
  const doublePriceAdmin1Input = document.getElementById("double-room-admin-1");
  const vacancyAdmin1Input = document.getElementById("vacancy-1");
  singlePriceAdmin1Input.value =
    localStorage.getItem("singlePriceAdmin1") || "";
  doublePriceAdmin1Input.value =
    localStorage.getItem("doublePriceAdmin1") || "";
  vacancyAdmin1Input.value = localStorage.getItem("vacancyAdmin1") || "";
  // updating cells with stored values for admin1
  const singlePriceAdmin1Cell = document.getElementById("single-price-admin-1");
  const doublePriceAdmin1Cell = document.getElementById("double-price-admin-1");
  const vacancyAdmin1Cell = document.getElementById("vacancy-admin-1");
  singlePriceAdmin1Cell.textContent =
    "R" + (localStorage.getItem("singlePriceAdmin1") || "850");
  doublePriceAdmin1Cell.textContent =
    "R" + (localStorage.getItem("doublePriceAdmin1") || "500");
  vacancyAdmin1Cell.textContent =
    "+" + (localStorage.getItem("vacancyAdmin1") || "3");
  //adding event listeners when clicking save changes button
  document
    .getElementById("save-changes-admin1")
    .addEventListener("click", function () {
      // Update local storage with input values
      localStorage.setItem("singlePriceAdmin1", singlePriceAdmin1Input.value);
      localStorage.setItem("doublePriceAdmin1", doublePriceAdmin1Input.value);
      localStorage.setItem("vacancyAdmin1", vacancyAdmin1Input.value);
      // Update table cells with input values
      singlePriceAdmin1Cell.textContent =
        "R" + singlePriceAdmin1Input.value + ".00";
      doublePriceAdmin1Cell.textContent =
        "R" + doublePriceAdmin1Input.value + ".00";
      vacancyAdmin1Cell.textContent = "+" + vacancyAdmin1Input.value;
    });
  // retrieve data for admin 2
  const singlePriceAdmin2Input = document.getElementById("single-room-admin-2");
  const doublePriceAdmin2Input = document.getElementById("double-room-admin-2");
  const vacancyAdmin2Input = document.getElementById("vacancy-2");
  singlePriceAdmin2Input.value =
    localStorage.getItem("singlePriceAdmin2") || "";
  doublePriceAdmin2Input.value =
    localStorage.getItem("doublePriceAdmin2") || "";
  vacancyAdmin2Input.value = localStorage.getItem("vacancyAdmin2") || "";
  //updating cells with stored value for admin2
  const singlePriceAdmin2Cell = document.getElementById("single-price-admin-2");
  const doublePriceAdmin2Cell = document.getElementById("double-price-admin-2");
  const vacancyAdmin2Cell = document.getElementById("vacancy-admin-2");
  singlePriceAdmin2Cell.textContent =
    "R" + (localStorage.getItem("singlePriceAdmin2") || "850");
  doublePriceAdmin2Cell.textContent =
    "R" + (localStorage.getItem("doublePriceAdmin2") || "500");
  vacancyAdmin2Cell.textContent =
    "+" + (localStorage.getItem("vacancyAdmin2") || "3");
  //adding event listeners when clicking save changes button admin 2
  document
    .getElementById("save-changes-admin2")
    .addEventListener("click", function () {
      localStorage.setItem("singlePriceAdmin2", singlePriceAdmin2Input.value);
      localStorage.setItem("doublePriceAdmin2", doublePriceAdmin2Input.value);
      localStorage.setItem("vacancyAdmin2", vacancyAdmin2Input.value);
      //updating table cells with input
      singlePriceAdmin2Cell.textContent =
        "R" + singleAPriceAdmin2Input.value + ".00";
      doublePriceAdmin2Cell.textContent =
        "R" + doublePriceAdmin2Input.value + ".00";
      vacancyAdmin2Cell.textContent = "+" + vacancyAdmin2Input.value;
    });
  //retrieve data for admin 3
  const singlePriceAdmin3Input = document.getElementById("single-room-admin-3");
  const doublePriceAdmin3Input = document.getElementById("double-room-admin-3");
  const vacancyAdmin3Input = document.getElementById("vacancy-3");
  singlePriceAdmin3Input.value =
    localStorage.getItem("singlePriceAdmin3") || "";
  doublePriceAdmin3Input.value =
    localStorage.getItem("doublePriceAdmin3") || "";
  vacancyAdmin3Input.value = localStorage.getItem("vacancyAdmin3") || "";
  //updating cells with stored value for admin3
  const singlePriceAdmin3Cell = document.getElementById("single-price-admin-3");
  const doublePriceAdmin3Cell = document.getElementById("double-price-admin-3");
  const vacancyAdmin3Cell = document.getElementById("vacancy-admin-3");
  singlePriceAdmin3Cell.textContent =
    "R" + (localStorage.getItem("singlePriceAdmin3") || "850");
  doublePriceAdmin3Cell.textContent =
    "R" + (localStorage.getItem("doublePriceAdmin3") || "500");
  vacancyAdmin3Cell.textContent =
    "+" + (localStorage.getItem("vacancyAdmin3") || "3");
  //adding event listeners when clicking save changes button admin 3
  document
    .getElementById("save-changes-admin3")
    .addEventListener("click", function () {
      localStorage.setItem("singlePriceAdmin3", singlePriceAdmin3Input.value);
      localStorage.setItem("doublePriceAdmin3", doublePriceAdmin3Input.value);
      localStorage.setItem("vacancyAdmin3", vacancyAdmin3Input.value);
      //updating table cells with input
      singlePriceAdmin3Cell.textContent =
        "R" + singleAPriceAdmin3Input.value + ".00";
      doublePriceAdmin3Cell.textContent =
        "R" + doublePriceAdmin3Input.value + ".00";
      vacancyAdmin3Cell.textContent = "+" + vacancyAdmin3Input.value;
    });
  //retrieve data for admin 4
  const singlePriceAdmin4Input = document.getElementById("single-room-admin-4");
  const doublePriceAdmin4Input = document.getElementById("double-room-admin-4");
  const vacancyAdmin4Input = document.getElementById("vacancy-4");
  singlePriceAdmin4Input.value =
    localStorage.getItem("singlePriceAdmin4") || "";
  doublePriceAdmin4Input.value =
    localStorage.getItem("doublePriceAdmin4") || "";
  vacancyAdmin4Input.value = localStorage.getItem("vacancyAdmin4") || "";
  //updating cells with stored value for admin4
  const singlePriceAdmin4Cell = document.getElementById("single-price-admin-4");
  const doublePriceAdmin4Cell = document.getElementById("double-price-admin-4");
  const vacancyAdmin4Cell = document.getElementById("vacancy-admin-4");
  singlePriceAdmin4Cell.textContent =
    "R" + (localStorage.getItem("singlePriceAdmin4") || "850");
  doublePriceAdmin4Cell.textContent =
    "R" + (localStorage.getItem("doublePriceAdmin4") || "500");
  vacancyAdmin4Cell.textContent =
    "+" + (localStorage.getItem("vacancyAdmin4") || "3");
  //adding event listeners when clicking save changes button admin 4
  document
    .getElementById("save-changes-admin4")
    .addEventListener("click", function () {
      localStorage.setItem("singlePriceAdmin4", singlePriceAdmin4Input.value);
      localStorage.setItem("doublePriceAdmin4", doublePriceAdmin4Input.value);
      localStorage.setItem("vacancyAdmin4", vacancyAdmin4Input.value);
      //updating table cells with input
      singlePriceAdmin4Cell.textContent =
        "R" + singlePriceAdmin4Input.value + ".00";
      doublePriceAdmin4Cell.textContent =
        "R" + doublePriceAdmin4Input.value + ".00";
      vacancyAdmin4Cell.textContent = "+" + vacancyAdmin4Input.value;
    });
  //retrieve data for admin 5
  const singlePriceAdmin5Input = document.getElementById("single-room-admin-5");
  const doublePriceAdmin5Input = document.getElementById("double-room-admin-5");
  const vacancyAdmin5Input = document.getElementById("vacancy-5");
  singlePriceAdmin5Input.value =
    localStorage.getItem("singlePriceAdmin-5") || "";
  doublePriceAdmin5Input.value =
    localStorage.getItem("doublePriceAdmin5") || "";
  vacancyAdmin5Input.value = localStorage.getItem("vacancyAdmin5") || "";
  //updating cells with stored value for admin5
  const singlePriceAdmin5Cell = document.getElementById("single-price-admin-5");
  const doublePriceAdmin5Cell = document.getElementById("double-price-admin-5");
  const vacancyAdmin5Cell = document.getElementById("vacancy-admin-5");
  singlePriceAdmin5Cell.textContent =
    "R" + (localStorage.getItem("singlePriceAdmin5") || "850");
  doublePriceAdmin5Cell.textContent =
    "R" + (localStorage.getItem("doublePriceAdmin5") || "500");
  vacancyAdmin5Cell.textContent =
    "+" + (localStorage.getItem("vacancyAdmin5") || "3");
  //adding event listeners when clicking save changes button admin 5
  document
    .getElementById("save-changes-admin5")
    .addEventListener("click", function () {
      localStorage.setItem("singlePriceAdmin5", singlePriceAdmin5Input.value);
      localStorage.setItem("doublePriceAdmin5", doublePriceAdmin5Input.value);
      localStorage.setItem("vacancyAdmin5", vacancyAdmin5Input.value);
      //updating table cells with input
      singlePriceAdmin5Cell.textContent =
        "R" + singlePriceAdmin5Input.value + ".00";
      doublePriceAdmin5Cell.textContent =
        "R" + doublePriceAdmin5Input.value + ".00";
      vacancyAdmin5Cell.textContent = "+" + vacancyAdmin5Input.value;
    });
  //retrieve data for admin 6
  const singlePriceAdmin6Input = document.getElementById("single-room-admin-6");
  const doublePriceAdmin6Input = document.getElementById("double-room-admin-6");
  const vacancyAdmin6Input = document.getElementById("vacancy-6");
  singlePriceAdmin6Input.value =
    localStorage.getItem("singlePriceAdmin6") || "";
  doublePriceAdmin6Input.value =
    localStorage.getItem("doublePriceAdmin6") || "";
  vacancyAdmin6Input.value = localStorage.getItem("vacancyAdmin6") || "";
  //updating cells with stored value for admin6
  const singlePriceAdmin6Cell = document.getElementById("single-price-admin-6");
  const doublePriceAdmin6Cell = document.getElementById("double-price-admin-6");
  const vacancyAdmin6Cell = document.getElementById("vacancy-admin-6");
  singlePriceAdmin6Cell.textContent =
    "R" + (localStorage.getItem("singlePriceAdmin6") || "850");
  doublePriceAdmin6Cell.textContent =
    "R" + (localStorage.getItem("doublePriceAdmin6") || "500");
  vacancyAdmin6Cell.textContent =
    "+" + (localStorage.getItem("vacancyAdmin6") || "3");
  //adding event listeners when clicking save changes button admin 6
  document
    .getElementById("save-changes-admin6")
    .addEventListener("click", function () {
      localStorage.setItem("singlePriceAdmin6", singlePriceAdmin6Input.value);
      localStorage.setItem("doublePriceAdmin6", doublePriceAdmin6Input.value);
      localStorage.setItem("vacancyAdmin6", vacancyAdmin6Input.value);
      //updating table cells with input
      singlePriceAdmin6Cell.textContent =
        "R" + singlePriceAdmin6Input.value + ".00";
      doublePriceAdmin6Cell.textContent =
        "R" + doublePriceAdmin6Input.value + ".00";
      vacancyAdmin6Cell.textContent = "+" + vacancyAdmin6Input.value;
    });
  //retrieve data for admin 7
  const singlePriceAdmin7Input = document.getElementById("single-room-admin-7");
  const doublePriceAdmin7Input = document.getElementById("double-room-admin-7");
  const vacancyAdmin7Input = document.getElementById("vacancy-7");
  singlePriceAdmin7Input.value =
    localStorage.getItem("singlePriceAdmin7") || "";
  doublePriceAdmin7Input.value =
    localStorage.getItem("doublePriceAdmin7") || "";
  vacancyAdmin7Input.value = localStorage.getItem("vacancyAdmin7") || "";
  //updating cells with stored value for admin7
  const singlePriceAdmin7Cell = document.getElementById("single-price-admin-7");
  const doublePriceAdmin7Cell = document.getElementById("double-price-admin-7");
  const vacancyAdmin7Cell = document.getElementById("vacancy-admin-7");
  singlePriceAdmin7Cell.textContent =
    "R" + (localStorage.getItem("singlePriceAdmin7") || "850");
  doublePriceAdmin7Cell.textContent =
    "R" + (localStorage.getItem("doublePriceAdmin7") || "500");
  vacancyAdmin7Cell.textContent =
    "+" + (localStorage.getItem("vacancyAdmin7") || "3");
  //adding event listeners when clicking save changes button admin 7
  document
    .getElementById("save-changes-admin7")
    .addEventListener("click", function () {
      localStorage.setItem("singlePriceAdmin7", singlePriceAdmin7Input.value);
      localStorage.setItem("doublePriceAdmin7", doublePriceAdmin7Input.value);
      localStorage.setItem("vacancyAdmin7", vacancyAdmin7Input.value);
      //updating table cells with input
      singlePriceAdmin7Cell.textContent =
        "R" + singlePriceAdmin7Input.value + ".00";
      doublePriceAdmin7Cell.textContent =
        "R" + doublePriceAdmin7Input.value + ".00";
      vacancyAdmin7Cell.textContent = "+" + vacancyAdmin7Input.value;
    });
  //retrieve data for admin 8
  const singlePriceAdmin8Input = document.getElementById("single-room-admin-8");
  const doublePriceAdmin8Input = document.getElementById("double-room-admin-8");
  const vacancyAdmin8Input = document.getElementById("vacancy-8");
  singlePriceAdmin8Input.value =
    localStorage.getItem("singlePriceAdmin8") || "";
  doublePriceAdmin8Input.value =
    localStorage.getItem("doublePriceAdmin8") || "";
  vacancyAdmin8Input.value = localStorage.getItem("vacancyAdmin8") || "";
  //updating cells with stored value for admin 8
  const singlePriceAdmin8Cell = document.getElementById("single-price-admin-8");
  const doublePriceAdmin8Cell = document.getElementById("double-price-admin-8");
  const vacancyAdmin8Cell = document.getElementById("vacancy-admin-8");
  singlePriceAdmin8Cell.textContent =
    "R" + (localStorage.getItem("singlePriceAdmin8") || "850");
  doublePriceAdmin8Cell.textContent =
    "R" + (localStorage.getItem("doublePriceAdmin8") || "500");
  vacancyAdmin8Cell.textContent =
    "+" + (localStorage.getItem("vacancyAdmin8") || "3");
  //adding event listeners when clicking save changes button admin 8
  document
    .getElementById("save-changes-admin8")
    .addEventListener("click", function () {
      localStorage.setItem("singlePriceAdmin8", singlePriceAdmin8Input.value);
      localStorage.setItem("doublePriceAdmin8", doublePriceAdmin8Input.value);
      localStorage.setItem("vacancyAdmin8", vacancyAdmin8Input.value);
      //updating table cells with input
      singlePriceAdmin8Cell.textContent =
        "R" + singlePriceAdmin8Input.value + ".00";
      doublePriceAdmin8Cell.textContent =
        "R" + doublePriceAdmin8Input.value + ".00";
      vacancyAdmin8Cell.textContent = "+" + vacancyAdmin8Input.value;
    });
  //retrieve data for admin 9
  const singlePriceAdmin9Input = document.getElementById("single-room-admin-9");
  const doublePriceAdmin9Input = document.getElementById("double-room-admin-9");
  const vacancyAdmin9Input = document.getElementById("vacancy-9");
  singlePriceAdmin9Input.value =
    localStorage.getItem("singlePriceAdmin9") || "";
  doublePriceAdmin9Input.value =
    localStorage.getItem("doublePriceAdmin9") || "";
  vacancyAdmin9Input.value = localStorage.getItem("vacancyAdmin9") || "";
  //updating cells with stored value for admin9
  const singlePriceAdmin9Cell = document.getElementById("single-price-admin-9");
  const doublePriceAdmin9Cell = document.getElementById("double-price-admin-9");
  const vacancyAdmin9Cell = document.getElementById("vacancy-admin-9");
  singlePriceAdmin9Cell.textContent =
    "R" + (localStorage.getItem("singlePriceAdmin9") || "850");
  doublePriceAdmin9Cell.textContent =
    "R" + (localStorage.getItem("doublePriceAdmin9") || "500");
  vacancyAdmin9Cell.textContent =
    "+" + (localStorage.getItem("vacancyAdmin9") || "3");
  //adding event listeners when clicking save changes button admin 9
  document
    .getElementById("save-changes-admin9")
    .addEventListener("click", function () {
      localStorage.setItem("singlePriceAdmin9", singlePriceAdmin9Input.value);
      localStorage.setItem("doublePriceAdmin9", doublePriceAdmin9Input.value);
      localStorage.setItem("vacancyAdmin9", vacancyAdmin9Input.value);
      //updating table cells with input
      singlePriceAdmin9Cell.textContent =
        "R" + singleAPriceAdmin9Input.value + ".00";
      doublePriceAdmin9Cell.textContent =
        "R" + doublePriceAdmin9Input.value + ".00";
      vacancyAdmin9Cell.textContent = "+" + vacancyAdmin9Input.value;
    });
  //retrieve data for admin 10
  const singlePriceAdmin10Input = document.getElementById(
    "single-room-admin-10"
  );
  const doublePriceAdmin10Input = document.getElementById(
    "double-room-admin-10"
  );
  const vacancyAdmin10Input = document.getElementById("vacancy-10");
  singlePriceAdmin10Input.value =
    localStorage.getItem("singlePriceAdmin10") || "";
  doublePriceAdmin10Input.value =
    localStorage.getItem("doublePriceAdmin10") || "";
  vacancyAdmin10Input.value = localStorage.getItem("vacancyAdmin10") || "";
  //updating cells with stored value for admin10
  const singlePriceAdmin10Cell = document.getElementById(
    "single-price-admin-10"
  );
  const doublePriceAdmin10Cell = document.getElementById(
    "double-price-admin-10"
  );
  const vacancyAdmin10Cell = document.getElementById("vacancy-admin-10");
  singlePriceAdmin10Cell.textContent =
    "R" + (localStorage.getItem("singlePriceAdmin10") || "850");
  doublePriceAdmin10Cell.textContent =
    "R" + (localStorage.getItem("doublePriceAdmin10") || "500");
  vacancyAdmin10Cell.textContent =
    "+" + (localStorage.getItem("vacancyAdmin10") || "3");
  //adding event listeners when clicking save changes button admin 10
  document
    .getElementById("save-changes-admin10")
    .addEventListener("click", function () {
      localStorage.setItem("singlePriceAdmin10", singlePriceAdmin10Input.value);
      localStorage.setItem("doublePriceAdmin10", doublePriceAdmin10Input.value);
      localStorage.setItem("vacancyAdmin10", vacancyAdmin10Input.value);
      //updating table cells with input
      singlePriceAdmin10Cell.textContent =
        "R" + singlePriceAdmin10Input.value + ".00";
      doublePriceAdmin10Cell.textContent =
        "R" + doublePriceAdmin10Input.value + ".00";
      vacancyAdmin10Cell.textContent = "+" + vacancyAdmin10Input.value;
    });
  //retrieve data for admin 11
  const singlePriceAdmin11Input = document.getElementById(
    "single-room-admin-11"
  );
  const doublePriceAdmin11Input = document.getElementById(
    "double-room-admin-11"
  );
  const vacancyAdmin11Input = document.getElementById("vacancy-11");
  singlePriceAdmin11Input.value =
    localStorage.getItem("singlePriceAdmin11") || "";
  doublePriceAdmin11Input.value =
    localStorage.getItem("doublePriceAdmin11") || "";
  vacancyAdmin11Input.value = localStorage.getItem("vacancyAdmin11") || "";
  //updating cells with stored value for admin11
  const singlePriceAdmin11Cell = document.getElementById(
    "single-price-admin-11"
  );
  const doublePriceAdmin11Cell = document.getElementById(
    "double-price-admin-11"
  );
  const vacancyAdmin11Cell = document.getElementById("vacancy-admin-11");
  singlePriceAdmin11Cell.textContent =
    "R" + (localStorage.getItem("singlePriceAdmin11") || "850");
  doublePriceAdmin11Cell.textContent =
    "R" + (localStorage.getItem("doublePriceAdmin11") || "500");
  vacancyAdmin11Cell.textContent =
    "+" + (localStorage.getItem("vacancyAdmin11") || "3");
  //adding event listeners when clicking save changes button admin 11
  document
    .getElementById("save-changes-admin11")
    .addEventListener("click", function () {
      localStorage.setItem("singlePriceAdmin11", singlePriceAdmin11Input.value);
      localStorage.setItem("doublePriceAdmin11", doublePriceAdmin11Input.value);
      localStorage.setItem("vacancyAdmin11", vacancyAdmin11Input.value);
      //updating table cells with input
      singlePriceAdmin11Cell.textContent =
        "R" + singlePriceAdmin11Input.value + ".00";
      doublePriceAdmin11Cell.textContent =
        "R" + doublePriceAdmin11Input.value + ".00";
      vacancyAdmin11Cell.textContent = "+" + vacancyAdmin11Input.value;
    });
  //retrieve data for admin 12
  const singlePriceAdmin12Input = document.getElementById(
    "single-room-admin-12"
  );
  const doublePriceAdmin12Input = document.getElementById(
    "double-room-admin-12"
  );
  const vacancyAdmin12Input = document.getElementById("vacancy-12");
  singlePriceAdmin12Input.value =
    localStorage.getItem("singlePriceAdmin12") || "";
  doublePriceAdmin12Input.value =
    localStorage.getItem("doublePriceAdmin12") || "";
  vacancyAdmin12Input.value = localStorage.getItem("vacancyAdmin12") || "";
  //updating cells with stored value for admin12
  const singlePriceAdmin12Cell = document.getElementById(
    "single-price-admin-12"
  );
  const doublePriceAdmin12Cell = document.getElementById(
    "double-price-admin-12"
  );
  const vacancyAdmin12Cell = document.getElementById("vacancy-admin-12");
  singlePriceAdmin12Cell.textContent =
    "R" + (localStorage.getItem("singlePriceAdmin12") || "850");
  doublePriceAdmin12Cell.textContent =
    "R" + (localStorage.getItem("doublePriceAdmin12") || "500");
  vacancyAdmin12Cell.textContent =
    "+" + (localStorage.getItem("vacancyAdmin12") || "3");
  //adding event listeners when clicking save changes button admin 12
  document
    .getElementById("save-changes-admin12")
    .addEventListener("click", function () {
      localStorage.setItem("singlePriceAdmin12", singlePriceAdmin12Input.value);
      localStorage.setItem("doublePriceAdmin12", doublePriceAdmin12Input.value);
      localStorage.setItem("vacancyAdmin12", vacancyAdmin12Input.value);
      //updating table cells with input
      singlePriceAdmin12Cell.textContent =
        "R" + singlePriceAdmin12Input.value + ".00";
      doublePriceAdmin12Cell.textContent =
        "R" + doublePriceAdmin12Input.value + ".00";
      vacancyAdmin12Cell.textContent = "+" + vacancyAdmin12Input.value;
    });
  //retrieve data for admin 13
  const singlePriceAdmin13Input = document.getElementById(
    "single-room-admin-13"
  );
  const doublePriceAdmin13Input = document.getElementById(
    "double-room-admin-13"
  );
  const vacancyAdmin13Input = document.getElementById("vacancy-13");
  singlePriceAdmin13Input.value =
    localStorage.getItem("singlePriceAdmin13") || "";
  doublePriceAdmin13Input.value =
    localStorage.getItem("doublePriceAdmin13") || "";
  vacancyAdmin13Input.value = localStorage.getItem("vacancyAdmin13") || "";
  //updating cells with stored value for admin13
  const singlePriceAdmin13Cell = document.getElementById(
    "single-price-admin-13"
  );
  const doublePriceAdmin13Cell = document.getElementById(
    "double-price-admin-13"
  );
  const vacancyAdmin13Cell = document.getElementById("vacancy-admin-13");
  singlePriceAdmin13Cell.textContent =
    "R" + (localStorage.getItem("singlePriceAdmin13") || "850");
  doublePriceAdmin13Cell.textContent =
    "R" + (localStorage.getItem("doublePriceAdmin13") || "500");
  vacancyAdmin13Cell.textContent =
    "+" + (localStorage.getItem("vacancyAdmin13") || "3");
  //adding event listeners when clicking save changes button admin 13
  document
    .getElementById("save-changes-admin13")
    .addEventListener("click", function () {
      localStorage.setItem("singlePriceAdmin13", singlePriceAdmin13Input.value);
      localStorage.setItem("doublePriceAdmin13", doublePriceAdmin13Input.value);
      localStorage.setItem("vacancyAdmin13", vacancyAdmin13Input.value);
      //updating table cells with input
      singlePriceAdmin13Cell.textContent =
        "R" + singlePriceAdmin13Input.value + ".00";
      doublePriceAdmin13Cell.textContent =
        "R" + doublePriceAdmin13Input.value + ".00";
      vacancyAdmin13Cell.textContent = "+" + vacancyAdmin13Input.value;
    });
  //retrieve data for admin 14
  const singlePriceAdmin14Input = document.getElementById(
    "single-room-admin-14"
  );
  const doublePriceAdmin14Input = document.getElementById(
    "double-room-admin-14"
  );
  const vacancyAdmin14Input = document.getElementById("vacancy-14");
  singlePriceAdmin14Input.value =
    localStorage.getItem("singlePriceAdmin14") || "";
  doublePriceAdmin14Input.value =
    localStorage.getItem("doublePriceAdmin14") || "";
  vacancyAdmin14Input.value = localStorage.getItem("vacancyAdmin14") || "";
  //updating cells with stored value for admin14
  const singlePriceAdmin14Cell = document.getElementById(
    "single-price-admin-14"
  );
  const doublePriceAdmin14Cell = document.getElementById(
    "double-price-admin-14"
  );
  const vacancyAdmin14Cell = document.getElementById("vacancy-admin-14");
  singlePriceAdmin14Cell.textContent =
    "R" + (localStorage.getItem("singlePriceAdmin14") || "850");
  doublePriceAdmin14Cell.textContent =
    "R" + (localStorage.getItem("doublePriceAdmin14") || "500");
  vacancyAdmin14Cell.textContent =
    "+" + (localStorage.getItem("vacancyAdmin14") || "3");
  //adding event listeners when clicking save changes button admin 14
  document
    .getElementById("save-changes-admin14")
    .addEventListener("click", function () {
      localStorage.setItem("singlePriceAdmin14", singlePriceAdmin14Input.value);
      localStorage.setItem("doublePriceAdmin14", doublePriceAdmin14Input.value);
      localStorage.setItem("vacancyAdmin14", vacancyAdmin14Input.value);
      //updating table cells with input
      singlePriceAdmin14Cell.textContent =
        "R" + singlePriceAdmin14Input.value + ".00";
      doublePriceAdmin14Cell.textContent =
        "R" + doublePriceAdmin14Input.value + ".00";
      vacancyAdmin14Cell.textContent = "+" + vacancyAdmin14Input.value;
    });
  //retrieve data for admin 15
  const singlePriceAdmin15Input = document.getElementById(
    "single-room-admin-15"
  );
  const doublePriceAdmin15Input = document.getElementById(
    "double-room-admin-15"
  );
  const vacancyAdmin15Input = document.getElementById("vacancy-15");
  singlePriceAdmin15Input.value =
    localStorage.getItem("singlePriceAdmin15") || "";
  doublePriceAdmin15Input.value =
    localStorage.getItem("doublePriceAdmin15") || "";
  vacancyAdmin15Input.value = localStorage.getItem("vacancyAdmin15") || "";
  //updating cells with stored value for admin15
  const singlePriceAdmin15Cell = document.getElementById(
    "single-price-admin-15"
  );
  const doublePriceAdmin15Cell = document.getElementById(
    "double-price-admin-15"
  );
  const vacancyAdmin15Cell = document.getElementById("vacancy-admin-15");
  singlePriceAdmin15Cell.textContent =
    "R" + (localStorage.getItem("singlePriceAdmin15") || "850");
  doublePriceAdmin15Cell.textContent =
    "R" + (localStorage.getItem("doublePriceAdmin15") || "500");
  vacancyAdmin15Cell.textContent =
    "+" + (localStorage.getItem("vacancyAdmin15") || "3");
  //adding event listeners when clicking save changes button admin 15
  document
    .getElementById("save-changes-admin15")
    .addEventListener("click", function () {
      localStorage.setItem("singlePriceAdmin15", singlePriceAdmin15Input.value);
      localStorage.setItem("doublePriceAdmin15", doublePriceAdmin15Input.value);
      localStorage.setItem("vacancyAdmin15", vacancyAdmin15Input.value);
      //updating table cells with input
      singlePriceAdmin15Cell.textContent =
        "R" + singlePriceAdmin15Input.value + ".00";
      doublePriceAdmin15Cell.textContent =
        "R" + doublePriceAdmin15Input.value + ".00";
      vacancyAdmin15Cell.textContent = "+" + vacancyAdmin15Input.value;
    });
  //retrieve data for admin 16
  const singlePriceAdmin16Input = document.getElementById(
    "single-room-admin-16"
  );
  const doublePriceAdmin16Input = document.getElementById(
    "double-room-admin-16"
  );
  const vacancyAdmin16Input = document.getElementById("vacancy-16");
  singlePriceAdmin16Input.value =
    localStorage.getItem("singlePriceAdmin16") || "";
  doublePriceAdmin16Input.value =
    localStorage.getItem("doublePriceAdmin16") || "";
  vacancyAdmin16Input.value = localStorage.getItem("vacancyAdmin16") || "";
  //updating cells with stored value for admin16
  const singlePriceAdmin16Cell = document.getElementById(
    "single-price-admin-16"
  );
  const doublePriceAdmin16Cell = document.getElementById(
    "double-price-admin-16"
  );
  const vacancyAdmin16Cell = document.getElementById("vacancy-admin-16");
  singlePriceAdmin16Cell.textContent =
    "R" + (localStorage.getItem("singlePriceAdmin16") || "850");
  doublePriceAdmin16Cell.textContent =
    "R" + (localStorage.getItem("doublePriceAdmin16") || "500");
  vacancyAdmin16Cell.textContent =
    "+" + (localStorage.getItem("vacancyAdmin16") || "3");
  //adding event listeners when clicking save changes button admin 16
  document
    .getElementById("save-changes-admin16")
    .addEventListener("click", function () {
      localStorage.setItem("singlePriceAdmin16", singlePriceAdmin16Input.value);
      localStorage.setItem("doublePriceAdmin16", doublePriceAdmin16Input.value);
      localStorage.setItem("vacancyAdmin16", vacancyAdmin16Input.value);
      //updating table cells with input
      singlePriceAdmin16Cell.textContent =
        "R" + singlePriceAdmin16Input.value + ".00";
      doublePriceAdmin16Cell.textContent =
        "R" + doublePriceAdmin16Input.value + ".00";
      vacancyAdmin16Cell.textContent = "+" + vacancyAdmin16Input.value;
    });
  //retrieve data for admin 17
  const singlePriceAdmin17Input = document.getElementById(
    "single-room-admin-17"
  );
  const doublePriceAdmin17Input = document.getElementById(
    "double-room-admin-17"
  );
  const vacancyAdmin17Input = document.getElementById("vacancy-17");
  singlePriceAdmin17Input.value =
    localStorage.getItem("singlePriceAdmin17") || "";
  doublePriceAdmin17Input.value =
    localStorage.getItem("doublePriceAdmin17") || "";
  vacancyAdmin17Input.value = localStorage.getItem("vacancyAdmin17") || "";
  //updating cells with stored value for admin17
  const singlePriceAdmin17Cell = document.getElementById(
    "single-price-admin-17"
  );
  const doublePriceAdmin17Cell = document.getElementById(
    "double-price-admin-17"
  );
  const vacancyAdmin17Cell = document.getElementById("vacancy-admin-17");
  singlePriceAdmin17Cell.textContent =
    "R" + (localStorage.getItem("singlePriceAdmin17") || "850");
  doublePriceAdmin17Cell.textContent =
    "R" + (localStorage.getItem("doublePriceAdmin17") || "500");
  vacancyAdmin17Cell.textContent =
    "+" + (localStorage.getItem("vacancyAdmin17") || "3");
  //adding event listeners when clicking save changes button admin 17
  document
    .getElementById("save-changes-admin17")
    .addEventListener("click", function () {
      localStorage.setItem("singlePriceAdmin17", singlePriceAdmin17Input.value);
      localStorage.setItem("doublePriceAdmin17", doublePriceAdmin17Input.value);
      localStorage.setItem("vacancyAdmin17", vacancyAdmin17Input.value);
      //updating table cells with input
      singlePriceAdmin17Cell.textContent =
        "R" + singlePriceAdmin17Input.value + ".00";
      doublePriceAdmin17Cell.textContent =
        "R" + doublePriceAdmin17Input.value + ".00";
      vacancyAdmin17Cell.textContent = "+" + vacancyAdmin17Input.value;
    });
  //retrieve data for admin 18
  const singlePriceAdmin18Input = document.getElementById(
    "single-room-admin-18"
  );
  const doublePriceAdmin18Input = document.getElementById(
    "double-room-admin-18"
  );
  const vacancyAdmin18Input = document.getElementById("vacancy-18");
  singlePriceAdmin18Input.value =
    localStorage.getItem("singlePriceAdmin18") || "";
  doublePriceAdmin18Input.value =
    localStorage.getItem("doublePriceAdmin18") || "";
  vacancyAdmin18Input.value = localStorage.getItem("vacancyAdmin18") || "";
  //updating cells with stored value for admin18
  const singlePriceAdmin18Cell = document.getElementById(
    "single-price-admin-18"
  );
  const doublePriceAdmin18Cell = document.getElementById(
    "double-price-admin-18"
  );
  const vacancyAdmin18Cell = document.getElementById("vacancy-admin-18");
  singlePriceAdmin18Cell.textContent =
    "R" + (localStorage.getItem("singlePriceAdmin18") || "850");
  doublePriceAdmin18Cell.textContent =
    "R" + (localStorage.getItem("doublePriceAdmin18") || "500");
  vacancyAdmin18Cell.textContent =
    "+" + (localStorage.getItem("vacancyAdmin18") || "3");
  //adding event listeners when clicking save changes button admin 18
  document
    .getElementById("save-changes-admin18")
    .addEventListener("click", function () {
      localStorage.setItem("singlePriceAdmin18", singlePriceAdmin18Input.value);
      localStorage.setItem("doublePriceAdmin18", doublePriceAdmin18Input.value);
      localStorage.setItem("vacancyAdmin18", vacancyAdmin18Input.value);
      //updating table cells with input
      singlePriceAdmin18Cell.textContent =
        "R" + singlePriceAdmin18Input.value + ".00";
      doublePriceAdmin18Cell.textContent =
        "R" + doublePriceAdmin18Input.value + ".00";
      vacancyAdmin18Cell.textContent = "+" + vacancyAdmin18Input.value;
    });
  //retrieve data for admin 19
  const singlePriceAdmin19Input = document.getElementById(
    "single-room-admin-19"
  );
  const doublePriceAdmin19Input = document.getElementById(
    "double-room-admin-19"
  );
  const vacancyAdmin19Input = document.getElementById("vacancy-19");
  singlePriceAdmin19Input.value =
    localStorage.getItem("singlePriceAdmin19") || "";
  doublePriceAdmin19Input.value =
    localStorage.getItem("doublePriceAdmin19") || "";
  vacancyAdmin19Input.value = localStorage.getItem("vacancyAdmin19") || "";
  //updating cells with stored value for admin19
  const singlePriceAdmin19Cell = document.getElementById(
    "single-price-admin-19"
  );
  const doublePriceAdmin19Cell = document.getElementById(
    "double-price-admin-19"
  );
  const vacancyAdmin19Cell = document.getElementById("vacancy-admin-19");
  singlePriceAdmin19Cell.textContent =
    "R" + (localStorage.getItem("singlePriceAdmin19") || "850");
  doublePriceAdmin19Cell.textContent =
    "R" + (localStorage.getItem("doublePriceAdmin19") || "500");
  vacancyAdmin19Cell.textContent =
    "+" + (localStorage.getItem("vacancyAdmin19") || "3");
  //adding event listeners when clicking save changes button admin 19
  document
    .getElementById("save-changes-admin19")
    .addEventListener("click", function () {
      localStorage.setItem("singlePriceAdmin19", singlePriceAdmin19Input.value);
      localStorage.setItem("doublePriceAdmin19", doublePriceAdmin19Input.value);
      localStorage.setItem("vacancyAdmin19", vacancyAdmin19Input.value);
      //updating table cells with input
      singlePriceAdmin19Cell.textContent =
        "R" + singlePriceAdmin19Input.value + ".00";
      doublePriceAdmin19Cell.textContent =
        "R" + doublePriceAdmin19Input.value + ".00";
      vacancyAdmin11Cel9.textContent = "+" + vacancyAdmin19Input.value;
    });
  //retrieve data for admin 20
  const singlePriceAdmin20Input = document.getElementById(
    "single-room-admin-20"
  );
  const doublePriceAdmin20Input = document.getElementById(
    "double-room-admin-20"
  );
  const vacancyAdmin20Input = document.getElementById("vacancy-20");
  singlePriceAdmin20Input.value =
    localStorage.getItem("singlePriceAdmin20") || "";
  doublePriceAdmin20Input.value =
    localStorage.getItem("doublePriceAdmin20") || "";
  vacancyAdmin20Input.value = localStorage.getItem("vacancyAdmin20") || "";
  //updating cells with stored value for admin20
  const singlePriceAdmin20Cell = document.getElementById(
    "single-price-admin-20"
  );
  const doublePriceAdmin20Cell = document.getElementById(
    "double-price-admin-20"
  );
  const vacancyAdmin20Cell = document.getElementById("vacancy-admin-20");
  singlePriceAdmin20Cell.textContent =
    "R" + (localStorage.getItem("singlePriceAdmin20") || "850");
  doublePriceAdmin20Cell.textContent =
    "R" + (localStorage.getItem("doublePriceAdmin20") || "500");
  vacancyAdmin20Cell.textContent =
    "+" + (localStorage.getItem("vacancyAdmin20") || "3");
  //adding event listeners when clicking save changes button admin 20
  document
    .getElementById("save-changes-admin20")
    .addEventListener("click", function () {
      localStorage.setItem("singlePriceAdmin20", singlePriceAdmin20Input.value);
      localStorage.setItem("doublePriceAdmin20", doublePriceAdmin20Input.value);
      localStorage.setItem("vacancyAdmin20", vacancyAdmin20Input.value);
      //updating table cells with input
      singlePriceAdmin20Cell.textContent =
        "R" + singlePriceAdmin20Input.value + ".00";
      doublePriceAdmin20Cell.textContent =
        "R" + doublePriceAdmin20Input.value + ".00";
      vacancyAdmin20Cell.textContent = "+" + vacancyAdmin20Input.value;
    });
  //retrieve data for admin 21
  const singlePriceAdmin21Input = document.getElementById(
    "single-room-admin-21"
  );
  const doublePriceAdmin21Input = document.getElementById(
    "double-room-admin-21"
  );
  const vacancyAdmin21Input = document.getElementById("vacancy-21");
  singlePriceAdmin21Input.value =
    localStorage.getItem("singlePriceAdmin21") || "";
  doublePriceAdmin21Input.value =
    localStorage.getItem("doublePriceAdmin21") || "";
  vacancyAdmin21Input.value = localStorage.getItem("vacancyAdmin21") || "";
  //updating cells with stored value for admin21
  const singlePriceAdmin21Cell = document.getElementById(
    "single-price-admin-21"
  );
  const doublePriceAdmin21Cell = document.getElementById(
    "double-price-admin-21"
  );
  const vacancyAdmin21Cell = document.getElementById("vacancy-admin-21");
  singlePriceAdmin21Cell.textContent =
    "R" + (localStorage.getItem("singlePriceAdmin21") || "850");
  doublePriceAdmin21Cell.textContent =
    "R" + (localStorage.getItem("doublePriceAdmin21") || "500");
  vacancyAdmin21Cell.textContent =
    "+" + (localStorage.getItem("vacancyAdmin21") || "3");
  //adding event listeners when clicking save changes button admin 21
  document
    .getElementById("save-changes-admin21")
    .addEventListener("click", function () {
      localStorage.setItem("singlePriceAdmin21", singlePriceAdmin21Input.value);
      localStorage.setItem("doublePriceAdmin21", doublePriceAdmin21Input.value);
      localStorage.setItem("vacancyAdmin21", vacancyAdmin21Input.value);
      //updating table cells with input
      singlePriceAdmin21Cell.textContent =
        "R" + singlePriceAdmin21Input.value + ".00";
      doublePriceAdmin21Cell.textContent =
        "R" + doublePriceAdmin21Input.value + ".00";
      vacancyAdmin21Cell.textContent = "+" + vacancyAdmin21Input.value;
    });
  //retrieve data for admin 22
  const singlePriceAdmin22Input = document.getElementById(
    "single-room-admin-22"
  );
  const doublePriceAdmin22Input = document.getElementById(
    "double-room-admin-22"
  );
  const vacancyAdmin22Input = document.getElementById("vacancy-22");
  singlePriceAdmin22Input.value =
    localStorage.getItem("singlePriceAdmin22") || "";
  doublePriceAdmin22Input.value =
    localStorage.getItem("doublePriceAdmin22") || "";
  vacancyAdmin22Input.value = localStorage.getItem("vacancyAdmin22") || "";
  //updating cells with stored value for admin22
  const singlePriceAdmin22Cell = document.getElementById(
    "single-price-admin-22"
  );
  const doublePriceAdmin22Cell = document.getElementById(
    "double-price-admin-22"
  );
  const vacancyAdmin22Cell = document.getElementById("vacancy-admin-22");
  singlePriceAdmin22Cell.textContent =
    "R" + (localStorage.getItem("singlePriceAdmin22") || "850");
  doublePriceAdmin22Cell.textContent =
    "R" + (localStorage.getItem("doublePriceAdmin22") || "500");
  vacancyAdmin22Cell.textContent =
    "+" + (localStorage.getItem("vacancyAdmin22") || "3");
  //adding event listeners when clicking save changes button admin 22
  document
    .getElementById("save-changes-admin22")
    .addEventListener("click", function () {
      localStorage.setItem("singlePriceAdmin22", singlePriceAdmin22Input.value);
      localStorage.setItem("doublePriceAdmin22", doublePriceAdmin22Input.value);
      localStorage.setItem("vacancyAdmin22", vacancyAdmin22Input.value);
      //updating table cells with input
      singlePriceAdmin22Cell.textContent =
        "R" + singlePriceAdmin22Input.value + ".00";
      doublePriceAdmin22Cell.textContent =
        "R" + doublePriceAdmin22Input.value + ".00";
      vacancyAdmin22Cell.textContent = "+" + vacancyAdmin22Input.value;
    });
  //retrieve data for admin 23
  const singlePriceAdmin23Input = document.getElementById(
    "single-room-admin-23"
  );
  const doublePriceAdmin23Input = document.getElementById(
    "double-room-admin-23"
  );
  const vacancyAdmin23Input = document.getElementById("vacancy-23");
  singlePriceAdmin23Input.value =
    localStorage.getItem("singlePriceAdmin23") || "";
  doublePriceAdmin23Input.value =
    localStorage.getItem("doublePriceAdmin23") || "";
  vacancyAdmin23Input.value = localStorage.getItem("vacancyAdmin23") || "";
  //updating cells with stored value for admin23
  const singlePriceAdmin23Cell = document.getElementById(
    "single-price-admin-23"
  );
  const doublePriceAdmin23Cell = document.getElementById(
    "double-price-admin-23"
  );
  const vacancyAdmin23Cell = document.getElementById("vacancy-admin-23");
  singlePriceAdmin23Cell.textContent =
    "R" + (localStorage.getItem("singlePriceAdmin23") || "850");
  doublePriceAdmin23Cell.textContent =
    "R" + (localStorage.getItem("doublePriceAdmin20") || "500");
  vacancyAdmin23Cell.textContent =
    "+" + (localStorage.getItem("vacancyAdmin23") || "3");
  //adding event listeners when clicking save changes button admin 23
  document
    .getElementById("save-changes-admin23")
    .addEventListener("click", function () {
      localStorage.setItem("singlePriceAdmin23", singlePriceAdmin23Input.value);
      localStorage.setItem("doublePriceAdmin23", doublePriceAdmin23Input.value);
      localStorage.setItem("vacancyAdmin23", vacancyAdmin23Input.value);
      //updating table cells with input
      singlePriceAdmin23Cell.textContent =
        "R" + singlePriceAdmin23Input.value + ".00";
      doublePriceAdmin23Cell.textContent =
        "R" + doublePriceAdmin23Input.value + ".00";
      vacancyAdmin23Cell.textContent = "+" + vacancyAdmin23Input.value;
    });
  //retrieve data for admin 24
  const singlePriceAdmin24Input = document.getElementById(
    "single-room-admin-24"
  );
  const doublePriceAdmin24Input = document.getElementById(
    "double-room-admin-24"
  );
  const vacancyAdmin24Input = document.getElementById("vacancy-24");
  singlePriceAdmin24Input.value =
    localStorage.getItem("singlePriceAdmin24") || "";
  doublePriceAdmin24Input.value =
    localStorage.getItem("doublePriceAdmin24") || "";
  vacancyAdmin24Input.value = localStorage.getItem("vacancyAdmin24") || "";
  //updating cells with stored value for admin24
  const singlePriceAdmin24Cell = document.getElementById(
    "single-price-admin-24"
  );
  const doublePriceAdmin24Cell = document.getElementById(
    "double-price-admin-24"
  );
  const vacancyAdmin24Cell = document.getElementById("vacancy-admin-24");
  singlePriceAdmin24Cell.textContent =
    "R" + (localStorage.getItem("singlePriceAdmin24") || "850");
  doublePriceAdmin24Cell.textContent =
    "R" + (localStorage.getItem("doublePriceAdmin24") || "500");
  vacancyAdmin24Cell.textContent =
    "+" + (localStorage.getItem("vacancyAdmin24") || "3");
  //adding event listeners when clicking save changes button admin 24
  document
    .getElementById("save-changes-admin24")
    .addEventListener("click", function () {
      localStorage.setItem("singlePriceAdmin24", singlePriceAdmin24Input.value);
      localStorage.setItem("doublePriceAdmin24", doublePriceAdmin24Input.value);
      localStorage.setItem("vacancyAdmin24", vacancyAdmin24Input.value);
      //updating table cells with input
      singlePriceAdmin24Cell.textContent =
        "R" + singlePriceAdmin24Input.value + ".00";
      doublePriceAdmin24Cell.textContent =
        "R" + doublePriceAdmin24Input.value + ".00";
      vacancyAdmin24Cell.textContent = "+" + vacancyAdmin24Input.value;
    });
  //retrieve data for admin 25
  const singlePriceAdmin25Input = document.getElementById(
    "single-room-admin-25"
  );
  const doublePriceAdmin25Input = document.getElementById(
    "double-room-admin-25"
  );
  const vacancyAdmin25Input = document.getElementById("vacancy-25");
  singlePriceAdmin25Input.value =
    localStorage.getItem("singlePriceAdmin25") || "";
  doublePriceAdmin25Input.value =
    localStorage.getItem("doublePriceAdmin25") || "";
  vacancyAdmin25Input.value = localStorage.getItem("vacancyAdmin25") || "";
  //updating cells with stored value for admin25
  const singlePriceAdmin25Cell = document.getElementById(
    "single-price-admin-25"
  );
  const doublePriceAdmin25Cell = document.getElementById(
    "double-price-admin-25"
  );
  const vacancyAdmin25Cell = document.getElementById("vacancy-admin-25");
  singlePriceAdmin25Cell.textContent =
    "R" + (localStorage.getItem("singlePriceAdmin25") || "850");
  doublePriceAdmin25Cell.textContent =
    "R" + (localStorage.getItem("doublePriceAdmin25") || "500");
  vacancyAdmin25Cell.textContent =
    "+" + (localStorage.getItem("vacancyAdmin25") || "3");
  //adding event listeners when clicking save changes button admin 25
  document
    .getElementById("save-changes-admin25")
    .addEventListener("click", function () {
      localStorage.setItem("singlePriceAdmin25", singlePriceAdmin25Input.value);
      localStorage.setItem("doublePriceAdmin25", doublePriceAdmin25Input.value);
      localStorage.setItem("vacancyAdmin25", vacancyAdmin25Input.value);
      //updating table cells with input
      singlePriceAdmin25Cell.textContent =
        "R" + singlePriceAdmin25Input.value + ".00";
      doublePriceAdmin25Cell.textContent =
        "R" + doublePriceAdmin25Input.value + ".00";
      vacancyAdmin25Cell.textContent = "+" + vacancyAdmin25Input.value;
    });
  //retrieve data for admin 26
  const singlePriceAdmin26Input = document.getElementById(
    "single-room-admin-26"
  );
  const doublePriceAdmin26Input = document.getElementById(
    "double-room-admin-26"
  );
  const vacancyAdmin26Input = document.getElementById("vacancy-26");
  singlePriceAdmin26Input.value =
    localStorage.getItem("singlePriceAdmin26") || "";
  doublePriceAdmin26Input.value =
    localStorage.getItem("doublePriceAdmin26") || "";
  vacancyAdmin26Input.value = localStorage.getItem("vacancyAdmin26") || "";
  //updating cells with stored value for admin26
  const singlePriceAdmin26Cell = document.getElementById(
    "single-price-admin-26"
  );
  const doublePriceAdmin26Cell = document.getElementById(
    "double-price-admin-26"
  );
  const vacancyAdmin26Cell = document.getElementById("vacancy-admin-26");
  singlePriceAdmin26Cell.textContent =
    "R" + (localStorage.getItem("singlePriceAdmin26") || "850");
  doublePriceAdmin26Cell.textContent =
    "R" + (localStorage.getItem("doublePriceAdmin26") || "500");
  vacancyAdmin26Cell.textContent =
    "+" + (localStorage.getItem("vacancyAdmin26") || "3");
  //adding event listeners when clicking save changes button admin 26
  document
    .getElementById("save-changes-admin26")
    .addEventListener("click", function () {
      localStorage.setItem("singlePriceAdmin26", singlePriceAdmin26Input.value);
      localStorage.setItem("doublePriceAdmin26", doublePriceAdmin26Input.value);
      localStorage.setItem("vacancyAdmin26", vacancyAdmin26Input.value);
      //updating table cells with input
      singlePriceAdmin26Cell.textContent =
        "R" + singlePriceAdmin26Input.value + ".00";
      doublePriceAdmin26Cell.textContent =
        "R" + doublePriceAdmin26Input.value + ".00";
      vacancyAdmin26Cell.textContent = "+" + vacancyAdmin26Input.value;
    });
  //retrieve data for admin 27
  const singlePriceAdmin27Input = document.getElementById(
    "single-room-admin-27"
  );
  const doublePriceAdmin27Input = document.getElementById(
    "double-room-admin-27"
  );
  const vacancyAdmin27Input = document.getElementById("vacancy-27");
  singlePriceAdmin27Input.value =
    localStorage.getItem("singlePriceAdmin27") || "";
  doublePriceAdmin27Input.value =
    localStorage.getItem("doublePriceAdmin27") || "";
  vacancyAdmin27Input.value = localStorage.getItem("vacancyAdmin27") || "";
  //updating cells with stored value for admin27
  const singlePriceAdmin27Cell = document.getElementById(
    "single-price-admin-27"
  );
  const doublePriceAdmin27Cell = document.getElementById(
    "double-price-admin-27"
  );
  const vacancyAdmin27Cell = document.getElementById("vacancy-admin-27");
  singlePriceAdmin27Cell.textContent =
    "R" + (localStorage.getItem("singlePriceAdmin27") || "850");
  doublePriceAdmin27Cell.textContent =
    "R" + (localStorage.getItem("doublePriceAdmin27") || "500");
  vacancyAdmin27Cell.textContent =
    "+" + (localStorage.getItem("vacancyAdmin27") || "3");
  //adding event listeners when clicking save changes button admin 27
  document
    .getElementById("save-changes-admin27")
    .addEventListener("click", function () {
      localStorage.setItem("singlePriceAdmin27", singlePriceAdmin27Input.value);
      localStorage.setItem("doublePriceAdmin27", doublePriceAdmin27Input.value);
      localStorage.setItem("vacancyAdmin27", vacancyAdmin27Input.value);
      //updating table cells with input
      singlePriceAdmin27Cell.textContent =
        "R" + singlePriceAdmin27Input.value + ".00";
      doublePriceAdmin27Cell.textContent =
        "R" + doublePriceAdmin27Input.value + ".00";
      vacancyAdmin27Cell.textContent = "+" + vacancyAdmin27Input.value;
    });
  //retrieve data for admin 28
  const singlePriceAdmin28Input = document.getElementById(
    "single-room-admin-28"
  );
  const doublePriceAdmin28Input = document.getElementById(
    "double-room-admin-28"
  );
  const vacancyAdmin28Input = document.getElementById("vacancy-28");
  singlePriceAdmin28Input.value =
    localStorage.getItem("singlePriceAdmin28") || "";
  doublePriceAdmin28Input.value =
    localStorage.getItem("doublePriceAdmin28") || "";
  vacancyAdmin28Input.value = localStorage.getItem("vacancyAdmin28") || "";
  //updating cells with stored value for admin28
  const singlePriceAdmin28Cell = document.getElementById(
    "single-price-admin-28"
  );
  const doublePriceAdmin28Cell = document.getElementById(
    "double-price-admin-28"
  );
  const vacancyAdmin28Cell = document.getElementById("vacancy-admin-28");
  singlePriceAdmin28Cell.textContent =
    "R" + (localStorage.getItem("singlePriceAdmin28") || "850");
  doublePriceAdmin28Cell.textContent =
    "R" + (localStorage.getItem("doublePriceAdmin28") || "500");
  vacancyAdmin28Cell.textContent =
    "+" + (localStorage.getItem("vacancyAdmin28") || "3");
  //adding event listeners when clicking save changes button admin 28
  document
    .getElementById("save-changes-admin28")
    .addEventListener("click", function () {
      localStorage.setItem("singlePriceAdmin28", singlePriceAdmin28Input.value);
      localStorage.setItem("doublePriceAdmin28", doublePriceAdmin28Input.value);
      localStorage.setItem("vacancyAdmin28", vacancyAdmin28Input.value);
      //updating table cells with input
      singlePriceAdmin28Cell.textContent =
        "R" + singlePriceAdmin28Input.value + ".00";
      doublePriceAdmin28Cell.textContent =
        "R" + doublePriceAdmin28Input.value + ".00";
      vacancyAdmin28Cell.textContent = "+" + vacancyAdmin28Input.value;
    });
  //retrieve data for admin 29
  const singlePriceAdmin29Input = document.getElementById(
    "single-room-admin-29"
  );
  const doublePriceAdmin29Input = document.getElementById(
    "double-room-admin-29"
  );
  const vacancyAdmin29Input = document.getElementById("vacancy-29");
  singlePriceAdmin29Input.value =
    localStorage.getItem("singlePriceAdmin29") || "";
  doublePriceAdmin29Input.value =
    localStorage.getItem("doublePriceAdmin29") || "";
  vacancyAdmin29Input.value = localStorage.getItem("vacancyAdmin29") || "";
  //updating cells with stored value for admin29
  const singlePriceAdmin29Cell = document.getElementById(
    "single-price-admin-29"
  );
  const doublePriceAdmin29Cell = document.getElementById(
    "double-price-admin-29"
  );
  const vacancyAdmin29Cell = document.getElementById("vacancy-admin-29");
  singlePriceAdmin29Cell.textContent =
    "R" + (localStorage.getItem("singlePriceAdmin29") || "850");
  doublePriceAdmin29Cell.textContent =
    "R" + (localStorage.getItem("doublePriceAdmin29") || "500");
  vacancyAdmin29Cell.textContent =
    "+" + (localStorage.getItem("vacancyAdmin29") || "3");
  //adding event listeners when clicking save changes button admin 29
  document
    .getElementById("save-changes-admin29")
    .addEventListener("click", function () {
      localStorage.setItem("singlePriceAdmin29", singlePriceAdmin29Input.value);
      localStorage.setItem("doublePriceAdmin29", doublePriceAdmin29Input.value);
      localStorage.setItem("vacancyAdmin29", vacancyAdmin29Input.value);
      //updating table cells with input
      singlePriceAdmin29Cell.textContent =
        "R" + singlePriceAdmin29Input.value + ".00";
      doublePriceAdmin29Cell.textContent =
        "R" + doublePriceAdmin29Input.value + ".00";
      vacancyAdmin29Cell.textContent = "+" + vacancyAdmin29Input.value;
    });
  //retrieve data for admin 30
  const singlePriceAdmin30Input = document.getElementById(
    "single-room-admin-30"
  );
  const doublePriceAdmin30Input = document.getElementById(
    "double-room-admin-30"
  );
  const vacancyAdmin30Input = document.getElementById("vacancy-30");
  singlePriceAdmin30Input.value =
    localStorage.getItem("singlePriceAdmin30") || "";
  doublePriceAdmin30Input.value =
    localStorage.getItem("doublePriceAdmin30") || "";
  vacancyAdmin30Input.value = localStorage.getItem("vacancyAdmin30") || "";
  //updating cells with stored value for admin11
  const singlePriceAdmin30Cell = document.getElementById(
    "single-price-admin-30"
  );
  const doublePriceAdmin30Cell = document.getElementById(
    "double-price-admin-30"
  );
  const vacancyAdmin30Cell = document.getElementById("vacancy-admin-30");
  singlePriceAdmin30Cell.textContent =
    "R" + (localStorage.getItem("singlePriceAdmin30") || "850");
  doublePriceAdmin30Cell.textContent =
    "R" + (localStorage.getItem("doublePriceAdmin30") || "500");
  vacancyAdmin30Cell.textContent =
    "+" + (localStorage.getItem("vacancyAdmin30") || "3");
  //adding event listeners when clicking save changes button admin 11
  document
    .getElementById("save-changes-admin30")
    .addEventListener("click", function () {
      localStorage.setItem("singlePriceAdmin30", singlePriceAdmin30Input.value);
      localStorage.setItem("doublePriceAdmin30", doublePriceAdmin30Input.value);
      localStorage.setItem("vacancyAdmin30", vacancyAdmin30Input.value);
      //updating table cells with input
      singlePriceAdmin30Cell.textContent =
        "R" + singlePriceAdmin30Input.value + ".00";
      doublePriceAdmin30Cell.textContent =
        "R" + doublePriceAdmin30Input.value + ".00";
      vacancyAdmin30Cell.textContent = "+" + vacancyAdmin30Input.value;
    });
  //retrieve data for admin 31
  const singlePriceAdmin31Input = document.getElementById(
    "single-room-admin-31"
  );
  const doublePriceAdmin31Input = document.getElementById(
    "double-room-admin-31"
  );
  const vacancyAdmin31Input = document.getElementById("vacancy-31");
  singlePriceAdmin31Input.value =
    localStorage.getItem("singlePriceAdmin31") || "";
  doublePriceAdmin31Input.value =
    localStorage.getItem("doublePriceAdmin31") || "";
  vacancyAdmin31Input.value = localStorage.getItem("vacancyAdmin31") || "";
  //updating cells with stored value for admin11
  const singlePriceAdmin31Cell = document.getElementById(
    "single-price-admin-31"
  );
  const doublePriceAdmin31Cell = document.getElementById(
    "double-price-admin-31"
  );
  const vacancyAdmin31Cell = document.getElementById("vacancy-admin-31");
  singlePriceAdmin31Cell.textContent =
    "R" + (localStorage.getItem("singlePriceAdmin31") || "850");
  doublePriceAdmin31Cell.textContent =
    "R" + (localStorage.getItem("doublePriceAdmin31") || "500");
  vacancyAdmin31Cell.textContent =
    "+" + (localStorage.getItem("vacancyAdmin31") || "3");
  //adding event listeners when clicking save changes button admin 11
  document
    .getElementById("save-changes-admin31")
    .addEventListener("click", function () {
      localStorage.setItem("singlePriceAdmin31", singlePriceAdmin31Input.value);
      localStorage.setItem("doublePriceAdmin31", doublePriceAdmin31Input.value);
      localStorage.setItem("vacancyAdmin31", vacancyAdmin31Input.value);
      //updating table cells with input
      singlePriceAdmin31Cell.textContent =
        "R" + singlePriceAdmin31Input.value + ".00";
      doublePriceAdmin31Cell.textContent =
        "R" + doublePriceAdmin31Input.value + ".00";
      vacancyAdmin31Cell.textContent = "+" + vacancyAdmin31Input.value;
    });

  //retrieve data for admin 32
  const singlePriceAdmin32Input = document.getElementById(
    "single-room-admin-32"
  );
  const doublePriceAdmin32Input = document.getElementById(
    "double-room-admin-32"
  );
  const vacancyAdmin32Input = document.getElementById("vacancy-32");
  singlePriceAdmin32Input.value =
    localStorage.getItem("singlePriceAdmin32") || "";
  doublePriceAdmin32Input.value =
    localStorage.getItem("doublePriceAdmin32") || "";
  vacancyAdmin32Input.value = localStorage.getItem("vacancyAdmin32") || "";
  //updating cells with stored value for admin32
  const singlePriceAdmin32Cell = document.getElementById(
    "single-price-admin-32"
  );
  const doublePriceAdmin32Cell = document.getElementById(
    "double-price-admin-32"
  );
  const vacancyAdmin32Cell = document.getElementById("vacancy-admin-32");
  singlePriceAdmin32Cell.textContent =
    "R" + (localStorage.getItem("singlePriceAdmin32") || "850");
  doublePriceAdmin32Cell.textContent =
    "R" + (localStorage.getItem("doublePriceAdmin32") || "500");
  vacancyAdmin32Cell.textContent =
    "+" + (localStorage.getItem("vacancyAdmin32") || "3");
  //adding event listeners when clicking save changes button admin 32
  document
    .getElementById("save-changes-admin32")
    .addEventListener("click", function () {
      localStorage.setItem("singlePriceAdmin32", singlePriceAdmin32Input.value);
      localStorage.setItem("doublePriceAdmin32", doublePriceAdmin32Input.value);
      localStorage.setItem("vacancyAdmin32", vacancyAdmin32Input.value);
      //updating table cells with input
      singlePriceAdmin32Cell.textContent =
        "R" + singlePriceAdmin32Input.value + ".00";
      doublePriceAdmin32Cell.textContent =
        "R" + doublePriceAdmin32Input.value + ".00";
      vacancyAdmin32Cell.textContent = "+" + vacancyAdmin32Input.value;
    });

  //retrieve data for admin 33
  const singlePriceAdmin33Input = document.getElementById(
    "single-room-admin-33"
  );
  const doublePriceAdmin33Input = document.getElementById(
    "double-room-admin-33"
  );
  const vacancyAdmin33Input = document.getElementById("vacancy-33");
  singlePriceAdmin33Input.value =
    localStorage.getItem("singlePriceAdmin33") || "";
  doublePriceAdmin33Input.value =
    localStorage.getItem("doublePriceAdmin33") || "";
  vacancyAdmin33Input.value = localStorage.getItem("vacancyAdmin33") || "";
  //updating cells with stored value for admin33
  const singlePriceAdmin33Cell = document.getElementById(
    "single-price-admin-33"
  );
  const doublePriceAdmin33Cell = document.getElementById(
    "double-price-admin-33"
  );
  const vacancyAdmin33Cell = document.getElementById("vacancy-admin-33");
  singlePriceAdmin33Cell.textContent =
    "R" + (localStorage.getItem("singlePriceAdmin33") || "850");
  doublePriceAdmin33Cell.textContent =
    "R" + (localStorage.getItem("doublePriceAdmin33") || "500");
  vacancyAdmin33Cell.textContent =
    "+" + (localStorage.getItem("vacancyAdmin33") || "3");
  //adding event listeners when clicking save changes button admin 33
  document
    .getElementById("save-changes-admin33")
    .addEventListener("click", function () {
      localStorage.setItem("singlePriceAdmin33", singlePriceAdmin33Input.value);
      localStorage.setItem("doublePriceAdmin33", doublePriceAdmin33Input.value);
      localStorage.setItem("vacancyAdmin33", vacancyAdmin33Input.value);
      //updating table cells with input
      singlePriceAdmin33Cell.textContent =
        "R" + singlePriceAdmin33Input.value + ".00";
      doublePriceAdmin33Cell.textContent =
        "R" + doublePriceAdmin33Input.value + ".00";
      vacancyAdmin33Cell.textContent = "+" + vacancyAdmin33Input.value;
    });

  //retrieve data for admin 34
  const singlePriceAdmin34Input = document.getElementById(
    "single-room-admin-34"
  );
  const doublePriceAdmin34Input = document.getElementById(
    "double-room-admin-34"
  );
  const vacancyAdmin34Input = document.getElementById("vacancy-34");
  singlePriceAdmin34Input.value =
    localStorage.getItem("singlePriceAdmin34") || "";
  doublePriceAdmin34Input.value =
    localStorage.getItem("doublePriceAdmin34") || "";
  vacancyAdmin34Input.value = localStorage.getItem("vacancyAdmin34") || "";
  //updating cells with stored value for admin34
  const singlePriceAdmin34Cell = document.getElementById(
    "single-price-admin-34"
  );
  const doublePriceAdmin34Cell = document.getElementById(
    "double-price-admin-34"
  );
  const vacancyAdmin34Cell = document.getElementById("vacancy-admin-34");
  singlePriceAdmin34Cell.textContent =
    "R" + (localStorage.getItem("singlePriceAdmin34") || "850");
  doublePriceAdmin34Cell.textContent =
    "R" + (localStorage.getItem("doublePriceAdmin34") || "500");
  vacancyAdmin34Cell.textContent =
    "+" + (localStorage.getItem("vacancyAdmin34") || "3");
  //adding event listeners when clicking save changes button admin 34
  document
    .getElementById("save-changes-admin34")
    .addEventListener("click", function () {
      localStorage.setItem("singlePriceAdmin34", singlePriceAdmin34Input.value);
      localStorage.setItem("doublePriceAdmin34", doublePriceAdmin34Input.value);
      localStorage.setItem("vacancyAdmin34", vacancyAdmin34Input.value);
      //updating table cells with input
      singlePriceAdmin34Cell.textContent =
        "R" + singlePriceAdmin34Input.value + ".00";
      doublePriceAdmin34Cell.textContent =
        "R" + doublePriceAdmin34Input.value + ".00";
      vacancyAdmin34Cell.textContent = "+" + vacancyAdmin34Input.value;
    });

  //retrieve data for admin 35
  const singlePriceAdmin35Input = document.getElementById(
    "single-room-admin-35"
  );
  const doublePriceAdmin35Input = document.getElementById(
    "double-room-admin-35"
  );
  const vacancyAdmin35Input = document.getElementById("vacancy-35");
  singlePriceAdmin35Input.value =
    localStorage.getItem("singlePriceAdmin35") || "";
  doublePriceAdmin35Input.value =
    localStorage.getItem("doublePriceAdmin35") || "";
  vacancyAdmin35Input.value = localStorage.getItem("vacancyAdmin35") || "";
  //updating cells with stored value for admin11
  const singlePriceAdmin35Cell = document.getElementById(
    "single-price-admin-35"
  );
  const doublePriceAdmin35Cell = document.getElementById(
    "double-price-admin-35"
  );
  const vacancyAdmin35Cell = document.getElementById("vacancy-admin-35");
  singlePriceAdmin35Cell.textContent =
    "R" + (localStorage.getItem("singlePriceAdmin35") || "850");
  doublePriceAdmin35Cell.textContent =
    "R" + (localStorage.getItem("doublePriceAdmin35") || "500");
  vacancyAdmin35Cell.textContent =
    "+" + (localStorage.getItem("vacancyAdmin35") || "3");
  //adding event listeners when clicking save changes button admin 11
  document
    .getElementById("save-changes-admin35")
    .addEventListener("click", function () {
      localStorage.setItem("singlePriceAdmin35", singlePriceAdmin35Input.value);
      localStorage.setItem("doublePriceAdmin35", doublePriceAdmin35Input.value);
      localStorage.setItem("vacancyAdmin35", vacancyAdmin35Input.value);
      //updating table cells with input
      singlePriceAdmin35Cell.textContent =
        "R" + singlePriceAdmin35Input.value + ".00";
      doublePriceAdmin35Cell.textContent =
        "R" + doublePriceAdmin35Input.value + ".00";
      vacancyAdmin35Cell.textContent = "+" + vacancyAdmin35Input.value;
    });

  //retrieve data for admin 36
  const singlePriceAdmin36Input = document.getElementById(
    "single-room-admin-36"
  );
  const doublePriceAdmin36Input = document.getElementById(
    "double-room-admin-36"
  );
  const vacancyAdmin36Input = document.getElementById("vacancy-36");
  singlePriceAdmin36Input.value =
    localStorage.getItem("singlePriceAdmin36") || "";
  doublePriceAdmin36Input.value =
    localStorage.getItem("doublePriceAdmin36") || "";
  vacancyAdmin36Input.value = localStorage.getItem("vacancyAdmin36") || "";
  //updating cells with stored value for admin11
  const singlePriceAdmin36Cell = document.getElementById(
    "single-price-admin-36"
  );
  const doublePriceAdmin36Cell = document.getElementById(
    "double-price-admin-36"
  );
  const vacancyAdmin36Cell = document.getElementById("vacancy-admin-36");
  singlePriceAdmin36Cell.textContent =
    "R" + (localStorage.getItem("singlePriceAdmin36") || "850");
  doublePriceAdmin36Cell.textContent =
    "R" + (localStorage.getItem("doublePriceAdmin36") || "500");
  vacancyAdmin36Cell.textContent =
    "+" + (localStorage.getItem("vacancyAdmin36") || "3");
  //adding event listeners when clicking save changes button admin 11
  document
    .getElementById("save-changes-admin36")
    .addEventListener("click", function () {
      localStorage.setItem("singlePriceAdmin36", singlePriceAdmin36Input.value);
      localStorage.setItem("doublePriceAdmin36", doublePriceAdmin36Input.value);
      localStorage.setItem("vacancyAdmin36", vacancyAdmin36Input.value);
      //updating table cells with input
      singlePriceAdmin36Cell.textContent =
        "R" + singlePriceAdmin36Input.value + ".00";
      doublePriceAdmin36Cell.textContent =
        "R" + doublePriceAdmin36Input.value + ".00";
      vacancyAdmin36Cell.textContent = "+" + vacancyAdmin36Input.value;
    });
});

console.log("js started");

var data;
var grid = document.querySelector(".grid");

if (localStorage.getItem("datalist")) {
  data = JSON.parse(localStorage.getItem("datalist"));
  console.log("Loaded from localStorage");
  if (grid) {
    makeCards();
  }
} else {
  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      data = JSON.parse(this.responseText);
      console.log("Loaded from filmData.json");

      localStorage.setItem("datalist", JSON.stringify(data));
      console.log("Saved starter data to localStorage");

      if (grid) {
        makeCards();
      }
    }
  };

  xhttp.open("GET", "filmData.json", true);
  xhttp.send();
}
function makeCards() {
  grid.innerHTML = "";

  data.forEach(function (movie) {
    let card = document.createElement("div");
    card.classList.add("card");

    let textData =
      "<div class='movie-title'>" + movie.name + "</div>" +
      "<div>Genre: " + movie.genre + "</div>" +
      "<div>Release Year: " + movie.Year + "</div>";

    card.innerHTML = textData;
    grid.appendChild(card);
  });

  console.log("cards refreshed");
}

if (localStorage.getItem("datalist")) {
  data = JSON.parse(localStorage.getItem("datalist"));
} else {
  data = [];
}
var form = document.querySelector("form");
 let titleInput=document.querySelector("#title");
    let yearInput=document.querySelector("#year");
    let genreInput=document.querySelector("#genre");

form.addEventListener ("submit" , function (e){
    e.preventDefault();

    var newObj = {
      name: titleInput.value,
        Year :yearInput.value,
        genre: genreInput.value
      };

        data.push(newObj);
        localStorage.setItem("datalist", JSON.stringify(data))
        console.log("saved new Item to local storage")

        if(document.querySelector(".grid")) {
          makeCards();
        }

        form.reset();
        console.log("form reset");


});

let buttons = document.querySelectorAll(".watchButton");

buttons.forEach(button => {
  let watched = false;

  button.addEventListener("click", () => {
    watched = !watched;
    button.textContent = watched
      ? "Mark as unwatched"
      : "Mark as watched";
  });
});
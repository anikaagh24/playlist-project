console.log("js started");

var data;
var grid = document.querySelector(".grid-container");

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
      console.log("Loaded from gameData.json");

      localStorage.setItem("datalist", JSON.stringify(data));
      console.log("Saved starter data to localStorage");

      if (grid) {
        makeCards();
      }
    }
  };

  xhttp.open("GET", "movieData.json", true);
  xhttp.send();
}
function makeCards() {
  grid.innerHTML = "";

  data.forEach(function (movie) {
    let card = document.createElement("div");
    card.classList.add("card");

    let textData =
      "<div class='game-title'>" + movie.title + "</div>" +
      "<div>Publisher: " + movie.publisher + "</div>" +
      "<div>Release Date: " + movie.releaseDate + "</div>";

    card.innerHTML = textData;
    grid.appendChild(card);
  });

  console.log("cards refreshed");
}


form.addEventListener ("submit" , function (e){
    e.preventDefault();
    let nameInput=document.getElementById("name");
    let numberInput=document.getElementById("number");
    let ageInput=document.getElementById("age");
    let genreInput=document.getElementById("genre");

    let name = nameInput.value;
    let number = numberInput.value;
    let age = ageInput.value;
    let genre = genreInput.value;
    let newObj = {
        "name": name,
        "number" :number,
        "age": age, 
        "genre": genre};
    submitData(newObj);
    form.reset();
    console.log(name, number, age, genre);


});

function submitData(newObj){
console.log("submit data", newObj);
localStor
}

let button = document.getElementById("watchButton");
  let watched = false;

  button.addEventListener("click", () => {
    watched = !watched;
    button.textContent = watched
      ? "Mark as unwatched"
      : "Mark as watched";
  });

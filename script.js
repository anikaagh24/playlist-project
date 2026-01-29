console.log("js console");                                                                                                                                                           

let form = document.querySelector("form");
let data; 
let grid = document.querySelector(".grid-container");

var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status==200){
        

    data=JSON.parse(xhttp.responseText);
    console.log(data);
    localStorage.setItem("dataList", JSON.stringify(data));

    data.forEach(function(movie){ 
    let card = document.createElement("div");
    card.classList.add("card");


    let TextData = 
    "<div class = 'movie-title'>" + movie.title + "</div>" + "<span>" + 
    "Producer: movie.publisher" + "<br>" + "Release Date:" + movie.releaseDate + "<br>" 
    "</span>";

    card.innerHTML= TextData;

    if (movie.imgSrc){
        card.style.backgroundImage = "url('" + movie.imgSrc + "')";
    }

    grid.appendChild(card);
});

    }
    };

xhttp.open("GET", "moviedata.json" , true);
xhttp.send();


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
console.log("js console");                                                                                                                                                           

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


let button = document.querySelector(".submit");
document.getElementById("submit").addEventListener("click", function(){
    console.log("click");
});
let searchTerm = "";
var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + searchTerm + "&limit=10&api_key=69Mht6ewKKZaEMo38HgDTlciavTxPRc8"
var btnArr = ["corgie", "pupper", "doge", "puppy", "cool dog"]
var btnSec = document.getElementById("button-section");
var gifArea = document.getElementById("gif-area");

const getGifs = () => {
    console.log(queryURL);// NOTE: take a look at the url here. it's missing a value for q so it's not searching for anything.
    fetch(queryURL)
        .then(function (response) {
            console.log(response);
            console.log(response.json());// NOTE: you can only read the JSON data once. look at the second answer for https://stackoverflow.com/questions/53511974/javascript-fetch-failed-to-execute-json-on-response-body-stream-is-locked
            return response.json();
            // var data = response.json()
            // .then(function(data){
            //     console.log(data);

            // })
            
            // for (var i = 0; i < data.length; i++) {
            //     console.log(data[i].embed_url);
            //  }
        }).then(function(data){
            console.log(data);
        })
};

for (i = 0; i < btnArr.length; i++) {
    var btn = document.createElement("A");
    btn.innerHTML = btnArr[i];
    btn.setAttribute('class', "waves-effect waves-light btn");
    btn.setAttribute('id', 'button' + [i]);
    btnSec.appendChild(btn);
}

btnSec.onclick = function (event) {
    let target = event.target;
    let searchTerm = target.text
    getGifs();
    console.log(searchTerm);
}




// TODO: on button click generate 10 gifs
// TODO: write a search fxn for the search bar

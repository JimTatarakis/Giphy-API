var btnArr = ["corgie", "pupper", "doge", "puppy", "cool dog"]
var btnSec = document.getElementById("button-section");
var gifArea = document.getElementById("gif-area");
// add event listener for when enter is pressed

document.querySelector('#search').addEventListener('keypress', function (e) {
    var key = e.which || e.keyCode;
    if (key === 13) { // 13 is enter
        var btn = document.createElement("A");
        btn.innerHTML = document.getElementById("search").value; //need to get typed data!!!!
        btn.setAttribute('class', "waves-effect waves-light btn");
        btnSec.appendChild(btn);
    }
});

// call api
const getGifs = (searchTerm) => {
    gifArea.innerHTML= "";
    console.log(searchTerm);
    let queryURL = "https://api.giphy.com/v1/gifs/search?q=" + searchTerm + "&limit=10&api_key=69Mht6ewKKZaEMo38HgDTlciavTxPRc8"
    console.log(queryURL);
    fetch(queryURL)
        .then(function (response) {
            return response.json();
        }).then(function(json){
            console.log(json);
            // console.log(JSON.stringify(data));
            console.log(json.data);
            for (var i = 0; i < json.data.length; i++) {
                console.log(json.data[i].embed_url);
                var gifDiv = document.createElement("DIV");
                var img = document.createElement("IMG");
                img.src = json.data[i].images.fixed_height_small_still.url;
                img.setAttribute('animate', json.data[i].images.original.url);
                img.setAttribute('still', json.data[i].images.fixed_height_small_still.url);
                var rating = document.createElement("P");
                rating.innerHTML = 'Rating:' + json.data[i].rating;
                gifDiv.appendChild(img);
                gifDiv.appendChild(rating);
                gifArea.appendChild(gifDiv);
                
             }
        })
};

for (i = 0; i < btnArr.length; i++) {
    var btn = document.createElement("A");
    btn.innerHTML = btnArr[i];
    btn.setAttribute('class', "waves-effect waves-light btn");
    btn.setAttribute('id', 'button' + [i]);
    btnSec.appendChild(btn);
}
// populate the gifs
btnSec.onclick = function (event) {
    let target = event.target;
    let searchTerm = target.text

    getGifs(searchTerm);
}
const animateGif = (selectedGif) => {
    selectedGif.src = selectedGif.getAttribute('animate');
}
// animate the gifs
gifArea.onclick = function (event) {
    let selectedGif = event.target;
    // if not animated
    if( selectedGif.getAttribute('animate') === selectedGif.src){
        selectedGif.src = selectedGif.getAttribute('still');
    }
    else{
        animateGif(selectedGif);
    }
}
// TODO: make buttons from search bar
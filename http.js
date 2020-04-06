// Create click listener for get joke button

document
  .getElementById("get-joke")
  .addEventListener("click", getChuckNorrisJoke);

// Get info from https://api.chucknorris.io/ and put it on page

function getChuckNorrisJoke() {
  fetch("https://api.chucknorris.io/jokes/random")
    .then((response) => response.json())
    .then((dataObj) => {
      console.log(dataObj);
      let jokeWrapper = document.getElementById("chuck-norris-joke");
      jokeWrapper.innerHTML = `<p>${dataObj.value}<p>`;
    });
}

// Create click listener for get design quote button

document
  .getElementById("get-design-quote")
  .addEventListener("click", getQuotesOnDesign);
// Get info from https://quotesondesign.com/api/ and get it on page

function getQuotesOnDesign() {
  fetch("https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand")
    .then((response) => response.json())
    .then((dataArr) => {
      console.log(dataArr);
      let randomNumber = Math.floor(Math.random() * 10);
      console.log(randomNumber);
      let qDWrapper = document.getElementById("random-design-quote");
      qDWrapper.innerHTML = `<p>${dataArr[randomNumber].content.rendered}<p>`;
    });
}

// Create Click listener for get number fact button
document
  .getElementById("get-number-fact")
  .addEventListener("click", getNumberFact);
// Get info from http://numbersapi.com/ and get on page

function getNumberFact() {
  let randomNumber = Math.floor(Math.random() * 101);
  document.getElementById("number").innerHTML = randomNumber;
  fetch(`http://numbersapi.com/${randomNumber}`, {
    headers: {
      "Content-type": "application/json",
      Accept: "application/json",
    },
  })
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((dataObj) => {
      console.log(dataObj);
      let numberFact = document.getElementById("number-fact");
      numberFact.innerHTML = dataObj.text;
    });
}

// Create Click listener for cocktail button
document.getElementById("get-cocktail").addEventListener("click", getCockTail);

// Get info from https://www.thecocktaildb.com/api.php?ref=apilist.fun

function getCockTail() {
  fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((dataObj) => {
      console.log(dataObj);
      let cTWraper = document.getElementById("cocktail");
      cTWraper.innerHTML = `<p>${dataObj.drinks[0].strDrink}<p>`;
    });
}

// Find a random API from https://apilist.fun/ and get some info onto the screen!

document
  .getElementById("get-kitty-image")
  .addEventListener("click", getKittyImage);
//Paypal button
function getKittyImage() {
  let randomNumber = Math.floor(Math.random() * 201);
  let randomNumber1 = Math.floor(Math.random() * 201);
  fetch(`https://community-placekitten.p.rapidapi.com/200/300`, {
    headers: {
      "x-rapidapi-host": "community-placekitten.p.rapidapi.com",
      "x-rapidapi-key": "45722b91cbmsh3720772e66d4286p134884jsndc3bec7a1a80",
    },
  })
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((dataObj) => {
      console.log(dataObj);
      let kittyImage = document.getElementById("kitty-image");
      kittyImage.innerHTML = URL.createObjectURL(kittyImage);
    });
}

// Create click listener for get joke button

document.addEventListener("click", getChuckNorrisJoke);

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

// Get info from https://quotesondesign.com/api/ and get it on page

// Create Click listener for get number fact button

// Get info from http://numbersapi.com/ and get on page

// Create Click listener for cocktail button

// Get info from https://www.thecocktaildb.com/api.php?ref=apilist.fun

// Find a random API from https://apilist.fun/ and get some info onto the screen!

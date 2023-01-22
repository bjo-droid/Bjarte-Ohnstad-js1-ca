const searchString = document.location.search;
const key = "api_key=55dcacba7cb6be65367d50a7d9e290c4";
const imgURL = "https://image.tmdb.org/t/p/w500/";
const resultsContainer = document.querySelector(".content");

// remove invalid character from string
const convertString = searchString.slice(1);

const searchURL =
  "https://api.themoviedb.org/3/search/movie?api_key=55dcacba7cb6be65367d50a7d9e290c4&language=en-US&" +
  convertString +
  "&page=1&include_adult=false";

async function fetchSearh() {
  const searchResults = await fetch(searchURL);
  const searchJson = await searchResults.json();
  const searchMovie = searchJson.results;
  if (searchJson.success === false) {
    throw new Error("Status code error : False");
  } else {
    resultsContainer.innerHTML = "";

    for (let i = 0; i < 20; i++) {
      resultsContainer.innerHTML += `
    <a href="details.html?id=${searchMovie[i].id}">
    <div class="movie-card">
    <img src="${imgURL + searchMovie[i].poster_path}">
    <div class="movie-title">
    <h4>${searchMovie[i].title}</h4>
    </div>
    </div>
    </a>`;
    }
  }
}

fetchSearh();

const key = "api_key=55dcacba7cb6be65367d50a7d9e290c4";
const imgURL = "https://image.tmdb.org/t/p/w500/";
const resultsContainer = document.querySelector(".content");
const trendingURL = "https://api.themoviedb.org/3/trending/movie/week?" + key;

async function fetchTrending() {
  const trendingResult = await fetch(trendingURL);
  const trendingJson = await trendingResult.json();
  console.log(trendingJson);
  const trendingMovie = trendingJson.results;
  console.log(trendingMovie[0]);
  resultsContainer.innerHTML = "";

  for (let i = 0; i < 20; i++) {
    resultsContainer.innerHTML += `
    <a href="details.html?id=${trendingMovie[i].id}">
    <div class="movie-card">
    <img src="${imgURL + trendingMovie[i].poster_path}">
    <div class="movie-title">
    <h4>${trendingMovie[i].original_title}</h4>
    </div>
    </div>
    </a>`;
  }
}
fetchTrending();
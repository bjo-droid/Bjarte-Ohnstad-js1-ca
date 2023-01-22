const key = "api_key=55dcacba7cb6be65367d50a7d9e290c4";
const imgURL = "https://image.tmdb.org/t/p/w500/";
const resultsContainer = document.querySelector(".content");
const trendingURL = "https://api.themoviedb.org/3/movie/top_rated?" + key;

async function fetchTrending() {
  try {
    const trendingResult = await fetch(trendingURL);
    const trendingJson = await trendingResult.json();
    if (trendingJson.success === false) {
      throw new Error("Status code error : False");
    } else {
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
      <h4>${trendingMovie[i].title}</h4>
      </div>
      </div>
      </a>`;
      }
    }
  } catch (error) {
    console.log(error);
    content.innerHTML = displayError("Something went wrong");
  }
}
fetchTrending();

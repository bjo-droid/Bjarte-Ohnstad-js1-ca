const content = document.querySelector(".movie-content");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const imgURL = "https://image.tmdb.org/t/p/w500/";
const key = "?api_key=55dcacba7cb6be65367d50a7d9e290c4";

const id = params.get("id");

const url = "https://api.themoviedb.org/3/movie/" + id + key;

async function fetchMovie() {
  try {
    const response = await fetch(url);
    const details = await response.json();
    if (details.success === false) {
      throw new Error("Status code error : False");
    } else {
      content.innerHTML = `<h1>${details.title}</h1>
                                <img src="${imgURL + details.poster_path}">
                                <div class="details-description">
                                <h2>Overview</h2>
                                <h3>"${details.tagline}"</h3>
                                <p>${details.overview}</p>
                                <ul>
                                <li>Released: ${details.release_date}</li>
                                <li>Revenue: ${details.revenue} $</li>
                                <li>Vote average: ${details.vote_average}</li>
                                <li>Runetime: ${details.runtime}min</li>
                                </ul>
                                <div class="description-img">
                                <img src="${imgURL + details.backdrop_path}">
                                </div>
                                </div>                                
                                `;
    }
  } catch (error) {
    console.log(error);
    content.innerHTML = displayError("Something went wrong");
  }
}

fetchMovie();

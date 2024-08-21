const APILINK = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=c8cb5c4b5243efa66e167c9b6ed15b7b&page=1";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=c8cb5c4b5243efa66e167c9b6ed15b7b&query=";

const main = document.getElementById("section");
const form = document.getElementById("form");
const search = document.getElementById("query");
//请求电影数据
ReturnMovies(APILINK);

form.addEventListener('submit', (e) => {
  e.preventDefault();
  main.innerHTML = '';

  const searchItem = search.value;

  if (searchItem) {
    ReturnMovies(SEARCHAPI + searchItem);
    search.value = "";
  }
})


function ReturnMovies(url) {
  fetch(url).then(result => result.json())
    .then(function(data) {
      console.log(data.results);
      data.results.forEach(
        element => {
          const div_card = document.createElement('div');
          div_card.setAttribute('class', 'card');

          const div_row = document.createElement('div');
          div_row.setAttribute('class', 'row');

          const div_column = document.createElement('div');
          div_column.setAttribute('class', 'column');

          const image = document.createElement('img');
          image.setAttribute('class', 'thumbnail');
          image.setAttribute('id', 'image');

          const title = document.createElement('h3');
          title.setAttribute('id', 'title');

          title.innerHTML = `${element.title}`;
          image.src = IMG_PATH + element.poster_path;

          div_card.appendChild(image);
          div_card.appendChild(title);
          div_column.appendChild(div_card);
          div_row.appendChild(div_column);
          main.appendChild(div_row);
        }
      );
    });
}

console.log("Hello World")
const moviesOriginalList = [
  { title: "The Shawshank Redemption", genre: "Drama" },
  { title: "The Godfather", genre: "Crime" },
  { title: "The Godfather: Part II", genre: "Crime" },
  { title: "The Dark Knight", genre: "Action" },
  { title: "12 Angry Men", genre: "Drama" },
  { title: "Schindler's List", genre: "Drama" },
  { title: "The Lord of the Rings: The Return of the King", genre: "Adventure" },
  { title: "Pulp Fiction", genre: "Crime" },
  { title: "The Good, the Bad and the Ugly", genre: "Western" },
  { title: "Fight Club", genre: "Drama" },
  { title: "Forrest Gump", genre: "Drama" },
  { title: "Inception", genre: "Action" },
  { title: "The Lord of the Rings: The Fellowship of the Ring", genre: "Adventure" },
  { title: "Star Wars: Episode V - The Empire Strikes Back", genre: "Action" },
  { title: "The Lord of the Rings: The Two Towers", genre: "Adventure" },
  { title: "The Matrix", genre: "Action" },
  { title: "Goodfellas", genre: "Crime" },
  { title: "One Flew Over the Cuckoo's Nest", genre: "Drama" },
  { title: "Seven Samurai", genre: "Adventure" },
  { title: "Se7en", genre: "Crime" },
  { title: "City of God", genre: "Crime" },
  { title: "The Silence of the Lambs", genre: "Thriller" },
  { title: "It's a Wonderful Life", genre: "Drama" },
  { title: "Life is Beautiful", genre: "Comedy" },
  { title: "The Usual Suspects", genre: "Crime" },
  { title: "Léon: The Professional", genre: "Action" },
  { title: "Spirited Away", genre: "Animation" },
  { title: "Saving Private Ryan", genre: "Drama" },
  { title: "Interstellar", genre: "Adventure" },
  { title: "The Green Mile", genre: "Drama" },
  { title: "The Prestige", genre: "Drama" },
  { title: "The Intouchables", genre: "Comedy" },
  { title: "The Lion King", genre: "Animation" },
  { title: "The Pianist", genre: "Drama" },
  { title: "The Departed", genre: "Crime" },
  { title: "Whiplash", genre: "Drama" },
  { title: "Gladiator", genre: "Action" }
]

let movies = []
localStorage.setItem('movieListtoSave',JSON.stringify(moviesOriginalList))
movies = JSON.parse(localStorage.getItem('movieListtoSave'))

const titleInput = document.getElementById('title')
const genreInput = document.getElementById('genre')
const resultULTag = document.getElementById('results')
const countTag = document.getElementById('count');


let movieName = []

document.getElementById("search").addEventListener('click', function(event){
  console.log("button clicked")
 
  if(titleInput.value){
    movieName = searchByTitle(titleInput.value);
    console.log(movieName)
    
  } else if(genreInput.value){
    movieName = searchByGenre(genreInput.value);
    console.log(movieName)
    
  }
  displayResults(movieName)
})

function searchByTitle(searchItem){
  console.log(movies)
  return movies.filter(movie => movie.title.toLowerCase().includes(searchItem.toLowerCase().trim()));
  
}

function searchByGenre(searchItem){
  return movies.filter(movie => movie.genre.toLowerCase().includes(searchItem.toLowerCase().trim()));
}

function displayResults(lists){
  resultULTag.innerHTML = '';
  lists.map(ele =>{
    let childTag = `<li>${ele.title}(${ele.genre})</li>`;
    resultULTag.innerHTML+= childTag;
  })
  countByGenre(lists);
}

function sortByTitle(){
 const sortedList =  movieName.sort((a,b)=>a.title.localeCompare(b.title))
 displayResults(sortedList)
}

function sortByGenre(){
  const sortedList =  movieName.sort((a,b)=>a.genre.localeCompare(b.genre))
  displayResults(sortedList)
 }

function countByGenre(lists){
  let count = {}
  lists.map(item => {
 //   if(count[item.genre]){
 //     count[item.genre]++
 //   } else {
 //     count[item.genre] = 1;
 //   }
 count[item.genre] = (count[item.genre] | 0) + 1;
  })
  console.log(count)
  countTag.innerHTML = '';
  for(key in count) {
      console.log(key);
      countTag.innerHTML += `<li>${key} : ${count[key]}</li>`
  }
}
function searchBoth(title, genre){
  return movies.filter(movie => movie.title.toLowerCase().includes(title.toLowerCase().trim()) && movie.genre.toLowerCase().includes(genre.toLowerCase().trim()));
}
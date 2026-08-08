 const movieList = [
  {
    title: "Brave",
    year: 2012,
    rating: 7.1,
    genre: "Animation"
  },
  {
    title: "Ratatouille",
    year: 2007,
    rating: 8.0, 
    genre: "Animation"
  },
  {
    title: "The Lion King",
    year: 1994,
    rating: 8.5,
    genre: "Animation"
  },
  {
    title: "Zootopia",
    year: 2016,
    rating: 8.0,
    genre: "Animation"
  },
  {
    title: "Coco",
    year: 2017,
    rating: 8.4,
    genre: "Animation"
  },
  {
    title: "Spirited Away",
    year: 2001,
    rating: 8.6,
    genre: "Fantasy"
  },
  {
    title: "My Neighbor Totoro",
    year: 1988,
    rating: 8.1,
    genre: "Fantasy"
  },
  {
    title: "Your Name",
    year: 2016,
    rating: 8.4,
    genre: "Romance"
  },
  {
    title: "A Silent Voice",
    year: 2016,
    rating: 8.1,
    genre: "Drama"
  },
  {
    title: "The Girl Who Leapt Through Time",
    year: 2006,
    rating: 7.8,
    genre: "Sci-Fi"
  },
  {
    title: "Detective Conan: The Time Bombed Skyscraper",
    year: 1997,
    rating: 7.5,
    genre: "Mystery"
  },
  {
    title: "Summer Wars",
    year: 2009,
    rating: 7.4,
    genre: "Sci-Fi"
  },
  {
    title: "Weathering With You",
    year: 2019,
    rating: 7.5,
    genre: "Fantasy"
  },
  {
    title: "Howl's Moving Castle",
    year: 2004,
    rating: 8.2,
    genre: "Fantasy"
  },
  {
    title: "Kiki's Delivery Service",
    year: 1989,
    rating: 7.8,
    genre: "Fantasy"
  },
  {
    title: "Kung Fu Panda",
    year: 2008,
    rating: 7.6,
    genre: "Comedy"
  },
  {
    title: "Spider-Man: Into the Spider-Verse",
    year: 2018,
    rating: 8.4,
    genre: "Action"
  },
  {
    title: "The Secret World of Arrietty",
    year: 2010,
    rating: 7.6,
    genre: "Fantasy"
  },
  {
    title: "Wall-E",
    year: 2008,
    rating: 8.4,
    genre: "Sci-Fi"
  },
  {
    title: "Finding Nemo",
    year: 2003,
    rating: 8.2,
    genre: "Adventure" 
  }
];

const movieCont = document.getElementById("movieContainer");//find movie cont from the html by id and store it in movieconta

function displayMovies(movies){//e give a parameter called movies for the function
    
  //  if (movies.length === 0) {
  //     movieCont.innerHTML =`<div class="col-span-full ">
  //                  <p>kjhgfds</p>
  //      </div>`;
  //     console.log("vhvh");
  //     return;
  //    }
   
  const movieCards = movies.map((movie) => { //go trough movie  movies is an array  map go thrugh the array one movie at a time
    return`
      <div class="bg-[#5e4b43] rounded-2xl p-5 border border-[#7a6258] shadow-xl hover:scale-105 transition duration-300">
    
        <h3 class="text-2xl font-bold text-[#f5e1ee] mb-3">${movie.title}</h3> 
   
        <p class="text-gray-400 mb-1">
        📅 <span class="font-semibold">Year:</span> ${movie.year}
        </p>

        <p class="text-yellow-600 font-semibold mb-1">
        ⭐ Rating: ${movie.rating}
        </p>

       <p class="text-green-600 font-medium">
        🎭 Genre: ${movie.genre}
       </p>
     </div>`//movie is the currunt object
  });

  const movieHtml = movieCards.join("");//combine them 
  movieCont.innerHTML = movieHtml;

}

displayMovies(movieList);//movies = moviesList call a function

const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input",function(){
    const searchText = searchInput.value.toLowerCase();
    const filteredMovies = movieList.filter((movie) => {
      return movie.title.toLowerCase().includes(searchText);
    });

});
 
//genre selector
const genreFilter=document.getElementById("genreFilter");

genreFilter.addEventListener("change",function(){
    const selectedGenre = genreFilter.value;//get the selected value fromthe html option 

    let filteredMovies;// to tore the mvies 

    if (selectedGenre === "all") {
      filteredMovies = movieList;
    }else{
      filteredMovies = movieList.filter((movie) => {
        return movie.genre === selectedGenre;
      });
    }
    displayMovies(filteredMovies);
});

//top sort movie 

const topRated = document.getElementById("topRated");

topRated.addEventListener("click",function(){
  const sortedMovies = [...movieList];// copy of the movie list array 

  sortedMovies.sort((a,b) => {
    return b.rating - a.rating;
  });
  displayMovies(sortedMovies);
});
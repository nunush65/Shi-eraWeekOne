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
   
  const movieCards = movies.map((movie) => { //go trough movie  movies is an array  map go thrugh the array one movie at a time
    return `
<div class="bg-[#5E4B43] border border-[#7A6258] rounded-3xl p-6 shadow-2xl transition duration-300 hover:-translate-y-2 hover:shadow-black/50">

    <h2 class="text-2xl font-bold tracking-wide text-[#F8F5F2] mb-5 border-b border-[#7A6258] pb-3">
        ${movie.title}
    </h2>

    <div class="space-y-4 text-[#E8DDD8]">

        <div class="flex items-center gap-3">

            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-[#D8C3A5]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3M5 5h14a1 1 0 011 1v13a1 1 0 01-1 1H5a1 1 0 01-1-1V6a1 1 0 011-1zM4 11h16"/>
            </svg>

            <span class="font-medium">${movie.year}</span>

        </div>

        <div class="flex items-center gap-3">

            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.719c-.783-.57-.38-1.81.588-1.81H7.03a1 1 0 00.95-.69L9.05 2.927z"/>
            </svg>

            <span class="font-semibold">${movie.rating}</span>

        </div>

        <div class="flex items-center gap-3">

            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-[#D8C3A5]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M7 7h10M7 12h10M7 17h6"/>
            </svg>

            <span>${movie.genre}</span>

        </div>

    </div>

</div>
`;//movie is the currunt object
  });

  const movieHtml = movieCards.join("");//combine them 
  movieCont.innerHTML = movieHtml;

}

displayMovies(movieList);//movies = moviesList call a function

const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input",function(){
    const searchText = searchInput.value.toLocaleLowerCase();
  
    const filteredMovies = movieList.filter((movie) => {
      return movie.title.toLocaleLowerCase().includes(searchText);
    });
  
    displayMovies(filteredMovies);
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

//sort movie 

const topRated = document.getElementById("topRated");

topRated.addEventListener =("click",function(){
  const sortedMovies = [...movieList];// copy of the movie list array 

  sortedMovies.sort((a,b) => {
    return b.rating - a.rating;
  });
  displayMovies(sortedMovies);
});
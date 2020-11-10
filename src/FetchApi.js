const API_KEY = "daa322225d480c216e49c42421851c6d";

export  const request = { 
    NetflixOriginal: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
    TrendingNow:`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}`,
    PopularMovies:`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
    UpcomingMovies:`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
    KidsMovies:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&certification_country=US&certification.lte=G&sort_by=popularity.desc`
    
 };

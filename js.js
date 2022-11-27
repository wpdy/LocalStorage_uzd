import data from './data.js';


function tikrina() {
    const tikrina_favorite = localStorage.getItem('favorite_movies')

    if (tikrina_favorite == null) {
        return []
    }
    else {
        return JSON.parse(tikrina_favorite)
    }
}

let movies = tikrina();


function getMovieId(x) {
    const filmId = data.find(movie => movie.id === x)
    return filmId
}

const movieID = 675353
const movie = getMovieId(movieID)

function PushMovieToLocalStorage() {
    
    const new_movie = {
        movieId: movie.id,
        movieTitle: movie.title,
    }

    for (let i = 0; i < movies.length; i++) {
        if (movies[i].movieId == movieID) {
            return 0
        }
    }

    movies.push(new_movie)
    localStorage.setItem('favorite_movies', JSON.stringify(movies))

}

function getMoviesFromLocalStorage() {
    const films = localStorage.getItem('favorite_movies')
    return JSON.parse(films)
    
}
function PrintMoviesToConsole() {
    const MoviesFromLocal = getMoviesFromLocalStorage()
    for(let i = 0; i < MoviesFromLocal.length; i++) {
    console.log(MoviesFromLocal[i])
}
}


function deleteMovieById(x) {
    const film = getMoviesFromLocalStorage()

    for (let i = 0; i < film.length; i++) {
        if (film[i].movieId == x) {
            film.splice(i, 1)
            localStorage.removeItem('favorite_movies', movies)
            localStorage.setItem('favorite_movies', JSON.stringify(film))
        }
    }
}

PushMovieToLocalStorage()
getMoviesFromLocalStorage()
PrintMoviesToConsole()
deleteMovieById()














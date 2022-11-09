var director = 'Charles Chaplin';
getAllDirectors(movies);
const moviesDirector = getMoviesFromDirector(movies, director);
moviesAverageOfDirector(moviesDirector, director);
// Exercise 1: Get the array of all directors.
function getAllDirectors(movies) {
    let result;
    // pass a function to map
    result = movies.map(function(movie) {
        return movie.director
    });
    console.log("EXERCICE 1 ->", result);
    return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
    let result;
    result = array.filter(function(movie) {
        return movie.director === director;
    });
    console.log("EXERCICE 2 ->", result);
    return result;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
 
    let result;
    result = array.reduce(function(sum, movie) {
        return  sum + movie.score;
    },0) / array.length;
    console.log("EXERCICE 3 ->", result); 
    return result;
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {

}

// Exercise 5: Order by year, ascending
function orderByYear() {

}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory() {

}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {

}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
    module.exports = {
        getAllDirectors,
        getMoviesFromDirector,
        moviesAverageOfDirector,
        orderAlphabetically,
        orderByYear,
        moviesAverageByCategory,
        hoursToMinutes,
        bestFilmOfYear,
    };
}
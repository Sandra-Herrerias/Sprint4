var director = 'Charles Chaplin';
getAllDirectors(movies);
getMoviesFromDirector(movies, director);
moviesAverageOfDirector(movies, director);
orderAlphabetically(movies);
orderByYear(movies);

// Exercise 1: Get the array of all directors.
function getAllDirectors(movies) {
    let result;
    // pass a function to map
    result = movies.map(function(movie) {
        return movie.director;
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
    let moviesDirector = getMoviesFromDirector(array, director);
    result = moviesDirector.reduce(function(sum, movie) {
        return sum + movie.score;
    }, 0) / moviesDirector.length;
    console.log("EXERCICE 3 ->", result.toFixed(2));
    result = result.toFixed(2);
    return result;
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
    let result;

    //sort alphabetically
    result = array.sort(function(a, b) {
        return a.title.localeCompare(b.title);
    });

    //get only titles
    result = result.map(movie => ({ title: movie.title }));

    console.log("EXERCICE 4 ->", result.slice(0, 20));
    return result.slice(0, 20);
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
    let result;

    result = array.sort(function(a, b) {
        if (a.title < b.title || a.year < b.year) {
            return -1;
        }
        if (a.title > b.title || a.year > b.year) {
            return 1;
        }
        return 0;
    });

    //get titles and years
    result = result.map(movie => ({ title: movie.title, year: movie.year }));

    console.log("EXERCICE 5 ->", result);
    return result;
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
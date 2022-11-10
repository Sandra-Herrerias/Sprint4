//hoursToMinutes(movies);
// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
    let result;
    // pass a function to map
    result = array.map(function(movie) {
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
    return parseFloat(result);
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
    let result;
    let aux = [];
    aux = Array.from(array);

    //sort alphabetically
    result = aux.sort(function(a, b) {
        return a.title.localeCompare(b.title);
    });

    //get only titles
    result = result.map(movie => movie.title);

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
function moviesAverageByCategory(array, category) {
    let result;

    result = array.filter(movie => {
        return movie.genre.includes(category);
    });

    result = result.filter(element => {
        return element.score !== '';
    });

    result = result.reduce(function(sum, movie) {
        return sum + movie.score;
    }, 0) / result.length;

    console.log("EXERCICE 6 ->", result.toFixed(2));
    result = result.toFixed(2);
    return parseFloat(result);
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {

    let result;
    //get movies array hours duration
    result = array.map(function(movie) {
        return movie.duration;
    });

    /** conversion from hours to minutes*/
    let durationMinutes = [];
    let finalSumMinutes;
    let hour;
    let minutes;
    let hourToMinute;
    let hourAndMinWithText;
    let hourWithText;
    let minutesWithText;

    result.forEach(function(time) {
        hourAndMinWithText = time;

        if (/\s/.test(hourAndMinWithText)) { //if has whitespaces
            //separate hours and minutes by whitespace
            hourWithText = hourAndMinWithText.substring(0, hourAndMinWithText.indexOf(' '));
            minutesWithText = hourAndMinWithText.substring(hourAndMinWithText.indexOf(' ') + 1);
            //get only numbers to get hour
            hour = hourWithText.replace(/\D/g, "");
            //get only numbers to get minutes
            minutes = minutesWithText.replace(/\D/g, "");
            //conversion
            hourToMinute = parseInt(hour) * 60;
            //sum
            finalSumMinutes = parseInt(hourToMinute) + parseInt(minutes);
        } else {
            //get only numbers to get hour
            hour = hourAndMinWithText.replace(/\D/g, "");
            //conversion
            hourToMinute = parseInt(hour) * 60;
            //sum
            finalSumMinutes = hourToMinute;
        }

        //add to minutes array
        durationMinutes.push(finalSumMinutes);
    });

    /** create a new array with conversions done*/
    let cloneArray = [array];

    cloneArray.forEach((element, i) => {
        element.duration = durationMinutes[i];
    });
    console.log("EXERCICE 7 ->", cloneArray);
    return cloneArray;
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
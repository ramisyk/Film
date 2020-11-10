function Storage(){
    
}
Storage.prototype.addFilmToStorage = function(newFilm){
    let films = this.getFilmsFromStorage();
    console.log(newFilm);
    console.log(films);
    films.push(newFilm);

    localStorage.setItem("films", JSON.stringify(films));
} 

Storage.prototype.getFilmsFromStorage = function() {
    let films;

    if (localStorage.getItem("films") === null) {
        films = [];
    }
    else {
        films = JSON.parse(localStorage.getItem("films"));
    }

    return films;
}

Storage.prototype.deleteFilmFromStorage = function(filmTtitle) {
    let films = this.getFilmsFromStorage();
    
    films.forEach(function(film, index){
        if(film.title === filmTtitle) {
            films.splice(index, 1);
        }
    });
    localStorage.setItem("films", JSON.stringify(films));
}

Storage.prototype.clearAllFilmsFromStorage = function() {
    localStorage.removeItem("films");
}
class Storage {

static addFilmToStorage(newFilm) {

    let films = this.getFilmsFromStorage();
    
    const ObjeContent = {Title:newFilm.Title, Director:newFilm.Director, Poster:newFilm.Poster};
    films.push(ObjeContent);
    localStorage.setItem("films", JSON.stringify(films));
}


static getFilmsFromStorage()  {
    let films;

    if(localStorage.getItem("films") === null) {
        films = []
    }
    else {
        films = JSON.parse(localStorage.getItem("films"));
    }
    return films;
}


static DeleteFromStorage(id) {

    let films = this.getFilmsFromStorage();
    films.splice(id,1);
    localStorage.setItem("films", JSON.stringify(films));

}

}
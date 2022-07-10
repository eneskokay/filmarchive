class UI{


static addFilmToUI(newFilm) {
    MoviesContainer.innerHTML += `
    <div class="movie">
    <div class="poster"><img src="${newFilm.Poster}"></div>
    <div class="movie-infos"><p class="movie-name">${newFilm.Title}</p><p class="movie-director">${newFilm.Director}</p></div>
    <div class="remover"><svg><path id="remove-icon" d="M135.2 17.69C140.6 6.848 151.7 0 163.8 0H284.2C296.3 0 307.4 6.848 312.8 17.69L320 32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H128L135.2 17.69zM394.8 466.1C393.2 492.3 372.3 512 346.9 512H101.1C75.75 512 54.77 492.3 53.19 466.1L31.1 128H416L394.8 466.1z"/></svg><p>Remove</p></div>
    </div>
    `;
    ChectToContainerHeight();
}


static clearInputs = function(element1,element2,element3) {
    element1.value = "";
    element2.value = "";
    element3.value = "";
}
static displayMessages(message,query,bool) {
    if (bool == true){
        if(document.getElementById("error")){
            if(!(document.getElementById("error").classList.contains(query))) {

                document.getElementById("error").remove();
                let inputbox = document.getElementsByClassName("inputbox");
                for(let i = 0; i<3; i++) {
                    inputbox[i].style.boxShadow = "0px 0px 8px 0px black";
                }

    const div = document.createElement("div");
    div.id = "error";
    div.className = query;
    div.textContent = `${message}`;
    form.getElementsByTagName("div")[query].style.boxShadow = "0px 0px 8px 0px red";
    formContainer.appendChild(div); // I was use += innerHTML but innerHTML is removing to EventListeners. So I changed it to appenChild.
        }
    }
    else {
        const div = document.createElement("div");
        div.id = "error";
        div.className = query;
        div.textContent = `${message}`;
        form.getElementsByTagName("div")[query].style.boxShadow = "0px 0px 8px 0px red";
        formContainer.appendChild(div);
    }
}
    else{
        if(document.getElementById("error")){
                document.getElementById("error").remove();
                let inputbox = document.getElementsByClassName("inputbox");
                for(let i = 0; i<3; i++) {
                    inputbox[i].style.boxShadow = "0px 0px 8px 0px black";
                }
        }

    }
}

static loadAllFilms(Movies) {
    Movies.forEach(function(items){
        MoviesContainer.innerHTML += `
        <div class="movie">
        <div class="poster"><img src="${items.Poster}"></div>
        <div class="movie-infos"><p class="movie-name">${items.Title}</p><p class="movie-director">${items.Director}</p></div>
        <div class="remover"><svg><path id="remove-icon" d="M135.2 17.69C140.6 6.848 151.7 0 163.8 0H284.2C296.3 0 307.4 6.848 312.8 17.69L320 32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H128L135.2 17.69zM394.8 466.1C393.2 492.3 372.3 512 346.9 512H101.1C75.75 512 54.77 492.3 53.19 466.1L31.1 128H416L394.8 466.1z"/></svg><p>Remove</p></div>
        </div>
        `;
    });
}
static RemoveFromUI(Movies) {

    Movies.parentElement.remove();
    ChectToContainerHeight();

}


}

const form = document.getElementById("add-to-movies");
const TitleElement = document.querySelector("#title");
const DirectorElement = document.querySelector("#Director");
const PosterElement = document.querySelector("#Poster");
const MoviesContainer = document.getElementById("movies-container");
const formContainer = document.querySelector(".form-container");


eventListeners();
function eventListeners(){
    form.addEventListener("submit", addFilm);
    document.addEventListener("DOMContentLoaded", function(){
            let Movies = Storage.getFilmsFromStorage();
            UI.loadAllFilms(Movies); 
            ChectToContainerHeight(); 
            deleteItem();
            
        }
    )
};

function addFilm(event) {
    const Title = TitleElement.value.trim();
    const Director = DirectorElement.value.trim();
    const Poster = PosterElement.value.trim();


    if(Title === "")
    {
        UI.displayMessages("Movie cannot be Empty",0,true);
    }
    else if(Director === "") {
        UI.displayMessages("Director cannot be Empty",1,true);
    }
    else if(Poster === "") {
        UI.displayMessages("Poster cannot be Empty",2,true);
    }
    else {
        UI.displayMessages(false);
        const newFilm = new Film(Title,Director,Poster);
        
        UI.addFilmToUI(newFilm);
        Storage.addFilmToStorage(newFilm);
        
        deleteItem();
    }

    
    UI.clearInputs(TitleElement,DirectorElement,PosterElement);
    event.preventDefault();
    }


function deleteItem() { 
    let removerButton = document.querySelectorAll(".remover");
    let arrayNew = [];
    removerButton.forEach(MyFunction);
    function MyFunction(items) {
        arrayNew.push(items);
     }
    for(let i = 0; i<removerButton.length; i++) {
        removerButton[i].addEventListener("click", function(event){
            let l = 0;
            while(l < arrayNew.length) {
               if (arrayNew[l] == removerButton[i]){
                arrayNew.splice(l,1);
                Storage.DeleteFromStorage(l);
               }
               else {
                l++;
               }
             }
             UI.RemoveFromUI(event.currentTarget);
             }
           );
         }
    }

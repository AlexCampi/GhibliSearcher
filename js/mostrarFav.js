
// Imprimir favoritos

let favoritos = localStorage.getItem("favoritos") || "[]";
favoritos = JSON.parse(favoritos);

let impresionFav = ""
if(favoritos.length===0){
    impresionFav = `
    <section class="buscador">
        <div class="buscador__container-fav container">
            <p class="buscador__p">¡Vaya! Parece que aún no has dado me gusta a ninguna película, puedes buscarlas a través de cualquiera de los siguientes enlaces:</p>
            <div class="buscador__button-container">
                <a class="buscador__button-link button" href="busquedaPersonaje.html">Búsqueda por personaje</a>
                <a class="buscador__button-link button" href="busquedaLocalizacion.html">Búsqueda por localización</a>
                <a class="buscador__button-link button" href="busquedaVehiculo.html">Búsqueda por vehículo</a>
            </div>
        </div>
    </section>`
} else{
    for (let i = 0; i < favoritos.length; i++) {
        impresionFav += `
            <div class="card">
                <img class="card__img" src="${favoritos[i].image}" alt="${favoritos[i].title}" style="width:100%">
                <div class="card__container">
                    <div class="card__titles">
                        <h4 class="card__titles-title">${favoritos[i].title}</h4>
                        <h5 class="card__titles-director">Director: ${favoritos[i].director}</h5>
                    </div>
                    <div class="card__like">
                        <input id="card__like-button" class="button--xs" type="button" onclick="quitar('${favoritos[i].films}')" value="♡"></input>
                    </div>
                </div>
            </div>`
    }
}
document.getElementById("buscadorFavoritos").innerHTML = impresionFav

// Quitar de favoritos

function quitar(films){
    let datos = {films: films}

    let favoritos = localStorage.getItem("favoritos") ||"[]"
    favoritos = JSON.parse(favoritos)

    let posLista = favoritos.findIndex(function(e){ return e.films == datos.films})
    if (posLista> -1){
        favoritos.splice(posLista,1)
    }

    localStorage.setItem("favoritos", JSON.stringify(favoritos))
    favoritos = localStorage.getItem("favoritos") || "[]"
    favoritos = JSON.parse(favoritos)

    let impresionFav = ""
    if(favoritos.length===0){
    impresionFav = `
    <section class="buscador">
        <div class="buscador__container-fav container">
            <p class="buscador__p">¡Vaya! Parece que aún no has dado me gusta a ninguna película, puedes buscarlas a través de cualquiera de los siguientes enlaces:</p>
            <div class="buscador__button-container">
                <a class="buscador__button-link button" href="busquedaPersonaje.html">Búsqueda por personaje</a>
                <a class="buscador__button-link button" href="busquedaLocalizacion.html">Búsqueda por localización</a>
                <a class="buscador__button-link button" href="busquedaVehiculo.html">Búsqueda por vehículo</a>
            </div>
        </div>
    </section>`
    } else{
        for (let i = 0; i < favoritos.length; i++) {
            impresionFav += `
                <div class="card">
                    <img class="card__img" src="${favoritos[i].image}" alt="${favoritos[i].title}" style="width:100%">
                    <div class="card__container">
                        <div class="card__titles">
                            <h4 class="card__titles-title">${favoritos[i].title}</h4>
                            <h5 class="card__titles-director">Director: ${favoritos[i].director}</h5>
                        </div>
                        <div class="card__like">
                            <input id="card__like-button" class="button--xs" type="button" onclick="quitar('${favoritos[i].films}')" value="♡"></input>
                        </div>
                    </div>
                </div>`
        }
    }
    document.getElementById("buscadorFavoritos").innerHTML = impresionFav
}
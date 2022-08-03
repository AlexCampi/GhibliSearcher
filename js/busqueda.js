//Búsqueda personajes

let arrayPersonajes =[]
let userPersonaje = {}
let arrayFilms = []

function inputPersonaje(){
    arrayFilms = []
    let input = (document.getElementById('inputPersonaje').value).toLowerCase()
    fetch('https://ghibliapi.herokuapp.com/people')
    .then(
        (answer) => answer.json()
    ).then(
        (datos) => { arrayPersonajes = datos
            if (arrayPersonajes.length>0){
                for (let i = 0; i < arrayPersonajes.length; i++) {
                    if(input === (arrayPersonajes[i].name).toLowerCase()){
                        userPersonaje = arrayPersonajes[i]
                        if(userPersonaje.films.length>0){
                            for (let j = 0; j < userPersonaje.films.length; j++) {
                                fetch(`${userPersonaje.films[j]}`).then((answer)=>answer.json()).then((datos)=>{arrayFilms.push(datos)
                                    let impresion = ""
                                    for (let k = 0; k < arrayFilms.length; k++) {
                                        impresion += `
                                        <div class="card">
                                            <img class="card__img" src="${arrayFilms[k].image}" alt="${arrayFilms[k].title}" style="width:100%">
                                            <div class="card__container">
                                                <div class="card__titles">
                                                    <h4 class="card__titles-title">${arrayFilms[k].title}</h4>
                                                    <h5 class="card__titles-director">Director: ${arrayFilms[k].director}</h5>
                                                </div>
                                                <div class="card__like">
                                                    <input id="card__like-button" class="button--xs" type="button" onclick="like('${arrayFilms[k].url}', '${arrayFilms[k].title}', '${arrayFilms[k].image}', '${arrayFilms[k].director}')" value="♡"></input>
                                                </div>
                                            </div>
                                        </div>` 
                                    }

                                    document.getElementById("buscadorResultados").innerHTML = impresion
                                })
                            }
                    }
                }else {document.getElementById("buscadorResultados").innerHTML = `<p>El personaje "${input}" que has introducido no se corresponde con ninguno de los personajes de Studio Ghibli.</p>`}
            }
        } else{document.getElementById("buscadorResultados").innerHTML = `<p>Oops! Ha ocurrido un error con el servidor, por favor inténtelo más tarde.</p>`}
    })
}

//Búsqueda vehículo

let arrayVehiculos =[]
let userVehiculo = {}

function inputVehiculo(){
    arrayFilms = []
    let input = (document.getElementById('inputVehiculo').value).toLowerCase()
    fetch('https://ghibliapi.herokuapp.com/vehicles')
    .then(
        (answer) => answer.json()
    ).then(
        (datos) => { arrayVehiculos = datos
            if (arrayVehiculos.length>0){
                for (let i = 0; i < arrayVehiculos.length; i++) {
                    if(input === (arrayVehiculos[i].name).toLowerCase()){
                        userVehiculo = arrayVehiculos[i]
                        if(userVehiculo.films.length>0){
                            for (let j = 0; j < userVehiculo.films.length; j++) {
                                fetch(`${userVehiculo.films[j]}`).then((answer)=>answer.json()).then((datos)=>{arrayFilms.push(datos)
                                    let impresion = ""
                                    for (let k = 0; k < arrayFilms.length; k++) {
                                        impresion += `
                                        <div class="card">
                                            <img class="card__img" src="${arrayFilms[k].image}" alt="${arrayFilms[k].title}" style="width:100%">
                                            <div class="card__container">
                                                <div class="card__titles">
                                                    <h4 class="card__titles-title">${arrayFilms[k].title}</h4>
                                                    <h5 class="card__titles-director">Director: ${arrayFilms[k].director}</h5>
                                                </div>
                                                <div class="card__like">
                                                    <input id="card__like-button" class="button--xs" type="button" onclick="like('${arrayFilms[k].url}', '${arrayFilms[k].title}', '${arrayFilms[k].image}', '${arrayFilms[k].director}')" value="♡"></input>
                                                </div>
                                            </div>
                                        </div>` 
                                    }

                                    document.getElementById("buscadorResultados").innerHTML = impresion
                                })
                            }
                    }
                }else {document.getElementById("buscadorResultados").innerHTML = `<p>El vehículo "${input}" que has introducido no se corresponde con ninguno de los vehículos de Studio Ghibli.</p>`}
            }
        } else{document.getElementById("buscadorResultados").innerHTML = `<p>Oops! Ha ocurrido un error con el servidor, por favor inténtelo más tarde.</p>`}
    })
}

//Busqueda localización

let arrayLocalizacion =[]
let userLocalizacion = {}

function inputLocalizacion(){
    arrayFilms = []
    let input = (document.getElementById('inputVehiculo').value).toLowerCase()
    fetch('https://ghibliapi.herokuapp.com/locations')
    .then(
        (answer) => answer.json()
    ).then(
        (datos) => { arrayLocalizacion = datos
            if (arrayLocalizacion.length>0){
                for (let i = 0; i < arrayLocalizacion.length; i++) {
                    if(input === (arrayLocalizacion[i].name).toLowerCase()){
                        userLocalizacion = arrayLocalizacion[i]
                        if(userLocalizacion.films.length>0){
                            for (let j = 0; j < userLocalizacion.films.length; j++) {
                                fetch(`${userLocalizacion.films[j]}`).then((answer)=>answer.json()).then((datos)=>{arrayFilms.push(datos)
                                    let impresion = ""
                                    for (let k = 0; k < arrayFilms.length; k++) {
                                        impresion += `
                                        <div class="card">
                                            <img class="card__img" src="${arrayFilms[k].image}" alt="${arrayFilms[k].title}" style="width:100%">
                                            <div class="card__container">
                                                <div class="card__titles">
                                                    <h4 class="card__titles-title">${arrayFilms[k].title}</h4>
                                                    <h5 class="card__titles-director">Director: ${arrayFilms[k].director}</h5>
                                                </div>
                                                <div class="card__like">
                                                    <input id="card__like-button" class="button--xs" type="button" onclick="like('${arrayFilms[k].url}', '${arrayFilms[k].title}', '${arrayFilms[k].image}', '${arrayFilms[k].director}')" value="♡"></input>
                                                </div>
                                            </div>
                                        </div>` 
                                    }

                                    document.getElementById("buscadorResultados").innerHTML = impresion
                                })
                            }
                    }
                }else {document.getElementById("buscadorResultados").innerHTML = `<p>La localización "${input}" que has introducido no se corresponde con ninguna de las localizaciones de Studio Ghibli.</p>`}
            }
        } else{document.getElementById("buscadorResultados").innerHTML = `<p>Oops! Ha ocurrido un error con el servidor, por favor inténtelo más tarde.</p>`}
    })
}

// Función Me gusta

function like(films, title, image, director){
    let datos = {
        films: films,
        title: title,
        image: image,
        director: director,
    }

    let favoritos = localStorage.getItem("favoritos") ||"[]"
    favoritos = JSON.parse(favoritos)

    let posLista = favoritos.findIndex(function(e){ return e.films == datos.films})
    if (posLista> -1){
        favoritos.splice(posLista,1)
    } else {
        favoritos.push(datos)
    }

    localStorage.setItem("favoritos", JSON.stringify(favoritos))
}
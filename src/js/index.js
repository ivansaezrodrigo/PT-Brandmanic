// JavaScript del index.html

import { creaInflucard } from "./componentes/influcard.js";
import { mostrarLoader } from "./utils/loader.js";
import { data } from '../mock/data.js'

//  Extraccion de los datos del json proporcionado y pasados a la plantilla de la carpeta de "/componentes"
const parametros = {
    sourceAvatar: data['influcard']['account_picture'],
    username: data['influcard']['username'],
    sexo: data['influcard']['gender'] == 1 ? 'Mujer' : 'Hombre',
    edad: data['influcard']['age'],
    pais: data['influcard']['country'],
    categorias: Object.keys(data['influcard']['tags']).slice(1, 5).join(', '),
    cantidadAudiencia: data['influcard']['followers'],
    cantidadFakes: data['influcard']['fake_followers_formated'],
    mediaEng: data['influcard']['engagement'],
    engRatio: Math.round(data['influcard']['engratio'] * 100) / 100,
    impresiones: data['influcard']['impresions'],
};

const influencerMock = creaInflucard(parametros);

document.getElementById('influcards').appendChild(influencerMock);


// Aqui creo mas influencers con datos de la api de "randomuser.me/" para simular un entorno mas real,
// todos los influencers dummy llevaran a las estadisticas del mock proporcionado, con mas tiempo hubiese
// simulado mas los datos dummy almacenandolos en local.storage 

for (let i = 0; i < 7; i++) {

    fetch('https://randomuser.me/api/')
        .then(data => {
            return data.json();
        })
        .then(persona => {

            try {
                const parametros = {
                    sourceAvatar: persona['results']['0']['picture']['medium'],
                    username: persona['results']['0']['name']['first'],
                    sexo: persona['results']['0']['gender'] == 'male' ? 'Hombre' : 'Mujer',
                    edad: persona['results']['0']['dob']['age'],
                    pais: persona['results']['0']['nat'],
                    categorias: 'deportes, familia...',
                    cantidadAudiencia: Math.floor((Math.random() * (20000 - 500 + 1)) + 500),
                    cantidadFakes: Math.floor((Math.random() * (20000 - 500 + 1)) + 500),
                    mediaEng: Math.floor((Math.random() * (20000 - 500 + 1)) + 500),
                    engRatio: Math.floor((Math.random() * (0.9 - 0.1 + 1)) + 0.1),
                    impresiones: Math.floor((Math.random() * (20000 - 500 + 1)) + 500),
                };

                const personaRandom = creaInflucard(parametros);
                document.getElementById('influcards').appendChild(personaRandom);
            } catch (e) {
                console.log('Ha fallado la creacion de la persona.\nError: ' + e)
            }
        }).catch(error => {
            console.log('La api de datos de personas procedurales ha fallado.\nError: ' + error)
        });

}

// aqui simulo la necesidad de loader como en el video
const verInflucardElements = document.querySelectorAll('.verInflucard');

verInflucardElements.forEach((element) => {
    element.addEventListener('click', (event) => {
        event.preventDefault();
        mostrarLoader();
    });
});


console.log('Gracias por su tiempo :)\nAtte: Iván Sáez Rodrigo')
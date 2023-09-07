import { creaInflucard } from "./influcard.js";
import { data } from '../mock/data.js'

const parametros = {
    sourceAvatar: 'https://yt3.googleusercontent.com/ytc/AOPolaSswPUW2BA5r9Ai1MV6Yeg9WMST9Vo3jgkztD0BsA=s900-c-k-c0x00ffffff-no-rj',
    username: data['influcard']['username'],
    sexo: data['influcard']['gender'] == 1 ? 'Mujer' : 'Hombre',
    edad: data['influcard']['age'],
    pais: data['influcard']['country'],
    categorias: 'Deportes, Familia...',
    cantidadAudiencia: data['influcard']['followers'],
    cantidadFakes: data['influcard']['fake_followers_formated'],
    mediaEng: data['influcard']['engagement'],
    engRatio: Math.round(data['influcard']['engratio'] * 100) / 100,
    impresiones: data['influcard']['impresions'],
};

const influencerMock = creaInflucard(parametros);

document.getElementById('influcards').appendChild(influencerMock);

for (let i = 0; i < 7; i++) {

    fetch('https://randomuser.me/api/')
        .then(data => {
            return data.json();
        })
        .then(persona => {

            const parametros = {
                sourceAvatar: persona['results']['0']['picture']['medium'],
                username: persona['results']['0']['name']['first'],
                sexo: persona['results']['0']['gender'] == 'male' ? 'Hombre' : 'Mujer',
                edad: persona['results']['0']['dob']['age'],
                pais: persona['results']['0']['nat'],
                categorias: 'Deportes, Familia...',
                cantidadAudiencia: Math.floor((Math.random() * (20000 - 500 + 1)) + 500),
                cantidadFakes: Math.floor((Math.random() * (20000 - 500 + 1)) + 500),
                mediaEng: Math.floor((Math.random() * (20000 - 500 + 1)) + 500),
                engRatio: Math.floor((Math.random() * (0.9 - 0.1 + 1)) + 0.1),
                impresiones: Math.floor((Math.random() * (20000 - 500 + 1)) + 500),
            };

            const personaRandom = creaInflucard(parametros);

            document.getElementById('influcards').appendChild(personaRandom);
        });
}


function mostrarLoader() {
    Swal.fire({
        title: 'Cargando...',
        allowOutsideClick: false,
        showConfirmButton: false,
        onBeforeOpen: () => {
            Swal.showLoading();
        }
    });

    setTimeout(() => {
        Swal.close();
        window.location.href = 'influcardStats.html';
    }, 2000);
}

const verInflucardLink = document.getElementById('verInflucard');
verInflucardLink.addEventListener('click', (event) => {
    event.preventDefault();
    mostrarLoader();
});
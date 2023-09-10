// JavaScript de influcardStats.html

import { formateaNumero } from "./utils/letrasNumeros.js";
import { makeCircularChart, makeChart } from "./graficas/charts.js";
import { data } from '../mock/data.js'
import { creaMarca } from "./componentes/marca.js";
import { hacerCaptura } from './utils/capturaDePantalla.js'

// Elementos del DOM - Graficas
const ratioSegunDia = document.getElementById('grafica__ratioSegunDia');
const distribucionTerritorios = document.getElementById('grafica__distribucionTerritorios');
const distribucionEdad = document.getElementById('grafica__distribucionEdad');
const distribucionFranjaPublicaciones = document.getElementById('grafica__distribucionFranjaPublicaciones')
const distribucionGenero = document.getElementById('grafica__distribucionGenero')
const distribucionPais = document.getElementById('grafica__distribucionPais')
const reachGraph = document.getElementById('header__reachGraph')
const relevanceGraph = document.getElementById('header__relevanceGraph')
const resonanceGraph = document.getElementById('header__resonanceGraph')

// Elementos del DOM - Usuario
const username = document.getElementById('stats_username');
const sexoEdad = document.getElementById('stats_sexoEdad');
const pais = document.getElementById('stats_pais');
const categorias = document.getElementById('stats_categorias');

// Elementos del DOM - Porcentajes
const audiencia = document.getElementById('stats_audiencia')
const fake = document.getElementById('stats_fake')
const real = document.getElementById('stats_real')
const audienciaDesempeño = document.getElementById('stats_audienciaDesempeño')
const alcance = document.getElementById('stats_alcance')
const impresiones = document.getElementById('stats_impresiones')
const impresionesAlcance = document.getElementById('stats_impresionesAlcance')
const impresionesAudiencia = document.getElementById('stats_impresionesAudiencia')
const reproduciones = document.getElementById('stats_reproduciones')
const reproducionesAlcance = document.getElementById('stats_reproducionesAlcance')
const reproducionesAudiencia = document.getElementById('stats_reproducionesAudiencia')
const engagement = document.getElementById('stats_engagement')
const engagementAlcance = document.getElementById('stats_engagementAlcance')
const engagementAudiencia = document.getElementById('stats_engagementAudiencia')

// Graficas Header
const reachedPorcengaje = data['influcard']['reach']
const relevancePorcentaje = data['influcard']['relevance']
const resonancePorcentaje = data['influcard']['resonance']

makeCircularChart('doughnut', reachGraph, ['Reached', 'No reached'], [reachedPorcengaje, 100 - reachedPorcengaje], ['#0000AAAA', '#00000000'], false)
makeCircularChart('doughnut', relevanceGraph, ['Relevance', 'No Relevance'], [relevancePorcentaje, 100 - relevancePorcentaje], ['#E2D006', '#00000000'], false)
makeCircularChart('doughnut', resonanceGraph, ['Resonance', 'No resonance'], [resonancePorcentaje, 100 - resonancePorcentaje], ['#06E25A', '#00000000'], false)

// Graficas Audiencia

const audienciaRangos = data['influcard']['insightsAge'].filter((dato, index) => index % 2 == 0)
const audienciaPorcenajes = audienciaRangos.map(franja => franja.percentage)
const audienciaRango = Object.values(data['ages_array'])

makeChart('bar', distribucionEdad, audienciaRango, audienciaPorcenajes)

const generoRangos = data['influcard']['insightsGender']
const generoPorcentaje = generoRangos.map(edad => edad.percentage)

makeCircularChart('pie', distribucionGenero, ['Hombres', 'Mujeres'], generoPorcentaje, [
    "#1da1f2",
    "#FF3399",
], true);


const distribucionPaisRangos = data['influcard']['insightsCountry']
const distribucionPaisPorcentaje = distribucionPaisRangos.map(edad => edad.percentage)
const distribucionPaisPorcentaje_otros = distribucionPaisPorcentaje.reduce(
    (total, numero) => {
        return total + parseFloat(numero);
    }, 0);
const distribucionPaisTitulo = distribucionPaisRangos.map(edad => edad.country).concat('Otros')
const distribucionPaisPorcentaje_completo = distribucionPaisPorcentaje.concat(Math.round((100 - distribucionPaisPorcentaje_otros) * 100) / 100)

makeChart('bar', distribucionPais, distribucionPaisTitulo, distribucionPaisPorcentaje_completo, false)

// Graficas Publicaciones
const territorioCategorias = data['influcard']['post_territory'].map(function (categoria) {
    return categoria.category
}
)

const territorioPorcentaje = Object.values(data['influcard']['post_territory_values']).map(value => Math.round(value * 100) / 100)

makeChart('bar', distribucionTerritorios, territorioCategorias, territorioPorcentaje, false);

const rangoDiaTitulo = JSON.parse(data['influcard']['post_moment_json']).map(momento => momento.type)
const rangoDiaPorcentaje = JSON.parse(data['influcard']['post_moment_json']).map(momento => momento.value)

makeCircularChart('polarArea', distribucionFranjaPublicaciones, rangoDiaTitulo, rangoDiaPorcentaje, [
    "#00007A",
    "rgba(255, 129, 34)",
    "rgba(255, 225, 106)",
    "#1da1f2",
    "#bd081c"
])

const contenedorMarcas = document.getElementById('publicaciones__marcasContenedor');
var arrayMarcas = data['influcard']['brands_images'].slice(0, 8).map(marca => {
    const nuevaMarca = creaMarca(marca.name, marca.image)
    contenedorMarcas.appendChild(nuevaMarca);
})

// Graficas Desmpeño
const week = data['influcard']['post_week_day'].map(function (day) {
    return Math.floor(day.engrate * 100) / 10
}
)

makeChart('line', ratioSegunDia, ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'], week);

// Influcard

// Datos influcard header
username.innerText = data['influcard']['username']
sexoEdad.innerText = `${data['influcard']['gender'] == 1 ? 'Mujer' : 'Hombre'}, ${data['influcard']['age']} años.`,
pais.innerText = data['influcard']['country']
categorias.innerText = Object.keys(data['influcard']['tags']).slice(1, 4)

//Datos porcentajes extraidos y formateados segun el mock.js
audiencia.innerText = formateaNumero(data['influcard']['followers'])
fake.innerText = formateaNumero(data['influcard']['fake_followers_formated']) + ' %'
real.innerText = formateaNumero(data['influcard']['real_followers'])
audienciaDesempeño.innerText = formateaNumero(data['influcard']['followers'])
alcance.innerText = data['influcard']['reach_formated'],
impresiones.innerText = formateaNumero(data['influcard']['impresions']),
impresionesAlcance.innerText = Math.round(data['influcard']['ir_alcance'] * 100) / 100 + '%'
impresionesAudiencia.innerText = Math.round(data['influcard']['ir_audiencia'] * 100) / 100 + '%'
reproduciones.innerText = data['influcard']['vplays_formated'],
reproducionesAlcance.innerText = Math.round(data['influcard']['vr_alcance'] * 100) / 100 + '%'
reproducionesAudiencia.innerText = Math.round(data['influcard']['vr_audiencia'] * 100) / 100 + '%'
engagement.innerText = data['influcard']['engagement_formated'],
engagementAlcance.innerText = Math.round(data['influcard']['er_alcance'] * 100) / 100 + '%'
engagementAudiencia.innerText = Math.round(data['influcard']['er_audiencia'] * 100) / 100 + '%'


// Captura de pantalla
const capturarBoton = document.getElementById('descargarBoton');

capturarBoton.addEventListener('click', () => {
    while (contenedorMarcas.firstChild) {
        contenedorMarcas.removeChild(contenedorMarcas.firstChild);
    }


    arrayMarcas = data['influcard']['brands_images'].map(marca => {
        const nuevaMarca = creaMarca(marca.name, marca.image);
        contenedorMarcas.appendChild(nuevaMarca);
    });

    hacerCaptura(username.textContent)

    while (contenedorMarcas.firstChild) {
        contenedorMarcas.removeChild(contenedorMarcas.firstChild);
    }

    arrayMarcas = data['influcard']['brands_images'].slice(0, 8).map(marca => {
        const nuevaMarca = creaMarca(marca.name, marca.image);
        contenedorMarcas.appendChild(nuevaMarca);
    });
});


console.log('Gracias por su tiempo :)\nAtte: Iván Sáez Rodrigo')

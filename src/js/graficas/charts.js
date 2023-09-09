
export function makeChart(typeChart,idGrafica, arrayTitulos, arrayDatos, ejeBooleano = true) {
    const eje = ejeBooleano ? 'x' : 'y';

    const existingChart = Chart.getChart(idGrafica);
    if (existingChart) {
        existingChart.destroy();
    }

    if (!ejeBooleano) {
        var scales = {
                y: {
                    ticks: {
                        fontSize: 12, 
                        maxRotation: 0, 
                        autoSkip: false,
                    }
                },
                x: {
                    beginAtZero: true,
                    ticks:{
                        callback: function (value) {
                            return value + '%'; // Agregar el símbolo de porcentaje a las etiquetas
                        }
                    }
                }
            }
    } else {
        var scales = {
                y: {
                    ticks: {
                        fontSize: 12, 
                        maxRotation: 0, 
                        autoSkip: false,
                        callback: function (value) {
                            return value + '%'; // Agregar el símbolo de porcentaje a las etiquetas
                        }
                    }
                },
                x: {
                    beginAtZero: true,
                }
            }
    }

    new Chart(idGrafica, {
        type: typeChart,
        data: {
            labels: arrayTitulos, 
            datasets: [{
                label: '',
                data: arrayDatos,
                borderWidth: 1,
                backgroundColor: [
    'rgba(255, 205, 86)',
    'rgba(255, 159, 64)',
    'rgba(153, 102, 255)',
      'rgba(255, 99, 132)',
      'rgba(75, 192, 192)',
      'rgba(54, 162, 235)',
      'rgba(201, 203, 207)'
    ],
    borderColor: [
        'rgb(255, 205, 86)',
        'rgb(255, 159, 64)',
        'rgb(153, 102, 255)',
      'rgb(255, 99, 132)',
      'rgb(75, 192, 192)',
      'rgb(54, 162, 235)',
      'rgb(201, 203, 207)'
    ],label:'%'
            }]
        },
        
        options: {
            plugins: {
                colors: {
                enabled: true
                },  
                legend: {
                    display: false,
                    labels: {
                        boxWidth: 0,
                    }
                }
            },
            indexAxis: eje,
            scales:scales
        }
    });
}




export function makeCircularChart(typeChart, idGrafica, arrayTitulos, arrayDatos, backgroundColor , mostrarLeyenda = true) {
    var data = {
        datasets: [{
            label: 'Reached',
            data: arrayDatos,
            borderColor: '#00000000',
            backgroundColor,
            label: '%',
        }],
        labels: arrayTitulos,
    };
    new Chart(idGrafica, {
        data: data,
        type: typeChart,
        options: {
            plugins : {
                legend: {
                    display: mostrarLeyenda,
                }
            },
            scale: {
                display: false
            }
        }
    });
}
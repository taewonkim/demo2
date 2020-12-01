let ctx = document.getElementById('chart-1').getContext('2d');
let add_data = document.getElementById('add-data');

let chart_1 = new Chart(ctx, {
    type: 'line',
    data: {
        datasets: [{

        }]
    },
    options: {
        responsive: false,
        legend: {
            display: false
        },
        animation: {
            duration: 300 * 1.5,
            easing: 'linear'
        },
        scales: {
            xAxes: [{
                type: 'realtime',
                realtime: {
                    onRefresh: (chart) => {
                        chart.data.datasets.forEach((dataset) => {
                            dataset.data.push({
                                x: Date.now(),
                                y: Math.floor( Math.random() * 100 )
                            });
                        });
                    },
                    delay: 1500
                }
            }]
        }
    }
});
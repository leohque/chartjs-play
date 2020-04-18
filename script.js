const family = document.getElementById('family');
const community = document.getElementById('community');
const education = document.getElementById('education');
const career = document.getElementById('career');
const finances = document.getElementById('finances');
const health = document.getElementById('health');
const leisure = document.getElementById('leisure');
const faith = document.getElementById('faith');

const pieces = [family, community, education, career, finances, health, leisure, faith];


const chartCanvas = document.getElementById('ctx');
const igChart = new Chart(chartCanvas, {
  type: 'polarArea',
  data: {
      labels: ['Family', 'Community', 'Education', 'Career', 'Finances', 'Health', 'Leisure', 'Faith'],
      datasets: [{
          max: 100,
          label: 'Wheel of Life',
          data: [
            10, 10, 10, 10, 10, 10, 10, 10
          ],
          backgroundColor: [
              '#27A349',
              '#F1DE11',
              '#EC8125',
              '#F32C2C',
              '#B041A0',
              '#604C86',
              '#3B64FA',
              '#45FAF9'
          ],
          borderColor: [
              'rgba(0,0,0,0.8)',
              'rgba(0,0,0,0.8)',
              'rgba(0,0,0,0.8)',
              'rgba(0,0,0,0.8)',
              'rgba(0,0,0,0.8)',
              'rgba(0,0,0,0.8)',
              'rgba(0,0,0,0.8)',
              'rgba(0,0,0,0.8)'
          ],
          borderWidth: 2
      }]
  },
  options: {
    responsive: false,
    legend: {
      labels: {
        fontColor: "black"
      },
      display: true,
      position: 'right'
    },
    scale: {
      display: false
    },
      animation: {
        animateRotate: false
      },
      scales: {
          xAxes: [{
            gridLines: {
              display: false
            },
            ticks: {
              display: false
            }
          }],
          yAxes: [{
              gridLines: {
                display: false
              },
              ticks: {
                  display: false
              }
          }]
      }
  }
});


function modifyData() {
  pieces.forEach((piece, i) => {
    igChart.data.datasets[0].data[i] = piece.value;
  });
  igChart.update();
}

pieces.forEach((piece) => {
  document.addEventListener('change', modifyData);
});

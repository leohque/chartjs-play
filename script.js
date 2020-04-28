const category1 = document.getElementById('category1');
const category2 = document.getElementById('category2');
const category3 = document.getElementById('category3');
const category4 = document.getElementById('category4');
const category5 = document.getElementById('category5');
const category6 = document.getElementById('category6');
const category7 = document.getElementById('category7');
const category8 = document.getElementById('category8');
const categories = [category1, category2, category3, category4, category5, category6, category7, category8]

const fullness1 = document.getElementById('fullness1');
const fullness2 = document.getElementById('fullness2');
const fullness3 = document.getElementById('fullness3');
const fullness4 = document.getElementById('fullness4');
const fullness5 = document.getElementById('fullness5');
const fullness6 = document.getElementById('fullness6');
const fullness7 = document.getElementById('fullness7');
const fullness8 = document.getElementById('fullness8');
const fullnessValues = [fullness1, fullness2, fullness3, fullness4, fullness5, fullness6, fullness7, fullness8];


const fullnessctx = document.getElementById('ctx-fullness');
const fullnessChart = new Chart(fullnessctx, {
  type: 'polarArea',
  data: {
      labels: ['Work', 'Finances', 'Health', 'Fun', 'Faith', 'Family', 'Community', 'Learning'],
      datasets: [{
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

const timeCategory1 = document.getElementById('time-category1');
const timeCategory2 = document.getElementById('time-category2');
const timeCategory3 = document.getElementById('time-category3');
const timeCategory4 = document.getElementById('time-category4');
const timeCategory5 = document.getElementById('time-category5');
const timeCategory6 = document.getElementById('time-category6');
const timeCategory7 = document.getElementById('time-category7');
const timeCategory8 = document.getElementById('time-category8');
const timeCategories = [timeCategory1, timeCategory2, timeCategory3, timeCategory4, timeCategory5, timeCategory6, timeCategory7, timeCategory8]

const timeValue1 = document.getElementById('time1');
const timeValue2 = document.getElementById('time2');
const timeValue3 = document.getElementById('time3');
const timeValue4 = document.getElementById('time4');
const timeValue5 = document.getElementById('time5');
const timeValue6 = document.getElementById('time6');
const timeValue7 = document.getElementById('time7');
const timeValue8 = document.getElementById('time8');
const timeValues = [timeValue1, timeValue2, timeValue3, timeValue4, timeValue5, timeValue6, timeValue7, timeValue8]

const desiredtimeValue1 = document.getElementById('desiredtime1');
const desiredtimeValue2 = document.getElementById('desiredtime2');
const desiredtimeValue3 = document.getElementById('desiredtime3');
const desiredtimeValue4 = document.getElementById('desiredtime4');
const desiredtimeValue5 = document.getElementById('desiredtime5');
const desiredtimeValue6 = document.getElementById('desiredtime6');
const desiredtimeValue7 = document.getElementById('desiredtime7');
const desiredtimeValue8 = document.getElementById('desiredtime8');
const desiredtimeValues = [desiredtimeValue1, desiredtimeValue2, desiredtimeValue3, desiredtimeValue4, desiredtimeValue5, desiredtimeValue6, desiredtimeValue7, desiredtimeValue8]


function changeCategory() {
  categories.forEach((category, i) => {
    fullnessChart.data.labels[i] = category.value;
    timeChart.data.labels[i] = category.value;
  });
  timeCategories.forEach((category, i) => {
    category.value = fullnessChart.data.labels[i];
  });
  fullnessChart.update();
  timeChart.update();
}

categories.forEach((category, index) => {
  category.value = fullnessChart.data.labels[index];
  category.addEventListener('change', changeCategory);
});

timeCategories.forEach((category, index) => {
  category.value = fullnessChart.data.labels[index];
});


function modifyFullness() {
  fullnessValues.forEach((piece, i) => {
    fullnessChart.data.datasets[0].data[i] = piece.value;
  });
  fullnessChart.update();
}

fullnessValues.forEach((piece) => {
  piece.addEventListener('change', modifyFullness);
});

const timeTotal = document.getElementById('timeTotal');
const timeSleeping = document.getElementById('timeSleeping');
const timeAvailable = document.getElementById('timeAvailable');
const timeRemaining = document.getElementById('timeRemaining');
const desiredtimeRemaining = document.getElementById('desiredtimeRemaining');

function modifyTime() {
  let total = timeTotal.value;
  let sleeping = timeSleeping.value;
  let available = total - sleeping;
  timeAvailable.value = available;
  desiredtimeRemaining.value = available;
  modifyRemainingTime();
  modifyDesiredRemainingTime();
}

timeTotal.addEventListener('change', modifyTime);
timeSleeping.addEventListener('change', modifyTime);
timeAvailable.addEventListener('change', modifyTime);

function modifyRemainingTime() {
  let t = 0;
  timeValues.forEach(value => {
    if(value.value) { t += parseInt(value.value); }
  });
  let available = timeAvailable.value;
  let remaining = available - t;
  timeRemaining.value = remaining;
}

function modifyDesiredRemainingTime() {
  let t = 0;
  desiredtimeValues.forEach(val => {
    if (val.value) { t += parseInt(val.value); }
  });
  let avail = timeAvailable.value;
  let remaining = avail - t;
  desiredtimeRemaining.value = remaining;
}

function adjustDesiredTimeChart() {
  desiredtimeValues.forEach((val, i) => {
    if(val.value) {
      timeChart.data.datasets[1].data[i] = val.value;
    }
  });
  timeChart.data.datasets[1].data[8] = timeRemaining.value;
  timeChart.update();
}

function adjustTimeChart() {
  timeValues.forEach((val, i) => {
    if(val.value) {
      timeChart.data.datasets[0].data[i] = val.value;
    }
  });
  timeChart.data.datasets[0].data[8] = timeRemaining.value;
  timeChart.update();
}

timeValues.forEach(value => {
  value.addEventListener('change', modifyRemainingTime);
  value.addEventListener('change', adjustTimeChart);
});
desiredtimeValues.forEach(value => {
  value.addEventListener('change', modifyDesiredRemainingTime);
  value.addEventListener('change', adjustDesiredTimeChart);
})

const timectx = document.getElementById('ctx-time');
const timeChart = new Chart(timectx, {
  type: 'pie',
  data: {
      labels: ['Work', 'Finances', 'Health', 'Fun', 'Faith', 'Family', 'Community', 'Learning', 'Free'],
      datasets: [{
          label: 'Time Spent',
          data: [
            0, 0, 0, 0, 0, 0, 0, 0, 112
          ],
          backgroundColor: [
              '#27A349',
              '#F1DE11',
              '#EC8125',
              '#F32C2C',
              '#B041A0',
              '#604C86',
              '#3B64FA',
              '#45FAF9',
              '#FFFFFF'
          ],
          borderColor: [
              'rgba(0,0,0,0.8)',
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
      },
          {
          label: 'Time Remaining',
          data: [
            0, 0, 0, 0, 0, 0, 0, 0, 112
          ],
          backgroundColor: [
              '#27A349',
              '#F1DE11',
              '#EC8125',
              '#F32C2C',
              '#B041A0',
              '#604C86',
              '#3B64FA',
              '#45FAF9',
              '#FFFFFF'
          ],
          borderColor: [
              'rgba(0,0,0,0.8)',
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
      }
      ]
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
      animation: {
        animateRotate: false
      }
  }
});

// initialize UI
let session = 1;

const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const saveBtn = document.getElementById('save-btn');

const part1 = document.getElementById('part1');
const part2 = document.getElementById('part2');
const part3 = document.getElementById('part3');

const category1 = document.getElementById('category1');
const category2 = document.getElementById('category2');
const category3 = document.getElementById('category3');
const category4 = document.getElementById('category4');
const category5 = document.getElementById('category5');
const category6 = document.getElementById('category6');
const category7 = document.getElementById('category7');
const category8 = document.getElementById('category8');
const categories = [category1, category2,
  category3, category4,
  category5, category6,
  category7, category8];

const fullness1 = document.getElementById('fullness1');
const fullness2 = document.getElementById('fullness2');
const fullness3 = document.getElementById('fullness3');
const fullness4 = document.getElementById('fullness4');
const fullness5 = document.getElementById('fullness5');
const fullness6 = document.getElementById('fullness6');
const fullness7 = document.getElementById('fullness7');
const fullness8 = document.getElementById('fullness8');
const fullnessValues = [fullness1, fullness2,
  fullness3, fullness4,
  fullness5, fullness6,
  fullness7, fullness8];

const fullnessrange1 = document.getElementById('fullnessrange1');
const fullnessrange2 = document.getElementById('fullnessrange2');
const fullnessrange3 = document.getElementById('fullnessrange3');
const fullnessrange4 = document.getElementById('fullnessrange4');
const fullnessrange5 = document.getElementById('fullnessrange5');
const fullnessrange6 = document.getElementById('fullnessrange6');
const fullnessrange7 = document.getElementById('fullnessrange7');
const fullnessrange8 = document.getElementById('fullnessrange8');
const fullnessrangeValues = [fullnessrange1, fullnessrange2,
  fullnessrange3, fullnessrange4,
  fullnessrange5, fullnessrange6,
  fullnessrange7, fullnessrange8];

const timeCategory1 = document.getElementById('time-category1');
const timeCategory2 = document.getElementById('time-category2');
const timeCategory3 = document.getElementById('time-category3');
const timeCategory4 = document.getElementById('time-category4');
const timeCategory5 = document.getElementById('time-category5');
const timeCategory6 = document.getElementById('time-category6');
const timeCategory7 = document.getElementById('time-category7');
const timeCategory8 = document.getElementById('time-category8');
const timeCategories = [timeCategory1, timeCategory2,
  timeCategory3, timeCategory4,
  timeCategory5, timeCategory6,
  timeCategory7, timeCategory8];

const timeValue1 = document.getElementById('time1');
const timeValue2 = document.getElementById('time2');
const timeValue3 = document.getElementById('time3');
const timeValue4 = document.getElementById('time4');
const timeValue5 = document.getElementById('time5');
const timeValue6 = document.getElementById('time6');
const timeValue7 = document.getElementById('time7');
const timeValue8 = document.getElementById('time8');
const timeValues = [
  timeValue1, timeValue2,
  timeValue3, timeValue4,
  timeValue5, timeValue6,
  timeValue7, timeValue8];

const desiredtimeValue1 = document.getElementById('desiredtime1');
const desiredtimeValue2 = document.getElementById('desiredtime2');
const desiredtimeValue3 = document.getElementById('desiredtime3');
const desiredtimeValue4 = document.getElementById('desiredtime4');
const desiredtimeValue5 = document.getElementById('desiredtime5');
const desiredtimeValue6 = document.getElementById('desiredtime6');
const desiredtimeValue7 = document.getElementById('desiredtime7');
const desiredtimeValue8 = document.getElementById('desiredtime8');
const desiredtimeValues = [
  desiredtimeValue1, desiredtimeValue2,
  desiredtimeValue3, desiredtimeValue4,
  desiredtimeValue5, desiredtimeValue6,
  desiredtimeValue7, desiredtimeValue8];

const timeTotal = document.getElementById('timeTotal');
const timeSleeping = document.getElementById('timeSleeping');
const timeAvailable = document.getElementById('timeAvailable');
const timeRemaining = document.getElementById('timeRemaining');
const desiredtimeRemaining = document.getElementById('desiredtimeRemaining');


// Charts

const fullnessctx = document.getElementById('ctx-fullness');
const fullnessChart = new Chart(fullnessctx, {
  type: 'polarArea',
  data: {
      labels: ['Work', 'Finances', 'Health', 'Fun', 'Faith', 'Family', 'Community', 'Learning'],
      datasets: [{
          label: 'Wheel of Life',
          data: [
            5, 5, 5, 5, 5, 5, 5, 5
          ],
          backgroundColor: [
              'rgba(39, 163, 73, 1)',
              'rgba(241, 222, 17, 1)',
              'rgba(236, 129, 37, 1)',
              'rgba(243, 44, 44, 1)',
              'rgba(176, 65, 160, 1)',
              'rgba(96, 76, 134, 1)',
              'rgba(59, 100, 250, 1)',
              'rgba(69, 250, 249, 1)'
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
              'rgba(39, 163, 73, 1)',
              'rgba(241, 222, 17, 1)',
              'rgba(236, 129, 37, 1)',
              'rgba(243, 44, 44, 1)',
              'rgba(176, 65, 160, 1)',
              'rgba(96, 76, 134, 1)',
              'rgba(59, 100, 250, 1)',
              'rgba(69, 250, 249, 1)',
              'rgba(255, 255, 255, 1)'
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
      position: 'left'
    },
      animation: {
        animateRotate: false
      }
  }
});

const desiredtimectx = document.getElementById('ctx-desiredtime');
const desiredtimeChart = new Chart(desiredtimectx, {
  type: 'pie',
  data: {
      labels: ['Work', 'Finances', 'Health', 'Fun', 'Faith', 'Family', 'Community', 'Learning', 'Free'],
      datasets: [{
          label: 'Time Spent',
          data: [
            0, 0, 0, 0, 0, 0, 0, 0, 112
          ],
          backgroundColor: [
              'rgba(39, 163, 73, 1)',
              'rgba(241, 222, 17, 1)',
              'rgba(236, 129, 37, 1)',
              'rgba(243, 44, 44, 1)',
              'rgba(176, 65, 160, 1)',
              'rgba(96, 76, 134, 1)',
              'rgba(59, 100, 250, 1)',
              'rgba(69, 250, 249, 1)',
              'rgba(255, 255, 255, 1)'
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

const timebarctx = document.getElementById('ctx-timebar');
const timebarChart = new Chart(timebarctx, {
  type: 'horizontalBar',
  data: {
      labels: ['Work', 'Finances', 'Health', 'Fun', 'Faith', 'Family', 'Community', 'Learning', 'Free'],
      datasets: [{
          label: 'Time Spent',
          data: [
            0, 0, 0, 0, 0, 0, 0, 0, 112
          ],
          backgroundColor: [
              'rgba(39, 163, 73, 1)',
              'rgba(241, 222, 17, 1)',
              'rgba(236, 129, 37, 1)',
              'rgba(243, 44, 44, 1)',
              'rgba(176, 65, 160, 1)',
              'rgba(96, 76, 134, 1)',
              'rgba(59, 100, 250, 1)',
              'rgba(69, 250, 249, 1)',
              'rgba(255, 255, 255, 1)'
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
          label: 'Time Desired',
          data: [
            0, 0, 0, 0, 0, 0, 0, 0, 112
          ],
          backgroundColor: [
              'rgba(39, 163, 73, 1)',
              'rgba(241, 222, 17, 1)',
              'rgba(236, 129, 37, 1)',
              'rgba(243, 44, 44, 1)',
              'rgba(176, 65, 160, 1)',
              'rgba(96, 76, 134, 1)',
              'rgba(59, 100, 250, 1)',
              'rgba(69, 250, 249, 1)',
              'rgba(255, 255, 255, 1)'
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
      display: false
    },
      animation: {
        animateRotate: false
      }
  }
});


// Utils


// Session Handlers

function handleSession() {
  switch (session) {
    case 1:
      prevBtn.classList.add('hidden');
      part1.classList.remove('nodisplay');
      part2.classList.add('nodisplay');
      break;
    case 2:
      saveBtn.classList.add('nodisplay');
      nextBtn.classList.remove('nodisplay');
      prevBtn.classList.remove('hidden');
      part1.classList.add('nodisplay');
      part2.classList.remove('nodisplay');
      part3.classList.add('nodisplay');
      break;
    case 3:
      nextBtn.classList.add('nodisplay');
      saveBtn.classList.remove('nodisplay');
      part2.classList.add('nodisplay');
      part3.classList.remove('nodisplay');
      break;
    default:
      console.log('something is wrong');
  }
}

function prevSession(e) {
  e.preventDefault();
  session -= 1;
  console.log(`session is ${session}`);
  handleSession();
}

function nextSession(e) {
  e.preventDefault();
  session += 1;
  console.log(`session is ${session}`);
  handleSession();
}

prevBtn.addEventListener('click', prevSession);
nextBtn.addEventListener('click', nextSession);

// Chart Data Manipulation

function updateCharts() {
  fullnessChart.update();
  timeChart.update();
  timebarChart.update();
  desiredtimeChart.update();
}

function changeCategory() {
  categories.forEach((category, i) => {
    fullnessChart.data.labels[i] = category.value;
    timeChart.data.labels[i] = category.value;
    desiredtimeChart.data.labels[i] = category.value;
    timebarChart.data.labels[i] = category.value;
  });
  timeCategories.forEach((category, i) => {
    category.value = fullnessChart.data.labels[i];
  });
  updateCharts();
}

categories.forEach((category, index) => {
  category.value = fullnessChart.data.labels[index];
  category.addEventListener('change', changeCategory);
});

timeCategories.forEach((category, index) => {
  category.value = fullnessChart.data.labels[index];
});

function updateFullnessNumber(val) {
  const i = val.id.slice(-1) - 1;
  fullnessValues[i].innerText = `${val.value}`;
}

function modifyFullness() {
  updateFullnessNumber(this);
  fullnessrangeValues.forEach((piece, i) => {
    fullnessChart.data.datasets[0].data[i] = piece.value;
  });
  updateCharts();
}

fullnessrangeValues.forEach((piece) => {
  piece.addEventListener('change', modifyFullness.bind(piece));
  piece.addEventListener('input', modifyFullness.bind(piece));
});


function modifyRemainingTime() {
  let t = 0;
  timeValues.forEach((value) => {
    if (value.value) { t += parseInt(value.value); }
  });
  let available = timeAvailable.value;
  let remaining = available - t;
  timeRemaining.value = remaining;
}

function modifyDesiredRemainingTime() {
  let t = 0;
  desiredtimeValues.forEach((val) => {
    if (val.value) { t += parseInt(val.value); }
  });
  const avail = timeAvailable.value;
  const remaining = avail - t;
  desiredtimeRemaining.value = remaining;
  adjustTimeChart();
  adjustDesiredTimeChart();
}


function modifyTime() {
  const total = timeTotal.value;
  const sleeping = timeSleeping.value;
  const available = total - sleeping;
  timeAvailable.value = available;
  desiredtimeRemaining.value = available;
  modifyRemainingTime();
  modifyDesiredRemainingTime();
}


timeTotal.addEventListener('change', modifyTime);
timeSleeping.addEventListener('change', modifyTime);
timeAvailable.addEventListener('change', modifyTime);

function adjustDesiredTimeChart() {
  desiredtimeValues.forEach((val, i) => {
    if(val.value) {
      desiredtimeChart.data.datasets[0].data[i] = val.value;
      timebarChart.data.datasets[1].data[i] = val.value;
    }
  });
  desiredtimeChart.data.datasets[0].data[8] = desiredtimeRemaining.value;
  timebarChart.data.datasets[1].data[8] = desiredtimeRemaining.value;
  updateCharts();
}

function adjustTimeChart() {
  timeValues.forEach((val, i) => {
    if(val.value) {
      timeChart.data.datasets[0].data[i] = val.value;
      timebarChart.data.datasets[0].data[i] = val.value;
    }
  });
  timeChart.data.datasets[0].data[8] = timeRemaining.value;
  timebarChart.data.datasets[0].data[8] = timeRemaining.value;
  updateCharts();
}

timeValues.forEach((value) => {
  value.addEventListener('change', modifyRemainingTime);
  value.addEventListener('change', adjustTimeChart);
});
desiredtimeValues.forEach((value) => {
  value.addEventListener('change', modifyDesiredRemainingTime);
  value.addEventListener('change', adjustDesiredTimeChart);
});




// const emailbody = "<h1>Can this have HTML?</h1>";

// Email.send({
//     SecureToken : "5d1d664d-d401-4ec3-a128-3f508a9d629f",
//     To : 'leohque@gmail.com',
//     From : "leohque@gmail.com",
//     Subject : "This is the subject",
//     Body : emailbody
// }).then(
//   message => alert(message)
// );

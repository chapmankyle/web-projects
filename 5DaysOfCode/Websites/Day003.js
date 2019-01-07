// [16 March 2018]
// Day 3: Finding difference between two times

function calcDiff() {
  var timeA = document.getElementById('timeA').value;
  var timeB = document.getElementById('timeB').value;

  if (timeA.length > 4 || timeA.length <= 0 || timeB.length > 4 || timeB.length <= 0) {
    alert('Not valid times.');
    return;
  }
  else if (Number(timeA.substring(0,2)) > 24 || Number(timeB.substring(0,2)) > 24) return;
  else if (Number(timeA.substring(2)) > 59 || Number(timeB.substring(2)) > 59) return;

  var minA = Number(timeA.substring(0,2))*60 + Number(timeA.substring(2));
  var minB = Number(timeB.substring(0,2))*60 + Number(timeB.substring(2));
  var diff = 0;
  var hours = 0;
  var mins = 0;

  if (minA < minB) {
    diff = minB - minA;
    hours = parseInt(diff / 60);
    mins = diff % 60;
  }
  else {
    diff = (1440 - minA) + minB;
    hours = parseInt(diff / 60);
    mins = diff % 60;
  }

  document.getElementById('diff').value = hours + " hrs " + mins + " mins.";
  document.getElementById('showDiff').style.display = 'inline';
}

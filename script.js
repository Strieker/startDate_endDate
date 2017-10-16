const MILLISECONDS_PER_DAY = 8.64e+7
const date1Box = document.getElementById('date1Box');
const date2Box = document.getElementById('date2Box');

date1Box.addEventListener('input', totalDayCount);
date2Box.addEventListener('input', totalDayCount);

function totalDayCount() {
  const date1String = String(date1Box.value);
  const date2String = String(date2Box.value);
  const date1InMilliseconds = new Date(date1String);
  const date2InMilliseconds = new Date(date2String);
  const totalDays = (date2InMilliseconds - date1InMilliseconds) / MILLISECONDS_PER_DAY;
  document.getElementById('result').innerHTML = `${totalDays} days left`;
}
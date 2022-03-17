// Create an human readable date in the format YYYY-DD-MM HH:mm

let addLeadingZero = (num) =>
  num >= 10 ? num.toString() : "0" + num.toString();

const snapshot = new Date();
const year = snapshot.getFullYear().toString();
const month = addLeadingZero(snapshot.getMonth() + 1);
const day = addLeadingZero(snapshot.getDate() + 1);
const hour = addLeadingZero(snapshot.getHours());
const minute = addLeadingZero(snapshot.getMinutes());

const str = `${year}-${month}-${day} ${hour}:${minute}`;

const textArea = document.getElementById("display-text");
textArea.innerText += "You accessed this page at: \n";
textArea.innerText += str;

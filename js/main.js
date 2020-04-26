let possibleText = ['Deals With Civil Lawsuits', 'Protects You And Your Family', 'Makes Sure You Have Justice', 'Fights For Your Rights'];

// Will execute myCallback every 5 seconds
var intervalID = window.setInterval(myCallback, 5000);

function myCallback() {
  var randomItem = possibleText[Math.floor(Math.random()*possibleText.length)];
  document.getElementById('title').innerHTML = 'Maxim & Maxim ' + randomItem;
}


function scroll_screen() {
  if (document.body.scrollTop === 0) {
    window.scrollBy(0, 500);
  }
}

setTimeout(function() { scroll_screen(); }, 10000);

// function myFunction() {
//         var x = document.getElementById("myDIV");
//         if (x.style.display === "none") {
//           x.style.display = "block";
//         } else {
//           x.style.display = "none";
//         }
//       }



var divs = ["Div1", "Div2", "Div3", "Div4"];
var visibleDivId = null;
function myFunction(divId) {
  if(visibleDivId === divId) {
    visibleDivId = null;
  } else {
    visibleDivId = divId;
  }
  hideNonVisibleDivs();
}

function hideNonVisibleDivs() {
  var i, divId, x;
  for(i = 0; i < divs.length; i++) {
    divId = divs[i];
    x = document.getElementById(divId);
    if(visibleDivId === divId) {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
}



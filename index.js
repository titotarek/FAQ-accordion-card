// function myFunction() {
//         var x = document.getElementById("myDIV");
//         if (x.style.display === "none") {
//           x.style.display = "block";
//         } else {
//           x.style.display = "none";
//         }
//       }



// var divs = ["Div1", "Div2", "Div3", "Div4"];
// var visibleDivId = null;
// function myFunction(divId) {
//   if(visibleDivId === divId) {
//     visibleDivId = null;
//   } else {
//     visibleDivId = divId;
//   }
//   hideNonVisibleDivs();
// }

// function hideNonVisibleDivs() {
//   var i, divId, x;
//   for(i = 0; i < divs.length; i++) {
//     divId = divs[i];
//     x = document.getElementById(divId);
//     if(visibleDivId === divId) {
//       x.style.display = "block";
//     } else {
//       x.style.display = "none";
//     }
//   }
// }


mainLi = document.querySelectorAll('.faq')

mainLi.forEach(element => {

  element.onclick = () => {

    let answer = element.childNodes[5]
    let arrow = element.childNodes[3]
    
    
    if (element.classList.contains('selected') == true || answer.classList.contains('hidden') != true || arrow.classList.contains('rotate') == true){
      
      
      answer.classList.add('hidden')
      element.classList.remove('selected')
      arrow.classList.remove('rotate')
      return   
    }
    
    mainLi.forEach(element => {

      let answer = element.childNodes[5]
      let arrow = element.childNodes[3]
      
      arrow.classList.remove('rotate')
      answer.classList.add('hidden')
      element.classList.remove('selected') 
    })


    element.classList.add('selected')
    answer.classList.remove('hidden')
    arrow.classList.add('rotate')    
  }
});


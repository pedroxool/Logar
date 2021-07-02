//Animacion de subir
document.getElementById("button-up").addEventListener("click", scrollUp);
function scrollUp(){

  var currentScroll = document.documentElement.scrollTop||document.body.scrollTop;
  
  if(currentScroll > 0){
    window.requestAnimationFrame(scrollUp);
    window.scrollTo (0,currentScroll - ( currentScroll / 20 ));
  }
}
buttonUp = document.getElementById("button-up");
socialBar = document.getElementById("myBtn1");

window.onscroll = function(){
  var scroll = document.documentElement.scrollTop ||document.body.scrollTop;
  if(scroll > 500){
    buttonUp.style.transform = "scale(1)";
    socialBar.style.transform = "scale(1)";
  }else if (scroll <400){
    buttonUp.style.transform = "scale(0)";
    socialBar.style.transform = "scale(0)";
  }
}

//animacion de texto

// var words = document.getElementsByClassName('word');
// var wordArray = [];
// var currentWord = 0;

// words[currentWord].style.opacity = 1;
// for (var i = 0; i < words.length; i++) {
//   splitLetters(words[i]);
// }

// function changeWord() {
//   var cw = wordArray[currentWord];
//   var nw = currentWord == words.length-1 ? wordArray[0] : wordArray[currentWord+1];
//   for (var i = 0; i < cw.length; i++) {
//     animateLetterOut(cw, i);
//   }
  
//   for (var i = 0; i < nw.length; i++) {
//     nw[i].className = 'letter behind';
//     nw[0].parentElement.style.opacity = 1;
//     animateLetterIn(nw, i);
//   }
  
//   currentWord = (currentWord == wordArray.length-1) ? 0 : currentWord+1;
// }

// function animateLetterOut(cw, i) {
//   setTimeout(function() {
// 		cw[i].className = 'letter out';
//   }, i*80);
// }

// function animateLetterIn(nw, i) {
//   setTimeout(function() {
// 		nw[i].className = 'letter in';
//   }, 340+(i*80));
// }

// function splitLetters(word) {
//   var content = word.innerHTML;
//   word.innerHTML = '';
//   var letters = [];
//   for (var i = 0; i < content.length; i++) {
//     var letter = document.createElement('span');
//     letter.className = 'letter';
//     letter.innerHTML = content.charAt(i);
//     word.appendChild(letter);
//     letters.push(letter);
//   }
  
//   wordArray.push(letters);
// }

// changeWord();
// setInterval(changeWord, 4000);

// function myFunction() {
//   var x = document.getElementById("myTopnav");
//   if (x.className === "topnav") {
//     x.className += " responsive";
//   } else {
//     x.className = "topnav";
//   }
// }

//Termina animacion de texto






// //Get the button
// // var mybutton = document.getElementById("myBtn");
// var mybutton1 = document.getElementById("myBtn1");

// // When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
//     // mybutton.style.display = "block";
   
//     mybutton1.style.display = "block";
//   } else {    
    
//     // mybutton.style.display = "none";
//     mybutton1.style.display = "none";
//   }
// }

// // buttonUp = document.getElementById("myBtn");
// // window.onscroll = function(){
// //   var scroll = document.documentElement.scrollTop;
// //   if(scroll > 100){
// //     mybutton.style.transform= "scale(1)";
// //   }else if(scroll<100){
// //     mybutton.style.transform= "scale(0)";
// //   }
// // }

// // When the user clicks on the button, scroll to the top of the document
// function topFunction() {
//   document.body.scrollTop = 0; // For Safari
//   document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
// }
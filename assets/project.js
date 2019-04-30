
function setBackgroundColor(color) {
	
	var btn = document.getElementById("fruit-page")

	btn.style.backgroundColor = color;

}

// function redButtonClicked() {
//     setBackgroundColor('#D62434');

// }

// document.getElementById("btn-red").onclick = redButtonClicked;


// function yellowButtonClicked() {
// 	setBackgroundColor('#F3A648');

//  }

// document.getElementById("btn-yellow").onclick = yellowButtonClicked;


	// function greenButtonClicked() {
	// setBackgroundColor('#CDDA4D');

 // }

 // document.getElementById("btn-green").onclick = greenButtonClicked;


 // function blueButtonClicked() {
	// setBackgroundColor('#5961A1');

 // }

 // document.getElementById("btn-blue").onclick = blueButtonClicked;


function myFunction() {
  var popup = document.getElementById("myPopup");
   if (document.getElementById("season2").innerHTML === "Fall" || document.getElementById("season2").innerHTML === "Winter") {
    document.getElementById("myPopup").innerHTML = "Yes!"
  } else {
    document.getElementById("myPopup").innerHTML = "No, it is not"
  }
  popup.classList.toggle("show");
}

function mySeasonsGreen() {
  document.getElementById("season2").innerHTML = "Spring";
  document.getElementById("fruit-title").innerHTML = "lemon";
   document.getElementById("fruit-content").innerHTML = "Lemon is an evergreen plant that belongs to the family Rutaceae.</br>It originates from Asia, but it can be found in tropical </br> and sub-tropical regions throughout the world today.";
  setBackgroundColor('#CDDA4D');
  document.getElementById("season-fruit-img").src = "./assets/lemon.png";
}

document.getElementById("btn-green").onclick = mySeasonsGreen;

function mySeasonsRed() {
  document.getElementById("season2").innerHTML = "Summer";
  document.getElementById("fruit-title").innerHTML = "strawberry";
  document.getElementById("fruit-content").innerHTML = "Strawberry's botanical name is Fragaria ananassa, </br> don't go by the name berry. </br> It is an aggregate accessory fruit and a false fruit, </br> the fleshy part you are eating is actually the stem of the plant.";
  setBackgroundColor('#D62434');
  document.getElementById("season-fruit-img").src = "./assets/strawberry.png";
}

document.getElementById("btn-red").onclick = mySeasonsRed;


function mySeasonsYellow() {
  document.getElementById("season2").innerHTML = "Fall";
  document.getElementById("fruit-title").innerHTML = "banana";
  document.getElementById("fruit-content").innerHTML = "Bananas float in water because they are less dense in comparison. </br> Bananas are one of the most popular fruits in the American diet.</br> They grow on plants that are officially considered an herb, </br> may be considered a mood enhancer. ";
  setBackgroundColor('#F3A648');
  document.getElementById("season-fruit-img").src = "./assets/banana.png";
}

document.getElementById("btn-yellow").onclick = mySeasonsYellow;

function mySeasonsBlue() {
  document.getElementById("season2").innerHTML = "Winter";
  document.getElementById("fruit-title").innerHTML = "grape";
  document.getElementById("fruit-content").innerHTML = "Grapes are botanically classed as berries. </br> They appear in many colors. White, red, black, blue, green, purple and golden.</br>American grapes are available in September and October,</br>  while European grapes are available round the year.";
  setBackgroundColor('#5961A1');
  document.getElementById("season-fruit-img").src = "./assets/grape.png";
}

document.getElementById("btn-blue").onclick = mySeasonsBlue;


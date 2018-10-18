
const colorAndBackgrounds = [
	["#000000", "/Users/Anderson/Code/HTML/LogicWebsite/images/Albums/Psychological.jpg", "0% 30%"],
	["#000000", "/Users/Anderson/Code/HTML/LogicWebsite/images/Albums/YoungBroke.jpg", "0% 35%"],
	["#000000", "/Users/Anderson/Code/HTML/LogicWebsite/images/Albums/YoungSinatra.jpg", "0% 30%"],
	["#000000", "/Users/Anderson/Code/HTML/LogicWebsite/images/Albums/YSUndeniable.jpg", "0% 40%"],
	["#000000", "/Users/Anderson/Code/HTML/LogicWebsite/images/Albums/YSWTF.jpg", "0% 45%"],
	["#142328", "/Users/Anderson/Code/HTML/LogicWebsite/images/Albums/UP.jpg", "0% 35%"],
	["#1e2850", "/Users/Anderson/Code/HTML/LogicWebsite/images/Albums/TITS.jpg", "0% 30%"],
	["#dcaa3c", "/Users/Anderson/Code/HTML/LogicWebsite/images/Albums/BT.jpg", "0% 25%"],
	["#c8b496", "/Users/Anderson/Code/HTML/LogicWebsite/images/Albums/Everybody.jpg", "0% 70%"],
	["#dcaa3c", "/Users/Anderson/Code/HTML/LogicWebsite/images/Albums/BT2.jpg", "0% 35%"],
	["#000000", "/Users/Anderson/Code/HTML/LogicWebsite/images/Albums/YS4.jpg", "0% 35%"]
];

let num = Math.floor(Math.random()*11);

var color = colorAndBackgrounds[num][0];
var albumArt = colorAndBackgrounds[num][1];
var BGPosition = colorAndBackgrounds[num][2];

function setBG() {
	document.getElementById("pageBackground").style.backgroundColor = color;
	
	var backHome = document.getElementById("WelcomeMessage");
	backHome.addEventListener("mouseover", function() {
		backHome.style.color = color;
	});
	
	if(num < 5 || num == 10){
		
		document.getElementById("topOfPage").style.backgroundColor = "#ffffff";
		
		document.getElementById("navBar").style.backgroundColor = "#ffffff";
		document.getElementById("navBar").style.color = "#000000";
		
		document.getElementById("album").style.borderColor = "#ffffff";
		document.getElementById("topOfPage").style.color = "#000000";
		backHome.addEventListener("mouseout", function() {
			backHome.style.color = "#000000";
		});
		
		document.getElementById("listenDropDown").style.backgroundColor = "#ffffff";
		document.getElementById("listenDropDown").style.color = "#000000";
		
		document.getElementById("learnDropDown").style.backgroundColor = "#ffffff";
		document.getElementById("learnDropDown").style.color = "#000000";
		document.getElementById("pageFooter").style.backgroundColor = "#ffffff";
		document.getElementById("siteInfo").style.color = "#000000";
	} else {
		
		document.getElementById("topOfPage").style.backgroundColor = "#000000";
		
		document.getElementById("navBar").style.backgroundColor = "#000000";
		document.getElementById("navBar").style.color = "#ffffff";
		
		document.getElementById("album").style.borderColor = "#000000";
		document.getElementById("topOfPage").style.color = "#ffffff";
		backHome.addEventListener("mouseout", function() {
			backHome.style.color = "#ffffff";
		});
		
		document.getElementById("listenDropDown").style.backgroundColor = "#000000";
		document.getElementById("listenDropDown").style.color = "#ffffff";
		
		document.getElementById("learnDropDown").style.backgroundColor = "#000000";
		document.getElementById("learnDropDown").style.color = "#ffffff";
		document.getElementById("pageFooter").style.backgroundColor = "#000000";
		document.getElementById("siteInfo").style.color = "#ffffff";
	}
	
	
	document.getElementById("WelcomeMessage").style.left = ((screen.width - 1220)/2 + 10) + "px";
	document.getElementById("album").style.backgroundImage = "url('"+albumArt+"')";
	document.getElementById("album").style.backgroundPosition = BGPosition;
	
	document.getElementById("navBar").style.top = "275px";
	
}

function listenDropDown() {
	var listenButton = document.getElementById("listenButton");
	listenButton.addEventListener("mouseover", function() {
		document.getElementById("listenDropDown").style.visibility = "visible";
	});
	
	var songSuggestor = document.getElementById("SongSuggestor");
	songSuggestor.addEventListener("mouseenter", function() {
		document.getElementById("SongSuggestor").style.backgroundColor = "#b2b2b2";
	});
	songSuggestor.addEventListener("mouseout", function() {
		if(num < 5 || num == 10) {
		document.getElementById("SongSuggestor").style.backgroundColor = "#ffffff";
		} else {
			document.getElementById("SongSuggestor").style.backgroundColor = "#000000";
		}
	});
	
	var mixtapeInfo = document.getElementById("MixtapeInfo");
	mixtapeInfo.addEventListener("mouseenter", function() {
		document.getElementById("MixtapeInfo").style.backgroundColor = "#b2b2b2";
	});
	mixtapeInfo.addEventListener("mouseleave", function() {
		if(num < 5 || num == 10) {
		document.getElementById("MixtapeInfo").style.backgroundColor = "#ffffff";
		} else {
			document.getElementById("MixtapeInfo").style.backgroundColor = "#000000";
		}
	});
	
	var listenDropDown = document.getElementById("listenDropDown");
	listenDropDown.addEventListener("mouseleave", function() {
		document.getElementById("listenDropDown").style.visibility = "hidden";
	});
	
	
}

function learnDropDown() {
	var learnButton = document.getElementById("learnButton");
	learnButton.addEventListener("mouseenter", function() {
		document.getElementById("learnDropDown").style.visibility = "visible";
	});
	
	var logic = document.getElementById("Logic");
	logic.addEventListener("mouseover", function() {
		document.getElementById("Logic").style.backgroundColor = "#b2b2b2";
	});
	logic.addEventListener("mouseout", function() {
		if(num < 5 || num == 10) {
		document.getElementById("Logic").style.backgroundColor = "#ffffff";
		} else {
			document.getElementById("Logic").style.backgroundColor = "#000000";
		}
	});
	
	//var theRattpack = document.getElementById("TheRattpack");
	//theRattpack.addEventListener("mouseover", function() {
	//	document.getElementById("TheRattpack").style.backgroundColor = "#b2b2b2";
	//});
	//theRattpack.addEventListener("mouseleave", function() {
	//	if(num < 5 || num == 10) {
	//	document.getElementById("TheRattpack").style.backgroundColor = "#ffffff";
	//	} else {
	//		document.getElementById("TheRattpack").style.backgroundColor = "#000000";
	//	}
	//});
	//
	//var learnDropDown = document.getElementById("learnDropDown");
	//learnDropDown.addEventListener("mouseleave", function() {
	//	document.getElementById("learnDropDown").style.visibility = "hidden";
	//});
	
	
}

function trackMouse(e) {
	var z = document.getElementById("navBar").offsetTop;
	var y = e.clientY;
	var x = e.clientX;
	
	var coor = "Top position: " + z + "__________Horiz: " + e.clientX +"_______Vert:" + e.clientY;
	
	//document.getElementById("bodyText").innerHTML = coor;
	
	if (x > screen.width / 2 || x < screen.width / 2 - 305 || y < 275) {
		document.getElementById("listenDropDown").style.visibility = "hidden";
	}
	
	if (x < screen.width / 2 || x > screen.width / 2 + 305 || y < 275) {
		document.getElementById("learnDropDown").style.visibility = "hidden";
	}
	
}

function positionFooter() {
	var body = document.body,
    html = document.documentElement;

	var height = Math.max( body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight );
	
	document.getElementById("pageFooter").style.top = height + "px";

}


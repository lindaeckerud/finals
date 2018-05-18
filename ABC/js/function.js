/*
	
give var before and after and middle letter to each fruit	
give two wrong choice answer
give image
	
*/
var apple = { 
  before:"a",
  after:"le",
  correct:"pp", 
  incorrect1:"pa", 
  incorrect2:"qp", 
  image:"photo/apple-01.png"
};


var coconut = {
  before:"coc",
  after:"ut",
  correct:"on", 
  incorrect1:"an", 
  incorrect2:"no", 
  image:"photo/coconut-01.png"
};

 



var grape = {
  before:"gr",
  after:"e",
  correct:"ap",
  incorrect1:"el",
  incorrect2:"ae",
  image:"photo/grape-01.png"
};
var kiwi = {
  before:"k",
  after:"i",
  correct:"iw",
  incorrect1:"im",
  incorrect2:"wi",
  image:"photo/kiwi.png"
};
var mango = {
  before:"ma",
  after:"o",
  correct:"ng",
  incorrect1:"mg",
  incorrect2:"nc",
  image:"photo/mango-01.png"
};
var peach = {
  before:"p",
  after:"ch",
  correct:"ea",
  incorrect1:"ie",
  incorrect2:"ee",
  image:"photo/peach-01.png"
};
var strawberry = {
  before:"str",
  after:"berry",
  correct:"aw",
  incorrect1:"ow",
  incorrect2:"ew",
  image:"photo/strawberry-01.png"
};
var banana = {
  before:"ba",
  after:"na",
  correct:"na",
  incorrect1:"in",
  incorrect2:"en",
  image:"photo/banana.png"
};
var orange = {
  before:"or",
  after:"ge",
  correct:"an",
  incorrect1:"au",
  incorrect2:"en",
  image:"photo/orange.png"
};
var papaya = {
  before:"pap",
  after:"a",
  correct:"ay",
  incorrect1:"iy",
  incorrect2:"yy",
  image:"photo/papaya.png"
};
var pear = {
  before:"p",
  after:"r",
  correct:"ea",
  incorrect1:"ae",
  incorrect2:"ee",
  image:"photo/pear.png"
};




/*
	
right answer
random order
buttons 	
*/
var words = ["coconut","grape", "kiwi", "mango", "peach", " strawberry", "banana", "orange", "papaya", "pear","apple"];
var correctgood = ["on", "ap", "iw", "ng", "ea", "aw","an", "an", "ay", "ea","pp"];
var choice = ["1", "2", "3"];
/*give a random math for automatically next fruit*/
var vocabWord = words[Math.floor(Math.random()*12)];
var order = choice[Math.floor(Math.random()*3)];
var answerA;
var answerB;
var answerC;
var underscores = "__";
/*var gameover = false;*/ 




/*make a css, give a text*/
function createYouWinMessage(){
	var youWinText = document.createElement("h1");
	youWinText.innerText = "Good Job!!!";
	/*can change in css*/
	youWinText.classList.add("goodjob");
	/*before is first children on span*/
	document.getElementById("question").insertBefore(youWinText, document.getElementById("question").children[0]);
}

/*target specific right answer and give the You Win*/
function validateAnswer() {
	var userAnswer = document.getElementById("before").innerText + document.getElementById("spell").innerText + document.getElementById("after").innerText;
	var trueAnswer = vocabWord;
	if( userAnswer == trueAnswer ) {
		createYouWinMessage();
	}
}



  
/*make it work 	*/

function nextWord() {
  document.getElementById("before").textContent = window[vocabWord].before;
  document.getElementById("spell").textContent = underscores;
  document.getElementById("after").textContent = window[vocabWord].after;
  document.getElementById("image").src = window[vocabWord].image;  
 
	
/*
if=true
else= false	
*/ 
 /*randomly select answer posistion*/ 
  if (order == 1) {  
  document.getElementById("answer1").textContent = window[vocabWord].incorrect1;
    answerA = window[vocabWord].incorrect1;
  document.getElementById("answer2").textContent = window[vocabWord].correct;
    answerB = window[vocabWord].correct;
  document.getElementById("answer3").textContent = window[vocabWord].incorrect2;
    answerC = window[vocabWord].incorrect2;
    
  } 
  
  else if (order == 2) {
  document.getElementById("answer1").textContent = window[vocabWord].correct;
    answerA = window[vocabWord].correct;
  document.getElementById("answer2").textContent = window[vocabWord].incorrect1;
    answerB = window[vocabWord].incorrect1;
  document.getElementById("answer3").textContent = window[vocabWord].incorrect2;
    answerC = window[vocabWord].incorrect2;
  }
  
  
   else {
  document.getElementById("answer1").textContent = window[vocabWord].incorrect1;
    answerA = window[vocabWord].incorrect1;
  document.getElementById("answer2").textContent = window[vocabWord].incorrect2;
    answerB = window[vocabWord].incorrect2;
  document.getElementById("answer3").textContent = window[vocabWord].correct;
    answerC = window[vocabWord].correct;
   
    
    console.log(order);
    
   }
   
};




nextWord();
/*spell = validateAnwer*/
function fillIn(answerLetter) {
  document.getElementById("spell").textContent = answerLetter;
  validateAnswer();
}

/*next game*/
function reveal(event) {
  console.log(event);
  var x = event.clientX
   
}



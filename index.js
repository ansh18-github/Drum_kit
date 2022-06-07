//document.querySelector("h1").innerHTML="DRUM";

/*
document.querySelectorAll("button")[0].addEventListener("click", handleClick());
it directly call handleclicked function at time of adding eventlistener to button

document.querySelectorAll("button")[0].addEventListener("click", handleClick);
it first add eventlistener and when we clicked first w-drum button it call handleclick function.

document.querySelectorAll("button")[0].addEventListener("click", handleClick);
function handleClick(){
alert("i got clicked!");
} ----------> SIMPLE FUNCTION

document.querySelectorAll("button")[0].addEventListener("click", function(){
alert("i got cliked!");
}); --------> ANONYMOUS FUNCTION// it doesn't have name


//adding eventlistener to one button only.
document.querySelectorAll("button")[0].addEventListener("click", function(){
alert("i got cliked!");
});


// display hello when we click buttons
var NoOfDrum= document.querySelectorAll("button").length;
for(var i=0; i<NoOfDrum; i++)
{
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){
   alert("hello");
  });



  var audio = new Audio('sounds/crash.mp3');
  audio.play();


  // adding eventlistener to all button using for loop and when we click button it play audio.
  var NoOfDrum= document.querySelectorAll("button").length;
  for(var i=0; i<NoOfDrum; i++)
  {
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
      var audio = new Audio('sounds/crash.mp3');
      audio.play();
    });
  }


  // adding eventlistener to all button using for loop and when we click button it will make text color white.
  var NoOfDrum= document.querySelectorAll("button").length;
  for(var i=0; i<NoOfDrum; i++)
  {
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
     this.style.color="white";
    });
  }



// adding eventlistener to all button using for loop and when we click button it will make text color white.
var NoOfDrum= document.querySelectorAll("button").length;
for(var i=0; i<NoOfDrum; i++)
{
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){

  });
}
*/

// adding eventlistener to all button using for loop and when we click button it will make text color white.
var NoOfDrum= document.querySelectorAll("button").length;
for(var i=0; i<NoOfDrum; i++)
{
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){
   var innerWord= this.innerHTML;
   audioPlay(innerWord);
buttonpress(innerWord);
  });
}

document.addEventListener("keydown", function(event){
 audioPlay(event.key);
buttonpress(event.key);
});

 function audioPlay(key){
  switch (key) {
      case "w":
      var W= new Audio("sounds/tom-1.mp3");
      W.play();
      break;
      case "k":
      var K= new Audio("sounds/snare.mp3");
      K.play();
      break;
      case "j":
      var J= new Audio("sounds/kick-bass.mp3");
      J.play();
      break;
      case "d":
      var D= new Audio("sounds/tom-2.mp3");
      D.play();
      break;
      case "a":
      var A= new Audio("sounds/tom-4.mp3");
      A.play();
      break;
      case "s":
      var S= new Audio("sounds/tom-3.mp3");
      S.play();
      break;
      case "l":
      var L= new Audio("sounds/crash.mp3");
      L.play();
      break;
    default:
}
}


function buttonpress(keypress){
var activeDrum= document.querySelector("." + keypress);
activeDrum.classList.add("pressed");

setTimeout( function(){
activeDrum.classList.remove("pressed");}, 100);

}

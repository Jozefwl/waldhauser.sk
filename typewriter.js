//copied from w3schools

//https://www.w3schools.com/howto/howto_js_typewriter.asp

var i = 0;
var txt = '.waldhauser_';
var speed = 80;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typing").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
/* start of comment

function typingWriter(){ //fucntion takes string text and HTML element id
    
  for(i=0;i < string.length;i++){ //loops for the entire length of the string
  document.getElementById("typing").innerHTML += string.charAt(i); //adds the character
  setTimeout(typeWriter, speed);
  }
}



end of comment */



//still dunno why forloop doesnt work
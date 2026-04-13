var triggerEl = document.querySelector("#navId a");
bootstrap.Tab.getInstance(triggerEl).show(); // Select tab by name

 function stopmusic() {
  	var y = document.getElementsByTagName('audio');
  	for(var j=0; j<y.length; j++) {
  		y[j].pause();}
  	
  	document.getElementById('marq').innerHTML = 'no music is playing';}
  		
  function playsong() {
  	var y = document.getElementsByTagName('audio');
  	for(var j=0; j<y.length; j++) {
  		y[j].pause();}
  	var songvalue = event.target.value;
  	document.getElementsByTagName('audio')[songvalue].currentTime = 0;
  	document.getElementsByTagName('audio')[songvalue].play();
  	

  	document.getElementById('marq').innerHTML = event.target.title;}


// stop music function
     function stopmusic() {
    var y = document.getElementsByTagName('audio');
    for(var j=0; j<y.length; j++) {
      y[j].pause();}
  		
  function playsong() {
    var y = document.getElementsByTagName('audio');
    for(var j=0; j<y.length; j++) {
      y[j].pause();}
    var songvalue = event.target.value;
    document.getElementsByTagName('audio')[songvalue].currentTime = 0;
    document.getElementsByTagName('audio')[songvalue].play();}
     }
     

// some other thing i guess

        var y = document.getElementsByTagName('audio');
    for(var j=0; j<y.length; j++) {
      y[j].onended = function() {
        document.getElementById('marq').innerHTML = 'select a song!';};}


        function playsong() {
  document.getElementById('marq').innerHTML = event.target.title;}
  
function stopmusic() {
  document.getElementById('marq').innerHTML = 'no music is playing';}
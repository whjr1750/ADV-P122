x=0;
y=0;
d_circle="";
d_rect="";
var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();
function start(){
    document.getElementById("status").innerHTML="system is listening please speak";
    recognition.start();
}
recognition.onresult=function(event){
    console.log(event);
    var content=event.results[0][0].transcript;
    document.getElementById("status").innerHTML="the speech has been recognised as "+content;
    console.log(content)
    if(content=="Circle." || content=="circle."){
        x=Math.floor(Math.random()*700);
        y=Math.floor(Math.random()*700);
        document.getElementById("status").innerHTML=" Circle drawing has begun ";
        d_circle="set";
    }
    if(content =="rectangle." || content =="Rectangle."){
        x=Math.floor(Math.random()*700);
        y=Math.floor(Math.random()*700);
        document.getElementById("status").innerHTML=" Rectangle drawing has begun ";
        d_rect="set";
    }
}
function setup(){
    canvas=createCanvas(900,900);
}
function draw(){
    if(d_circle=="set"){
        radius=Math.floor(Math.random()*70);
        circle(x,y,radius);
        document.getElementById("status").innerHTML="finished drawing circle";
        d_circle="";
    }
    
    if(d_rect=="set"){
        
        length=Math.floor(Math.random()*200);
        width=Math.floor(Math.random()*100);
        rect(x,y,length,width);
        document.getElementById("status").innerHTML="finished drawing rectangle";
        d_rect="";
    }
}
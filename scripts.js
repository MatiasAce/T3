var first = 1;
var turn = 0;
let xPlays = [];
let oPlays = [];

let changeColor = (c) =>{
    var c = "a"+ c;
    console.log(c);
    if ( first == 1 ){
    document.getElementById(c).style.backgroundColor= "#C8415B";
    document.getElementById(c).innerHTML = "o";
    document.getElementById(c).style.fontSize= "50px";
    document.getElementById(c).style.paddingTop= "35px";
    oPlays.push(c);
    }else if( first == 2){
    document.getElementById(c).style.backgroundColor= "#4CBBD7";
    document.getElementById(c).innerHTML = "x";
    document.getElementById(c).style.fontSize= "50px";
    document.getElementById(c).style.paddingTop= "35px";
    xPlays.push(c);
    return first = 0;
    } 
}

let pushing = (b)=>{
    console.log("esta tocando " + b);
    changeColor(b);
    first++;
    turn ++;
    winOrLose();
    console.log(turn);
}

let winOrLose = () =>{
   if (xPlays.includes("a7" && "a8" && "a9") || xPlays.includes("a4" && "a5" && "a6") || 
   xPlays.includes("a1" && "a2" && "a3") /*|| xPlays.includes("a7" && "a4" && "a1") || 
   xPlays.includes("a8" && "a5" && "a2") || xPlays.includes("a9" && "a6" && "a3") ||
   xPlays.includes("a7" && "a5" && "a3") || xPlays.includes("a9" && "a5" && "a1")*/){
       alert("gano la x");
       var x = xPlays
       console.log(x);
   } /*else if (oPlays.includes("a7" && "a8" && "a9") || oPlays.includes("a4" && "a5" && "a6") || 
   oPlays.includes("a1" && "a2" && "a3")/* || oPlays.includes("a7" && "a4" && "a1") || 
   oPlays.includes("a8" && "a5" && "a2") || oPlays.includes("a9" && "a6" && "a3") ||
   oPlays.includes("a7" && "a5" && "a3") || oPlays.includes("a9" && "a5" && "a1")){
   //    alert("gano la o")
  // }*/
}
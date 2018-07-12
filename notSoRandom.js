function random(){
    console.log(Math.floor(Math.random()*10+1))
}
function randomLetter(){
console.log("blah"[Math.floor(Math.random()*3+1)])
}
function myGuy(line){
    console.log(line + ", my dude")
}
function string_N_times(a, b){
    return(Math.sqrt((a * a)+(b * b)));
}
random();
randomLetter();
myGuy("Take it easy");
console.log(string_N_times(3, 4));
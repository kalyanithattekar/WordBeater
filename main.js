window.addEventListener('load',init);
//globals

//available levels
const levels={
    easy:5,
    medium:3,
    hard:2
}

//to change level
const currentlevel=levels.easy; //.easy for easy & hard for hard

let time=currentlevel;
let score=0;
let isplaying;

//dom elements
const wordinput=document.querySelector('#word-input');
const currentword=document.querySelector('#current-word');
const scoredisplay=document.querySelector('#score');
const timedisplay=document.querySelector('#time');
const message=document.querySelector('#message');
const seconds=document.querySelector('#seconds');

const words=[
'ironic','consent','pursue','homely','instant','universe','typical','translate','transform','tongue','threat',
'envelop','soothing','rifle','brabble','embedding','decade','creature','concern','compose','violate','vehical','variety',
'commercial','charity','ceremony','campaign','cabinet','burden','unusual','telescope','teenager','survey','surgery',
'brilliant','bother','biological','advance','adopt','acquire','supposed','suicide','succeed','struggle','strengthen',
'accurate','access','absorb','abroad','workshop','wooden','withdraw','whisper','western','welfare','weaponv','strategy',
'squeeze','specialist','establish','advocate','amenable','arbitrary','arrogate','aspersion','bombastic','calumny',
'capitulate','cognizant','congruity','constituent','contentious','debauch','denigrate','derivative','disaffected','disrepute'
,'ebullient','egregious','empirical','enervate','expedient','expurgate','flagrant','fortuitous','gourmand','impinge',
'inchoate','inimical','insidious','intimation','litigant','maverick','abrogate','bellicose','chthonic','colloquial',
'deleterious','egregious','epiphany','existential','facetious','fiduciary','fulminate','heuristic','incognito','interpolate',
'lucubration','malapropism','mnemonic','nomenclature','obfuscate','obsequious','oligarchy','orthography'];

//initialize game
function init(){
    //show no. seconds in UI
    seconds.innerHTML=currentlevel;
//load word from array
showword(words);
//start matching on word i/p
wordinput.addEventListener('input',startmatch);
//call count down every sec
setInterval(countdown,1000);
//check game status
setInterval(checkstatus,50);
}

//start match
function startmatch(){
    if(matchwords()){
       isplaying=true;
       time=currentlevel+1;
       showword(words);
       wordinput.value='';
        score++;
    }
    //if score=-1 display 0
    if(score===-1){
        scoredisplay.innerHTML=0;
    } 
    else{
        scoredisplay.innerHTML=score;
    }
}
//after game over u can take as much time u want to write given word 
//after that game will get started newly

//match current word to the word i/p
function matchwords(){
    if(wordinput.value==currentword.innerHTML){  //doubt
        message.innerHTML='correct!!!';
        return true;
    }
    else{
        message.innerHTML='';
        return false;
    }
}

//pack and show random word
function showword(words)
{
    //generate random array index
    const randindex=Math.floor(Math.random() * words.length);
    //output random word
    currentword.innerHTML=words[randindex];
}

//countdown timer
function countdown(){
    //check ime is not run out
    if(time>0){
        //decrement
        time--;
    }
        else if(time===0){
         isplaying=false;   
    }
    //show time
    timedisplay.innerHTML=time;
}
function checkstatus(){
    if(!isplaying && time===0){
        message.innerHTML='Game Over!!!';
        score=-1;
    }
}







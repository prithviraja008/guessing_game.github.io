const answer=Math.floor(Math.random() *10 + 1);
let guesses =0;
 document.getElementById("submitbtn").onclick=function(){
    let visitoranswer=document.getElementById("okay").value;
    guesses+=1;
    if(visitoranswer==answer){
        window.alert(`${answer} is the correct one. It took you ${guesses} guesses to get the right one`)

    }
    else if(visitoranswer<answer){
        window.alert("Nah its lesser, Try again");
    }
    else{
        window.alert("hmm, its bigger then correct one, Try again");
    }
 }
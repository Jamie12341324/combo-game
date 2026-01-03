document.addEventListener("DOMContentLoaded", function(){
    let button=document.getElementById("generator");
    button.addEventListener("click", function(){
        let num1=parseInt(document.getElementById("answer-box").value);
        let num2=parseInt(document.getElementById("answer-box2").value);
        // let num=num1+num2;
        combo=comboMaker(num1,num2);
        alert(combo);
    })
})
function comboMaker(num1,num2){
    let c=0;
    let letters=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    let combo="";
    let L=letters.length;
    if (num2>L){
        alert(num2+" is to many for that option the max is "+L+" you can get (a)")
        return "a";
    }
    let running=true
    comboA=[document.getElementById("ally1").innerText,"bbb"];
    while (running){
        c=0;
        combo="";
        while (c<num1){
            let r=Math.floor(Math.random()*num2);
            combo=combo+letters[r];
            c=c+1;
        }
        L2=comboA.length;
        c2=0;
        running=false
        while (c2<L2){
            if (comboA[c2]==combo){
                running=true;
                alert("duplicate detected")
            }
            c2=c2+1;
        }
    }
    return combo;
}
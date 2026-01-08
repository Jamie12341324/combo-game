document.addEventListener("DOMContentLoaded", function(){
    // loadElements()
    let button=document.getElementById("generator");
    document.getElementById("answer-box").value=0
    document.getElementById("answer-box2").value=0
    let enemies=document.getElementById("enemies");
    let boss1=document.getElementById("boss1");
    let boss2=document.getElementById("boss2");
    enemies.style.display="none"
    boss1.style.display="none"
    boss2.style.display="none"
    button.addEventListener("click", function(){
        let num1=parseInt(document.getElementById("answer-box").value);
        let num2=parseInt(document.getElementById("answer-box2").value);
        // let num=num1+num2;
        let combo=comboMaker(num1,num2);
        let allyDiv1=document.getElementById("allyDiv");
        let paraOld=allyDiv1.lastElementChild;
        alert(paraOld.id);
        let allyNum=parseInt(paraOld.id.substring(4,5));
        let para=document.createElement("p");
        para.id="ally"+allyNum;
        para.setAttribute("class","ally-text-color");
        para.innerText=combo;
        reference=allyDiv1.children[allyDiv1.children.length-4]
        allyDiv1.insertBefore(para,reference);
        alert(combo);
    })
    let battleButton=document.getElementById("battleEnemy");
    battleButton.addEventListener("click", function(){
        // Add toggle for enemy and boss divs
        let instructions=document.getElementById("instructions");
        let summoning=document.getElementById("summoning");
        let enemies=document.getElementById("enemies");
        let boss1=document.getElementById("boss1");
        let boss2=document.getElementById("boss2");
        if (boss1.style.display==="none" && boss2.style.display==="none"){
            toggle(instructions);
            toggle(summoning);
        }
        toggle(enemies);
        removeOnlyToggle(boss1);
        removeOnlyToggle(boss2);
        // let page=document.getElementsByClassName("page1");
        // page.appendChild(document.getElementsByClassName("page3"));
    })
    let battleButton2=document.getElementById("battleBoss1");
    battleButton2.addEventListener("click", function(){
        // Add toggle for enemy and boss divs
        let instructions=document.getElementById("instructions");
        let summoning=document.getElementById("summoning");
        let enemies=document.getElementById("enemies");
        let boss1=document.getElementById("boss1");
        let boss2=document.getElementById("boss2");
        if (enemies.style.display==="none" && boss2.style.display==="none"){
            toggle(instructions);
            toggle(summoning);
        }
        removeOnlyToggle(enemies);
        toggle(boss1);
        removeOnlyToggle(boss2);
        // let page=document.getElementsByClassName("page1");
        // page.appendChild(document.getElementsByClassName("page3"));
    })
    let battleButton3=document.getElementById("battleBoss2");
    battleButton3.addEventListener("click", function(){
        // Add toggle for enemy and boss divs
        let instructions=document.getElementById("instructions");
        let summoning=document.getElementById("summoning");
        let enemies=document.getElementById("enemies");
        let boss1=document.getElementById("boss1");
        let boss2=document.getElementById("boss2");
        if (enemies.style.display==="none" && boss1.style.display==="none"){
            toggle(instructions);
            toggle(summoning);
        }
        removeOnlyToggle(enemies);
        removeOnlyToggle(boss1);
        toggle(boss2);
        // let page=document.getElementsByClassName("page1");
        // page.appendChild(document.getElementsByClassName("page3"));
    })
    setInterval(checkNum,1000);
})
function toggle(div){
    if (div.style.display === "none"){
        div.style.display="block";
    } else {
        div.style.display="none";
    }
}
function removeOnlyToggle(div){
    if (div.style.display === "block"){
        div.style.display="none";
    }
}
function checkNum(){
    let num1=parseInt(document.getElementById("answer-box").value);
    let num2=parseInt(document.getElementById("answer-box2").value);
    let cost=num1+num2;
    document.getElementById("cost").innerText="Cost = " + cost;
}
// function loadElements(){
//     const saved = localStorage.getItem("ally4");
//     if (saved){
//         let allyDiv1=document.getElementById("allyDiv");
//         allyDiv1=saved;
//     }
// }
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
    alert(comboA);
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
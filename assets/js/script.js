// global variables for doing things to do with timers that can be cleared from anywhere in the code
let allyList=allyPower();
let enemyList=enemyPower();
let L=allyList.length;
let L2=enemyList.length;
let allyBold = new Array(L);
let enemyBold = new Array(L2);
let allyTime = new Array(L);
let enemyTime = new Array(L2);
// function for updating the length of arrays when L/L2 increases as to not cause errors when trying to clear timers from anywhere in the code
function updateGlobals(){
    let allyList=allyPower();
    let enemyList=enemyPower();
    let L=allyList.length;
    let L2=enemyList.length;
    let allyBold = new Array(L);
    let enemyBold = new Array(L2);
    let allyTime = new Array(L);
    let enemyTime = new Array(L2);
}
// Sets up the values of the input boxs to 0 
// hides the enemy boss1 and boss2 divs
document.addEventListener("DOMContentLoaded", function(){
    let button=document.getElementById("generator");
    document.getElementById("answer-box").value=0
    document.getElementById("answer-box2").value=0
    let enemies=document.getElementById("enemies");
    let boss1=document.getElementById("boss1");
    let boss2=document.getElementById("boss2");
    enemies.style.display="none";
    boss1.style.display="none";
    boss2.style.display="none";
    // Reads the numbers from the answer box uses comboMaker to make a combo 
    // and adds it to the end of the list of allied combos 
    button.addEventListener("click", function(){
        let num1=parseInt(document.getElementById("answer-box").value);
        let num2=parseInt(document.getElementById("answer-box2").value);
        let cost=num1+num2;
        moneystr=document.getElementById("money").innerText
        L=moneystr.length;
        let money=parseInt(moneystr.substring(6,L));
        let money1=exchange(money,cost);
        alert(money1);
        if (money!=money1){
            document.getElementById("money").innerText="Money="+money1;
            let combo=comboMaker(num1,num2);
            let allyDiv1=document.getElementById("allyDiv");
            let paraOld=allyDiv1.lastElementChild;
            alert(paraOld.id);
            let allyNum=parseInt(paraOld.id.substring(4,5));
            let para=document.createElement("p");
            para.id="ally"+allyNum;
            para.setAttribute("class","ally-text-color");
            let power="power"+Math.floor(Math.random()*20+1);
            para.classList.add(power);
            para.innerText=combo;
            reference=allyDiv1.children[allyDiv1.children.length-4];
            allyDiv1.insertBefore(para,reference);
            alert(combo);
            updateGlobals();
        }
    })
    // Adds a EventListener to a button that toggles the screen to a enemy background image
    // ends the flipping between bold and regular if it is happening and sets the text to regular
    let battleButton=document.getElementById("battleEnemy");
    battleButton.addEventListener("click", function(){
        let instructions=document.getElementById("instructions");
        let summoning=document.getElementById("summoning");
        let enemies=document.getElementById("enemies");
        let boss1=document.getElementById("boss1");
        let boss2=document.getElementById("boss2");
        let main=document.getElementsByClassName("page1");
        if (boss1.style.display==="none" && boss2.style.display==="none"){
            toggle(instructions);
            toggle(summoning);
        }
        main[0].removeAttribute("id");
        main[0].id="back1";
        toggle(enemies);
        removeOnlyToggle(boss1);
        removeOnlyToggle(boss2);
        let c=0;
        while (c<allyBold.length){
            if (allyBold[c]){
                clearInterval(allyBold[c]);
            }
            c=c+1;
            addOnlyToggle(document.getElementById("ally"+c));
        }
        let c2=0;
        while (c2<enemyBold){
            if (enemyBold[c2]){
                clearInterval(enemyBold[c2]);
            }
            c2=c2+1
        }
        let ally=document.getElementById("ally1");
        ally.classList.remove("battleBold");
        boss2.classList.remove("battleBold");
    })
    // Adds a EventListener to a button that starts a battle between the boss and allied combos
    // where the combos are shown to be fighting by swaping between bold and regular text
    // it also disables the button while the battle is taking place so the system does not glitch
    let attackButton1=document.getElementById("attackEnemy1");
    attackButton1.addEventListener("click", function(){
        // let ally=document.getElementById("ally1");
        // let enemy=document.getElementById("enemy1");
        // allyBold=setInterval(makeBold,0,ally,1000);
        // enemyBold=setInterval(makeBold,0,enemy,1000);
        // setTimeout(() => {
        // clearInterval(allyBold)
        // clearInterval(enemyBold)
        // ally.classList.remove("battleBold");
        // enemy.classList.remove("battleBold");
        // },4000)
        // attackButton1.disabled=true;
        // setTimeout(() => {
        //     attackButton1.disabled=false;
        // },4000)
        let foeId="enemy";
        battleSim(foeId,attackButton1);
    })
    // Adds a EventListener to a button that toggles the screen to a boss 1 background image
    // ends the flipping between bold and regular if it is happening and sets the text to regular
    let battleButton2=document.getElementById("battleBoss1");
    battleButton2.addEventListener("click", function(){
        let instructions=document.getElementById("instructions");
        let summoning=document.getElementById("summoning");
        let enemies=document.getElementById("enemies");
        let boss1=document.getElementById("boss1");
        let boss2=document.getElementById("boss2");
        let main=document.getElementsByClassName("page1")
        let exampleId="back2"
        if (enemies.style.display==="none" && boss2.style.display==="none"){
            toggle(instructions);
            toggle(summoning);
        }
        toggle2(main,exampleId);
        removeOnlyToggle(enemies);
        toggle(boss1);
        removeOnlyToggle(boss2);
        let c=0;
        while (c<allyBold.length){
            if (allyBold[c]){
                clearInterval(allyBold[c]);
            }
            c=c+1;
            addOnlyToggle(document.getElementById("ally"+c));
        }
        let c2=0;
        while (c2<enemyBold){
            if (enemyBold[c2]){
                clearInterval(enemyBold[c2]);
            }
            c2=c2+1
        }
        let ally=document.getElementById("ally1");
        ally.classList.remove("battleBold");
        boss2.classList.remove("battleBold");
    })
    // Adds a EventListener to a button that starts a battle between the boss and allied combos
    // where the combos are shown to be fighting by swaping between bold and regular text
    // it also disables the button while the battle is taking place so the system does not glitch
    let attackButton2=document.getElementById("attackBoss1");
    attackButton2.addEventListener("click", function(){
        // let ally=document.getElementById("ally1");
        // let boss1=document.getElementById("boss1");
        // allyBold=setInterval(makeBold,0,ally,1000);
        // enemyBold=setInterval(makeBold,0,boss1,1000);
        // setTimeout(() => {
        // clearInterval(allyBold)
        // clearInterval(enemyBold)
        // ally.classList.remove("battleBold");
        // boss1.classList.remove("battleBold");
        // },4000);
        // attackButton2.disabled=true;
        // setTimeout(() => {
        //     attackButton2.disabled=false;
        // },4000);
        let foeId="boss1";
        battleSim(foeId,attackButton2);
    })
    // Adds a EventListener to a button that toggles the screen to a boss 2 background image
    // ends the flipping between bold and regular if it is happening and sets the text to regular
    let battleButton3=document.getElementById("battleBoss2");
    battleButton3.addEventListener("click", function(){
        let instructions=document.getElementById("instructions");
        let summoning=document.getElementById("summoning");
        let enemies=document.getElementById("enemies");
        let boss1=document.getElementById("boss1");
        let boss2=document.getElementById("boss2");
        let main=document.getElementsByClassName("page1");
        let exampleId="back3";
        if (enemies.style.display==="none" && boss1.style.display==="none"){
            toggle(instructions);
            toggle(summoning);
        }
        toggle2(main,exampleId);
        removeOnlyToggle(enemies);
        removeOnlyToggle(boss1);
        toggle(boss2);
        let c=0;
        while (c<allyBold.length){
            if (allyBold[c]){
                clearInterval(allyBold[c]);
            }
            c=c+1;
            addOnlyToggle(document.getElementById("ally"+c));
        }
        let c2=0;
        while (c2<enemyBold){
            if (enemyBold[c2]){
                clearInterval(enemyBold[c2]);
            }
            c2=c2+1
        }
        let ally=document.getElementById("ally1");
        ally.classList.remove("battleBold");
        boss2.classList.remove("battleBold");
    })
    // Adds a EventListener to a button that starts a battle between the boss and allied combos
    // where the combos are shown to be fighting by swaping between bold and regular text
    // it also disables the button while the battle is taking place so the system does not glitch
    let attackButton3=document.getElementById("attackBoss2");
    attackButton3.addEventListener("click", function(){
        let foeId="boss2";
        battleSim(foeId,attackButton3);
        // let ally=document.getElementById("ally1");
        // let boss2=document.getElementById("boss2");
        // allyBold=setInterval(makeBold,0,ally,1000);
        // enemyBold=setInterval(makeBold,0,boss2,1000);
        // setTimeout(() => {
        // clearInterval(allyBold)
        // clearInterval(enemyBold)
        // ally.classList.remove("battleBold");
        // boss2.classList.remove("battleBold");
        // },4000);
        // attackButton3.disabled=true;
        // setTimeout(() => {
        //     attackButton3.disabled=false;
        // },4000)
    })
    checker=setInterval(checkNum,1000);
})
// hides a div if it is visible and shows it if it is not
function toggle(div){
    if (div.style.display === "none"){
        div.style.display="block";
    } else {
        div.style.display="none";
    }
}
// toggle2 changes a id to back1 if it is already a certain id and changes it to that id if it is not
function toggle2(main,exampleId){
    if (main[0].id===exampleId){
        main[0].id="back1";
    }else{
        main[0].id=exampleId;
    }
}
// removeOnlyToggle hides a div if that div is visible
function removeOnlyToggle(div){
    if (div.style.display === "block"){
        div.style.display="none";
    }
}
function addOnlyToggle(div){
    if (div.style.display==="none"){
        div.style.display="block";
    }
}
// makeBold adds a class to make text bold if that class is not already there and removes it if it is
function makeBold(p,r){
    if (p.classList.contains("battleBold")==false){
        p.classList.add("battleBold");
    }else{
        p.classList.remove("battleBold");
    }
}
// checkNum gets numbers from input boxs and updates the cost of the selection
function checkNum(){
    let num1=parseInt(document.getElementById("answer-box").value);
    let num2=parseInt(document.getElementById("answer-box2").value);
    let cost=num1+num2;
    document.getElementById("cost").innerText="Cost=" + cost;
}
// comboMaker makes a sequence of letters with num1 as the length of the sequence
// and num2 as how many different letters can appear
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
// exchange works out if you can buy something and passes back the new amount of money you have after you buy something 
function exchange(credits,cost){
    let remainder=credits-cost;
    if (remainder<0){
        alert("You don't have the credits for that");
        return credits;
    }
    return remainder;
}
// allyPower uses classes for the allied combos to get an array of numbers for all the all combos
function allyPower(){
    let c3=0;
    let L3=document.getElementById("allyDiv").children.length-4;
    let allyList=new Array(L3)
    while (c3<L3){
        i=c3+1;
        let ally=document.getElementById("ally"+i);
        console.log("ally",ally);
        let power=ally.classList[1].substring(5,ally.classList[1].length);
        // let power=ally.classList[1][5];
        console.log("power"+power);
        allyList[c3]=power;
        c3=c3+1;
    }
    return allyList
}
// enemyPower uses classes for the enemy combos to get an array of numbers for all the all combos
function enemyPower(){
    let c3=0;
    let L3=document.getElementById("enemies").children.length-2;
    let enemyList=new Array(L3);
    while (c3<L3){
        i=c3+1;
        let enemy=document.getElementById("enemy"+i);
        console.log("enemy",enemy);
        let power=enemy.classList[1].substring(5,enemy.classList[1].length);
        // let power=ally.classList[1][5];
        console.log("power"+power);
        enemyList[c3]=power;
        c3=c3+1;
    }
    return enemyList
}
// battleSim works out if a ally or enemy has won and toggles the loser
function battleSim(foeId,attackButton){
    let allyList=allyPower()
    let enemyList=enemyPower()
    let L=allyList.length;
    let L2=enemyList.length;
    let allyBold = new Array(L);
    let enemyBold = new Array(L2);
    let c=0;
    let c2=0;
    while (c<L && c2<L2){
        if (allyList[c]<=enemyList[c2]){
            enemyList[c2]=enemyList[c2]-allyList[c];
            console.log("ally"+allyList[c]);
            c=c+1;
            i2=c2+1
            p=document.getElementById("ally"+c);
            p2=getEnemy(i,foeId);
            allyBold[c-1]=setInterval(makeBold,0,p,1000);
            enemyBold[c2]=setInterval(makeBold,0,p2,1000);
            setTimeout(() => {
            if (allyBold[c-1]){
                clearInterval(allyBold[c-1]);
            }
            if (enemyBold[c2]){
                clearInterval(enemyBold[c2]);
            }
            p.classList.remove("battleBold");
            p2.classList.remove("battleBold");
            },4000*(c+c2));
            allyTime[c-1]=setTimeout(() => {
            toggle(p);
            },4000*(c+c2))
            enemyTime[c2]=setTimeout(() => {
            toggle(p);
            },4000*(L+L2))
        }else if (allyList[c]>enemyList[c2]){
            allyList[c]=allyList[c]-enemyList[c2];
            c2=c2+1;
            i=c+1
            p=document.getElementById("ally"+i);
            p2=getEnemy(c2,foeId);
            allyBold[c]=setInterval(makeBold,0,p,1000);
            enemyBold[c2-1]=setInterval(makeBold,0,p2,1000);
            setTimeout(() => {
            if (allyBold[c]){
                clearInterval(allyBold[c]);
            }
            if (enemyBold[c2-1]){
                clearInterval(enemyBold[c2-1]);
            }
            p.classList.remove("battleBold");
            p2.classList.remove("battleBold");
            },4000*(c+c2));
            toggle(p2);
            setTimeout(() => {
            toggle(p2);
            },4000*(c+c2))
            setTimeout(() => {
            toggle(p2);
            },4000*(L+L2))
        }
        //console.log("ally"+allyList[c]);
        //console.log("enemy"+enemyList[c2]);
    }
    attackButton.disabled=true;
    setTimeout(() => {
        attackButton.disabled=false;
    },4000*(L+L2))}
// returns the next enemy to be processed by battleSim depending on the foeId which changes depending on which button was clicked to rigger battleSim
function getEnemy(i,foeId){
    if (foeId=="enemy"){
        p2=document.getElementById("enemy"+i);
    }else if (foeId=="boss1"){
        p2=document.getElementById("boss1");
    }else if (foeId=="boss2"){
        p2=document.getElementById("boss2");
    }
    return p2;
}
// battleSim()
// module.exports = exchange;
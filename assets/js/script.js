// In this file there are no comments to show which parts are copied from tutorials because none of the code is from a tutorial however I did need 
// some help from copilot with commands relating to intervals, timeouts, clearing them and some scope things
// global variables for doing things to do with timers that can be cleared from anywhere in the code
let allyList=allyPower();
let enemyList=enemyPower();
let L=allyList.length;
let L2=enemyList.length;
let allyBold = new Array(L);
let enemyBold = new Array(L2);
let allyTimeStart = new Array(L);
let allyTimeEnd = new Array(L);
let enemyTimeStart = new Array(L2);
let enemyTimeEnd = new Array(L2);
let flashTimeStart = new Array(L+L2);
let flashTimeEnd = new Array(L+L2);
// function for updating the length of arrays when L/L2 increases as to not cause errors when trying to clear timers from anywhere in the code
function updateGlobals(){
    let allyList=allyPower();
    let enemyList=enemyPower();
    let L=allyList.length;
    let L2=enemyList.length;
    let allyBold = new Array(L);
    let enemyBold = new Array(L2);
    let allyTimeStart = new Array(L);
    let allyTimeEnd = new Array(L);
    let enemyTimeStart = new Array(L2);
    let enemyTimeEnd = new Array(L2);
    let flashTimeStart = new Array(L+L2);
    let flashTimeEnd = new Array(L+L2);
}
// Sets up the values of the input boxs to 0 
// hides the enemy boss1 and boss2 divs
document.addEventListener("DOMContentLoaded", function(){
    let button=document.getElementById("generator");
    document.getElementById("answer-box").value=0
    document.getElementById("answer-box2").value=0
    let enemies=document.getElementById("enemies");
    let boss1=document.getElementById("boss1div");
    let boss2=document.getElementById("boss2div");
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
            let paraOld=allyDiv1.children[allyDiv1.children.length-4];
            let allyNum=parseInt(paraOld.id.substring(4,5))+1;
            let para=document.createElement("p");
            para.id="ally"+allyNum;
            para.setAttribute("class","ally-text-color");
            let power="power"+Math.floor(Math.random()*20+1);
            para.classList.add(power);
            para.innerText=combo;
            reference=allyDiv1.children[allyDiv1.children.length-3];
            allyDiv1.insertBefore(para,reference);
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
        let boss1=document.getElementById("boss1div");
        let boss2=document.getElementById("boss2div");
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
    })
    // Adds a EventListener to a button that starts a battle between the boss and allied combos
    // where the combos are shown to be fighting by swaping between bold and regular text
    // it also disables the button while the battle is taking place so the system does not glitch
    let attackButton1=document.getElementById("attackEnemy1");
    attackButton1.addEventListener("click", function(){
        alert("you can only use the buttons while there is not an attack going on");
        toggleButtons();
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
        let boss1=document.getElementById("boss1div");
        let boss2=document.getElementById("boss2div");
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
    })
    // Adds a EventListener to a button that starts a battle between the boss and allied combos
    // where the combos are shown to be fighting by swaping between bold and regular text
    // it also disables the button while the battle is taking place so the system does not glitch
    let attackButton2=document.getElementById("attackBoss1");
    attackButton2.addEventListener("click", function(){
        alert("you can only use the buttons while there is not an attack going on");
        toggleButtons();
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
        let boss1=document.getElementById("boss1div");
        let boss2=document.getElementById("boss2div");
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
    })
    // Adds a EventListener to a button that starts a battle between the boss and allied combos
    // where the combos are shown to be fighting by swaping between bold and regular text
    // it also disables the button while the battle is taking place so the system does not glitch
    let attackButton3=document.getElementById("attackBoss2");
    attackButton3.addEventListener("click", function(){
        alert("you can only use the buttons while there is not an attack going on");
        toggleButtons();
        let foeId="boss2";
        battleSim(foeId,attackButton3);
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
// addOnlyToggle shows a element if it is hidden and leaves it alone if it is not
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
// allyPower uses classes for the allied combos to get an array of numbers for the power of all the combos
function allyPower(){
    let c3=0;
    let L3=document.getElementById("allyDiv").children.length-4;
    let allyList=new Array(L3)
    while (c3<L3){
        i=c3+1;
        let ally=document.getElementById("ally"+i);
        let power=parseInt(ally.classList[1].substring(5,ally.classList[1].length));
        allyList[c3]=power;
        c3=c3+1;
    }
    return allyList
}
// enemyPower uses classes for the enemy combos to get an array of numbers for the power of all the combos
function enemyPower(){
    let c3=0;
    let L3=document.getElementById("enemies").children.length-2;
    let enemyList=new Array(L3);
    while (c3<L3){
        i=c3+1;
        let enemy=document.getElementById("enemy"+i);
        let power=parseInt(enemy.classList[1].substring(5,enemy.classList[1].length));
        enemyList[c3]=power;
        c3=c3+1;
    }
    return enemyList;
}
// bossPower uses classes for the boss combo to get its power
function bossPower(foeId){
    let enemyList=new Array(1);
    let boss=document.getElementById(foeId+"div").children[1];
    let power=parseInt(boss.classList[1].substring(5,boss.classList[1].length));
    enemyList[0]=power;
    return enemyList;
}
// battleSim finds the higher power and if a ally or enemy has won and toggles the loser on a loop doing all the enemies and allies
function battleSim(foeId,attackButton){
    updateGlobals();
    let allyList=allyPower();
    let enemyList;
    if (foeId=="enemy"){
        enemyList=enemyPower();
    }else if (foeId=="boss1" || foeId=="boss2"){
        enemyList=bossPower(foeId);
        alert("enemyList"+enemyList);
    }
    let L=allyList.length;
    let L2=enemyList.length;
    let allyTimeStart = new Array(L);
    let allyTimeEnd = new Array(L);
    let enemyTimeStart = new Array(L2);
    let enemyTimeEnd = new Array(L2);
    let flashTimeStart = new Array(L+L2);
    let flashTimeEnd = new Array(L+L2);
    let c=0;
    let c2=0;
    let c3A=0;
    let c4A=0;
    let c5A=1;
    let c6E=0;
    let c7E=0;
    let c8E=1;
    let c9E=0;
    let c10A=0;
    // this while goes through allies and enemies in order and decides the winner and takes the losers power off the winners and
    // repeates the process with the next ally or enemy depending on who was the winner
    while (c<L && c2<L2){
        if (allyList[c]<=enemyList[c2]){
            enemyList[c2]=enemyList[c2]-allyList[c];
            c=c+1;
            i2=c2+1;
            // flashTimeStart make enemies and allies flash to show there fighting 
            flashTimeStart[c2+c-1]=setTimeout(() => {
                p=document.getElementById("ally"+c5A);
                p2=getEnemy(c8E,foeId);
                allyBold[c5A-1]=setInterval(makeBold,0,p,1000);
                enemyBold[c8E-1]=setInterval(makeBold,0,p2,1000);
                c5A=c5A+1;
            },4000*(c+c2-1))
            // flashTimeEnd gets rid of flashing after enemies and allies are finsished fighting
            flashTimeEnd[c2+c-1]=setTimeout(() => {
            if (allyBold[c10A]){
                clearInterval(allyBold[c10A]);
                c10A=c10A+1;
            }
            if (enemyBold[c9E]){
                clearInterval(enemyBold[c9E]);
            }
            p.classList.remove("battleBold");
            p2.classList.remove("battleBold");
            },4000*(c+c2));
            // allyTimeStart hides enemies after the have lost
            allyTimeStart[c-1]=setTimeout(() => {
            c3A=c3A+1;
            p=document.getElementById("ally"+c3A);
            toggle(p);
            },4000*(c+c2))
            // allyTimeEnd shows enemies after the battle has ended
            allyTimeEnd[c-1]=setTimeout(() => {
            c4A=c4A+1;
            p=document.getElementById("ally"+c4A);
            toggle(p);
            toggleButtons();
            },4000*(L+L2))
        }else if (allyList[c]>enemyList[c2]){
            allyList[c]=allyList[c]-enemyList[c2];
            c2=c2+1;
            i=c+1;
            // flashTimeStart make enemies and allies flash to show there fighting 
            flashTimeStart[c2-c-1]=setTimeout(() => {
                p=document.getElementById("ally"+c5A);
                p2=getEnemy(c8E,foeId);
                allyBold[c5A-1]=setInterval(makeBold,0,p,1000);
                enemyBold[c8E-1]=setInterval(makeBold,0,p2,1000);
                c8E=c8E+1;
            },4000*(c+c2-1))
            // flashTimeEnd gets rid of flashing after enemies and allies are finsished fighting
            flashTimeEnd[c2+c-1]=setTimeout(() => {
            if (allyBold[c10A]){
                clearInterval(allyBold[c10A]);
            }
            if (enemyBold[c9E]){
                clearInterval(enemyBold[c9E]);
                c9E=c9E+1;
            }
            p.classList.remove("battleBold");
            p2.classList.remove("battleBold");
            },4000*(c+c2));
            // enemyTimeStart hides enemies after the have lost
            enemyTimeStart[c2-1]=setTimeout(() => {
            c6E=c6E+1;
            p2=getEnemy(c6E,foeId);
            toggle(p2);
            },4000*(c+c2))
            // enemyTimeEnd shows enemies after the battle has ended
            enemyTimeEnd[c2-1]=setTimeout(() => {
            c7E=c7E+1;
            p2=getEnemy(c7E,foeId);
            toggle(p2);
            toggleButtons();
            },4000*(L+L2))
        }
    }
    // resultTimeout gives a alert based on if the player has won or lost the battle, tells the player was extra money they got if 
    // they won, gives them the money and adds a enemy or makes the boss more powerful
    resultTimeout=setTimeout(() => {
        if (c==L){
        alert("Battle Lost");
        }
        if (c2==L2){
            alert("Battle Victory");
            if (foeId=="enemy"){
                alert("You earned 5 money for defeating the boss");
                addMoney(5);
                addEnemy();
            }
            if (foeId=="boss1"){
                alert("You earned 8 money for defeating the boss");
                addMoney(8);
                upgradeBoss(foeId);
            }
            if (foeId=="boss2"){
                alert("You earned 15 money for defeating the boss");
                addMoney(15);
                upgradeBoss(foeId);
            }
        }
    },4000*(L+L2))
    attackButton.disabled=true;
    // disButton disables the button to avoid many clicks that can cause glitching
    let disButton=setTimeout(() => {
        attackButton.disabled=false;
    },4000*(L+L2))}
// addMoney adds the money earned from defeating enemies to the current money a player has
function addMoney(amount){
    let moneystr=document.getElementById("money").innerText
    let L=moneystr.length;
    let money=parseInt(moneystr.substring(6,L));
    newMoney=money+amount;
    document.getElementById("money").innerText="money="+newMoney;
}
// returns the next enemy to be processed by battleSim depending on the foeId which changes depending on which button was clicked to rigger battleSim
function getEnemy(i,foeId){
    if (foeId=="enemy"){
        p2=document.getElementById("enemy"+i);
    }else if (foeId=="boss1"){
        p2=document.getElementById("boss1div").children[1];
    }else if (foeId=="boss2"){
        p2=document.getElementById("boss2div").children[1];
    }
    return p2;
}
// toggleButtons disables all the buttons while a attack is happeing to avoid glitches and can be used to toggle them back after an attack has finsished
function toggleButtons(){
    let attackButton1=document.getElementById("battleEnemy");
    let attackButton2=document.getElementById("battleBoss1");
    let attackButton3=document.getElementById("battleBoss2");
    if (attackButton1.disabled==false){
        attackButton1.disabled=true;
        attackButton2.disabled=true;
        attackButton3.disabled=true;
    }else{
        attackButton1.disabled=false;
        attackButton2.disabled=false;
        attackButton3.disabled=false;
    }
}
// addEnemy creates a p element with an id with enemy then a number which is one more than the last enemies number it also gives 
// a class of ally-text-color to the element so it is readable but also a another class for the power of the enemy
function addEnemy(){
    let num1=4;
    let num2=4;
    let combo=comboMaker(num1,num2);
    let enemyDiv=document.getElementById("enemies");
    let paraOld=enemyDiv.children[enemyDiv.children.length-2];
    let allyNum=parseInt(paraOld.id.substring(5,6))+1;
    let para=document.createElement("p");
    para.id="enemy"+allyNum;
    para.setAttribute("class","ally-text-color");
    let power="power"+Math.floor(Math.random()*10+1);
    para.classList.add(power);
    para.innerText=combo;
    reference=enemyDiv.children[enemyDiv.children.length-1];
    enemyDiv.insertBefore(para,reference);
    updateGlobals();
}
// upgradeBoss creates a longer combo than the orginal combo for the boss and replaces the old one with the new one but also increases
// the power class 
function upgradeBoss(foeId){
    let bossDiv=document.getElementById(foeId);
    let p=bossDiv.children[1];
    let L=p.innerText.length+1;
    let num1=L;
    let num2=L;
    let combo=comboMaker(num1,num2);
    let orginalPower=parseInt(p.classList[1].substring(5,p.classList[1].length));
    let power="power"+Math.floor(Math.random()*15+1+orginalPower);
    p.classList.remove(p.classList[1]);
    p.classList.add(power);
    p.innerText=combo;
}
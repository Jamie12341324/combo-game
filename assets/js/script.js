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
            document.getElementById("money").innerText="Money = "+money1;
            let combo=comboMaker(num1,num2);
            let allyDiv1=document.getElementById("allyDiv");
            let paraOld=allyDiv1.lastElementChild;
            alert(paraOld.id);
            let allyNum=parseInt(paraOld.id.substring(4,5));
            let para=document.createElement("p");
            para.id="ally"+allyNum;
            para.setAttribute("class","ally-text-color");
            para.innerText=combo;
            reference=allyDiv1.children[allyDiv1.children.length-4];
            allyDiv1.insertBefore(para,reference);
            alert(combo);
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
        clearInterval(allyBold);
        clearInterval(enemyBold);
        let ally=document.getElementById("ally1");
        ally.classList.remove("battleBold");
        boss2.classList.remove("battleBold");
    })
    // Adds a EventListener to a button that starts a battle between the boss and allied combos
    // where the combos are shown to be fighting by swaping between bold and regular text
    // it also disables the button while the battle is taking place so the system does not glitch
    let attackButton1=document.getElementById("attackEnemy1");
    attackButton1.addEventListener("click", function(){
        let ally=document.getElementById("ally1");
        let enemy=document.getElementById("enemy1");
        allyBold=setInterval(makeBold,0,ally,1000);
        enemyBold=setInterval(makeBold,0,enemy,1000);
        setTimeout(() => {
        clearInterval(allyBold)
        clearInterval(enemyBold)
        ally.classList.remove("battleBold");
        enemy.classList.remove("battleBold");
        },4000)
        attackButton1.disabled=true;
        setTimeout(() => {
            attackButton1.disabled=false;
        },4000)
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
        clearInterval(allyBold);
        clearInterval(enemyBold);
        let ally=document.getElementById("ally1");
        ally.classList.remove("battleBold");
        boss2.classList.remove("battleBold");
    })
    // Adds a EventListener to a button that starts a battle between the boss and allied combos
    // where the combos are shown to be fighting by swaping between bold and regular text
    // it also disables the button while the battle is taking place so the system does not glitch
    let attackButton2=document.getElementById("attackBoss1");
    attackButton2.addEventListener("click", function(){
        let ally=document.getElementById("ally1");
        let boss1=document.getElementById("boss1");
        allyBold=setInterval(makeBold,0,ally,1000);
        enemyBold=setInterval(makeBold,0,boss1,1000);
        setTimeout(() => {
        clearInterval(allyBold)
        clearInterval(enemyBold)
        ally.classList.remove("battleBold");
        boss1.classList.remove("battleBold");
        },4000);
        attackButton2.disabled=true;
        setTimeout(() => {
            attackButton2.disabled=false;
        },4000);
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
        clearInterval(allyBold)
        clearInterval(enemyBold)
        let ally=document.getElementById("ally1");
        ally.classList.remove("battleBold");
        boss2.classList.remove("battleBold");
    })
    // Adds a EventListener to a button that starts a battle between the boss and allied combos
    // where the combos are shown to be fighting by swaping between bold and regular text
    // it also disables the button while the battle is taking place so the system does not glitch
    let attackButton3=document.getElementById("attackBoss2");
    attackButton3.addEventListener("click", function(){
        let ally=document.getElementById("ally1");
        let boss2=document.getElementById("boss2");
        allyBold=setInterval(makeBold,0,ally,1000);
        enemyBold=setInterval(makeBold,0,boss2,1000);
        setTimeout(() => {
        clearInterval(allyBold)
        clearInterval(enemyBold)
        ally.classList.remove("battleBold");
        boss2.classList.remove("battleBold");
        },4000);
        attackButton3.disabled=true;
        setTimeout(() => {
            attackButton3.disabled=false;
        },4000)
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
function exchange(credits,cost){
    let remainder=credits-cost;
    if (remainder<0){
        alert("You don't have the credits for that");
        return credits;
    }
    return remainder;
}
module.exports = exchange;
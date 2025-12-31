document.addEventListener("DOMContentLoaded", function(){
    let button=document.getElementById("generator");
    button.addEventListener("click", function(){
        let num1=parseInt(document.getElementById("answer-box").value);
        let num2=parseInt(document.getElementById("answer-box2").value);
        let num=num1+num2;
        alert(num);
    })
})
var mode1 = document.getElementById("mod1");
var mode2 = document.getElementById("mod2");
var mode3 = document.getElementById("mod3");
var hde1 = document.querySelectorAll("p");
var bodytout = document.querySelector("body");
var carraux1 = document.getElementById("nomber1de1ercas");
var button1 =  document.querySelectorAll("#button1");
var img2 = document.getElementsByClassName("img2");
var ok = document.querySelector("#ok");

var refleche = document.querySelector("#brand");

var faux = document.querySelector("#faux");
var abutton =document.getElementsByClassName("point");



mode2.style.backgroundColor="white";

carraux1.style.backgroundColor="0a0a23";




if (refleche) {
    refleche.addEventListener("input", function () {
        
        if (refleche.value === "rolex"||refleche.value === "ROLEX"||refleche.value === "Rolex") {
            ok.addEventListener("click", function () {
               
                ok.href = "file:///C:/Users/user/Desktop/projer%20de%20i2201/2%20eme%20page%20de%20projer%20htlm.html";
            });}

           else  if (refleche.value === "omega"||refleche.value === "OMEGA"||refleche.value === "Omega") {
                ok.addEventListener("click", function () {
                   
                    ok.href = "file:///C:/Users/user/Desktop/projer%20de%20i2201/omega%20html.html";
                });
        }
        else 
        ok.removeAttribute("href");
        ok.addEventListener("click",function(){ 
            faux.textContent="BRAND IS INCORRECT!";
            

        }) ;
       
});
}




    mode1.addEventListener("click",function(){
        mode1.style.backgroundColor="gold";
        mode2.style.backgroundColor="white";
        mode3.style.backgroundColor="black";
        bodytout.style.backgroundColor="#f0f0f0"; 
        carraux1.style.backgroundColor=" #2f2f2f";
        hde1[2].style.color="#ffffff";
        hde1[1].style.color="#ffffff";
        
        
        
    });

    mode2.addEventListener("click",function(){
        mode1.style.backgroundColor="#87cefa";
        mode2.style.backgroundColor="gold";
        mode3.style.backgroundColor="black";
        bodytout.style.backgroundColor=" #c0c0c0";
        carraux1.style.backgroundColor="rgb(149, 107, 107)";
        hde1[2].style.color="#ffffff";
        hde1[1].style.color="#ffffff";
        

        
    });


    mode3.addEventListener("click",function(){
        mode1.style.backgroundColor="#87cefa";
        mode2.style.backgroundColor="white";
        mode3.style.backgroundColor="gold";
        bodytout.style.backgroundColor=" black"; 
        carraux1.style.backgroundColor="rgb(55, 0, 0)";
        hde1[2].style.color="#ffffff";
        hde1[1].style.color="#ffffff";
       
        
    });
    



var mode1 = document.getElementById("mod1");
var mode2 = document.getElementById("mod2");
var mode3 = document.getElementById("mod3");

var bodytout = document.querySelector("body");
var img1 =document.querySelectorAll("#img1");
var toutimage = document.querySelectorAll(".divbig2");
var lesimage =document.querySelectorAll(".back2");

bodytout.style.border = "solid 5px gold";

/*lesimage[0].textContent="";
lesimage[1].textContent="";
lesimage[2].textContent="";
toutimage[0].style.display="flex";
toutimage[1].style.display="flex";
img1[7].style.backgroundColor="gold";*/








    mode1.addEventListener("click",function(){
        mode1.style.backgroundColor="gold";
        mode2.style.backgroundColor="white";
        mode3.style.backgroundColor="black";
        bodytout.style.backgroundColor="#87cefa"; 
      
        for(let i=0;i<8;i++){
            img1[i].style.backgroundColor="white";
            }
        
    });

    mode2.addEventListener("click",function(){
        mode1.style.backgroundColor="#87cefa";
        mode2.style.backgroundColor="gold";
        mode3.style.backgroundColor="black";
        bodytout.style.backgroundColor="wheat"; 

        for(let i=0;i<8;i++){
        img1[i].style.backgroundColor="gold";
        }
        

        
    });


    mode3.addEventListener("click",function(){
        mode1.style.backgroundColor="#87cefa";
        mode2.style.backgroundColor="white";
        mode3.style.backgroundColor="gold";
        bodytout.style.backgroundColor="black"; 
       
        for(let i=0;i<8;i++){
            img1[i].style.backgroundColor="goldenrod";
            }
        
        
    });

var divs = document.querySelectorAll("div");

 //   divs[4].addEventListener("click", function(){

   //     if(zouhour1[0]){
     //       img1[0].style.backgroundColor="black";
       //     zouhour1[0].remove();
            
       // } });

        //divs[4].addEventListener("click", function(){

          //      if(!zouhour1[0]){

          //  const img0 = document.createElement("img");
       // img0.id = "img1";
      //  img0.src = "https://cdn.prod.website-files.com/636a2d3c26aa845d12b17679/67406ad0bc26e8922dd49e52_673f6b9debf54389b0531a40_m126610lv-0002_drp-upright-bba-with-shadow.png";
        //img0.width = "300";
        //img0.height = "300";
        //img0.style.backgroundColor="white";
        //img0.style.borderRadius=" 30px 30px 30px 30px";

        //zouhour1[0].appendChild(img0);}});
        
        
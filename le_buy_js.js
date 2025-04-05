var input1= document.getElementById("info1");
var input2= document.getElementById("info2");
var input3= document.getElementById("info3");
var input4= document.getElementById("info4");



var div1= document.getElementById("div1");
var div2= document.getElementById("div2");
var div3= document.getElementById("div3");
var div4= document.getElementById("div4");

div1.style.borderRadius="20px";
div1.style.width="200px";
div1.style.marginLeft="70px";

div2.style.borderRadius="20px";
div2.style.width="200px";
div2.style.marginLeft="70px";

div3.style.borderRadius="20px";
div3.style.width="200px";
div3.style.marginLeft="70px";

div4.style.borderRadius="20px";
div4.style.width="200px";
div4.style.marginLeft="70px";



function ouino(ziko){

let a1 = /^[a-zA-Z]{3,12}$/ 
return a1.test(ziko);
}

input1.addEventListener("input", function ()   { if(ouino(input1.value)){
    input1.style.backgroundColor="green";
    input1.style.color="gold";
    div1.textContent="Name OK. Proceed.";
} else {
    input1.style.backgroundColor="red";
    div1.textContent=" Error 3-12 character!!";
}

});

function ouino1(zikoa){

    let a2 = /@gmail.com$/ 
    return a2.test(zikoa);
    }
    
    input2.addEventListener("input", function ()   { if(ouino1(input2.value)){
        input2.style.backgroundColor="green";
        input2.style.color="gold";
        div2.textContent="Email OK. Proceed.";
    } else {
        input2.style.backgroundColor="red";
        div2.textContent="Email is incccorct!";
    }
    
    });

    function ouino3(zikoa){

        let a3 = /^.{8,16}$/ 
        return a3.test(zikoa);
        }
        
        input3.addEventListener("input", function ()   { if(ouino3(input3.value)){
            input3.style.backgroundColor="green";
            input3.style.color="gold";
            div3.textContent="Password OK. Proceed.";
        } else {
            input3.style.backgroundColor="red";
            div3.textContent="Error. 8-16 character!";
        }
        
        });

        function ouino4(zikoa){

            let a4 = /^(71|70|03|79|81|76)-\d{6}$/;
            return a4.test(zikoa);
            }
            
            input4.addEventListener("input", function ()   { if(ouino4(input4.value)){
                input4.style.backgroundColor="green";
                input4.style.color="gold";
                div4.textContent="Phone OK. Proceed.";
            } else {
                input4.style.backgroundColor="red";
                div4.textContent="phone is inccorect!!!";
            }
            
            });


          
document.getElementById("button1").addEventListener("click", function() {
    
    if (ouino(input1.value) && ouino1(input2.value) && ouino3(input3.value) && ouino4(input4.value)) {
        

        document.getElementById("button1").href = "mozha.html";
        

    }else{
        document.getElementById("error").textContent="There is an error. Please re-enter the information correctly.";

    }
});

function catEduTxt() {
    
    if(document.getElementById("Nat").innerHTML==""){
        document.getElementById("Nat").innerHTML = document.getElementById("eduNat").innerHTML;
        document.getElementById("eduNat").style.display = 'block';
        document.getElementById("Stat").innerHTML = document.getElementById("eduState").innerHTML;
        document.getElementById("eduState").style.display = 'block';
        document.getElementById("ngo").innerHTML = document.getElementById("eduNgo").innerHTML; 
        document.getElementById("eduNgo").style.display = 'block';
    }
    else{
        document.getElementById("Nat").innerHTML = "";
        document.getElementById("Stat").innerHTML = "";
        document.getElementById("ngo").innerHTML = "";
    }
}

function catHealthTxt() {

    if(document.getElementById("Nat").innerHTML==""){
        document.getElementById("Nat").innerHTML = document.getElementById("eduNat").innerHTML;
        document.getElementById("eduNat").style.display = 'block';
        document.getElementById("Stat").innerHTML = document.getElementById("eduState").innerHTML;
        document.getElementById("eduState").style.display = 'block';
        document.getElementById("ngo").innerHTML = document.getElementById("eduNgo").innerHTML; 
        document.getElementById("eduNgo").style.display = 'block';
    }
    else{
        document.getElementById("Nat").innerHTML = "";
        document.getElementById("Stat").innerHTML = "";
        document.getElementById("ngo").innerHTML = ""; 
    }
}

function catNutriTxt() {
    if(document.getElementById("Nat").innerHTML==""){
        document.getElementById("Nat").innerHTML = document.getElementById("eduNat").innerHTML;
        document.getElementById("eduNat").style.display = 'block';
        document.getElementById("Stat").innerHTML = document.getElementById("eduState").innerHTML;
        document.getElementById("eduState").style.display = 'block';
        document.getElementById("ngo").innerHTML = document.getElementById("eduNgo").innerHTML; 
        document.getElementById("eduNgo").style.display = 'block';
    }
    else{
        document.getElementById("Nat").innerHTML = "";
        document.getElementById("Stat").innerHTML = "";
        document.getElementById("ngo").innerHTML = ""; 
    }
}

function catDevTxt() {
    if(document.getElementById("Nat").innerHTML==""){
        document.getElementById("Nat").innerHTML = document.getElementById("eduNat").innerHTML;
        document.getElementById("eduNat").style.display = 'block';
        document.getElementById("Stat").innerHTML = document.getElementById("eduState").innerHTML;
        document.getElementById("eduState").style.display = 'block';
        document.getElementById("ngo").innerHTML = document.getElementById("eduNgo").innerHTML; 
        document.getElementById("eduNgo").style.display = 'block';
    }
    else{
        document.getElementById("Nat").innerHTML = "";
        document.getElementById("Stat").innerHTML = "";
        document.getElementById("ngo").innerHTML = ""; 
    }
}

function showStatTxt(ref){
    if(ref.selectedIndex==0){
        clearSelectTxt();
    }
    else if(ref.selectedIndex==1){
        clearSelectTxt();
        document.getElementById("statTxt").innerHTML=document.getElementById("DelhiTXT").innerHTML;
    }
    else if(ref.selectedIndex==2){
        clearSelectTxt();
        document.getElementById("statTxt").innerHTML=document.getElementById("DelhiTXT").innerHTML;
    }
    else if(ref.selectedIndex==3){
        clearSelectTxt();
        document.getElementById("statTxt").innerHTML=document.getElementById("DelhiTXT").innerHTML;
    }
    else{
        document.getElementById("statTxt").innerHTML="";
    }
}

function clearSelectTxt(){
    document.getElementById("statTxt").innerHTML="";
}


function hideAllTxt(){
    document.getElementById("Nat").innerHTML = "";
    document.getElementById("Stat").innerHTML = "";
    document.getElementById("ngo").innerHTML = "";
}
function klikk(){
    var km=document.getElementById("km").value;
    var uzemar=document.getElementById("uzemar").value;
    var utikoltseg=8*uzemar*km/100;
    document.getElementById("elso").innerHTML=utikoltseg;
    var amortizacio=km*15;
    document.getElementById("masodik").innerHTML=amortizacio;
    var osszkoltseg=amortizacio+utikoltseg;
    document.getElementById("harmadik").innerHTML=osszkoltseg;
}
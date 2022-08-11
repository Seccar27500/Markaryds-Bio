let swedish = document.getElementById("changeToSwedish");
let english = document.getElementById("changeToEnglish");

// Alla översättningar kommer nedan

let hem = document.getElementById("hem");
let boka = document.getElementById("boka");
let om = document.getElementById("om");
let kontakt = document.getElementById("kontakt");
let r1 = document.getElementById("välkommen");
let r2 = document.getElementById("tillMarkaryd");
let r3 = document.getElementById("bio");



swedish.addEventListener("click", () => {
  r1.innerHTML = "Välkommen"
  r2.innerHTML = "till Markaryd"
  r3.innerHTML = "bio"
  
  hem.innerHTML = "Hem";
  boka.innerHTML = "Boka";
  om.innerHTML = "Om";
  kontakt.innerHTML = "Kontakt"

  //nedanför för style och ovanför HTML
  hem.style.margin = "20px 22px"
  boka.style.margin = "20px 22px"
  om.style.margin = "20px 22px"
  kontakt.style.margin = "20px 22px"
})


english.addEventListener("click", () => {
  r1.innerHTML = "Welcome"
  r2.innerHTML = "to Markaryd's"
  r3.innerHTML = "cinema"
  
  hem.innerHTML = "Home";
  boka.innerHTML = "Book";
  om.innerHTML = "About";
  kontakt.innerHTML = "Contact";

  //nedanför för style och ovanför HTML
  hem.style.margin = "20px 11px"
  boka.style.margin = "20px 11px"
  om.style.margin = "20px 11px"
  kontakt.style.margin = "20px 11px"
})


//bildbyte finns nedanför

let bildbyte = document.querySelector(".bild")


bildbyte.addEventListener("click", () => {
    console.log("Du tryckte på biografen")
})

    bildbyte.addEventListener("click", function(){
        if(bildbyte.src != "https://www.markaryd.se/images/200.5d6e3b7f163f3c0e0cb2d5e5/1530179778968/Kulturhus.JPG"){
          bildbyte.src = "https://www.markaryd.se/images/200.5d6e3b7f163f3c0e0cb2d5e5/1530179778968/Kulturhus.JPG";}

        else{
          bildbyte.src = "https://www.markaryd.se/images/200.67cddba416367fb9af1148b0/1527156182520/Markarydsbiograf.jpg";}});
  



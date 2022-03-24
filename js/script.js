// alert ("caio")
let userName = (prompt ("Qualè il tuo nome ?"));
console.log(userName);

let userSurname = (prompt ("Qualè il tuo cognome?"));
console.log(userSurname);

let numberKm = parseInt(prompt( " Qunti chilometri vuoi percorrere oggi? "));
console.log ( "numero chilometri:" , numberKm);

let age = parseInt( prompt("Quanti anni hai?"))
console.log ( "Età:" , age);

const price4Km = "0.21"
console.log (price4Km)
 
let price = numberKm * price4Km 
console.log ( "prezzo:", price  )
let scontoMinori
let scontoover65

if (age < 18 ) {
     price = price - (price * 0.20)  
    console.log("Prezzo minori:", price)
  console.log(age < 18)
 }else if(age > 65 ){
 price = price - (price * 0.40);
    console.log("Prezzo over 65:", price);
  console.log(age > 65);
 } else{ price = price
    }

 document.getElementById("nome").innerHTML += userName 

 document.getElementById("cognome").innerHTML += userSurname

 document.getElementById("numeroKm").innerHTML += numberKm

  document.getElementById("price").innerHTML  += Math.round(100*price)/100





let edad = parseInt(prompt(" Bienvenido a DeepMarket Ingrese su Edad"));

function menores (){
    alert(`No puede ingresar a nuestro market , vuelve cuando tus ${edad} años sean 18`)
    
}


if (edad >= 18) {

    alert("Bienvenido a DeepMarket ")

    let dinero = parseInt(prompt(`Ingrese el dinero que va a Lavar`))

    parseInt(alert(`Lavaremos un total de $ ${dinero} y le descontaremos una cantidad`))

    parseInt(alert(`le descontaremos $150 por lavado , esta de acuerdo? si es asi toque "ACEPTAR"`));

    const resta = (a, b) => a - b;

    let descuento = 150;

    let resultado = resta(dinero, descuento);

    (alert(`Le devolveremos un total de $ ${resultado} Si esta de acuerdo toque ACEPTAR`))
    for (let i = 0; i < 100; i = i + 9) {
        alert(`Lavando dinero ${i} %`)  
         }
         alert(`Su dinero, $ ${resultado} ha sido lavado con exito. La Transaccion puede durar hasta 24hs.`)
    
}
  
    


else{
    menores();
    
    
};










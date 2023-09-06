
/* 
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
  */
// const dineroLavado =[`Dinero Total Lavado`];
// const usuarios =["mario", "juventus", "anastasio"]
// const actividadSemanal = [32, 12, 45, 98, 2, 43, 21];
// const menosActividad = 2;
// const indice = actividadSemanal.indexOf(menosActividad);
// if (indice !== -1) {
//     console.log(`El dia de menos actividad (${menosActividad} transacciones) fue el Viernes`);
// }



//  function menores(){
//     alert(`No puedes ingresar vuelve cuando tus ${edad} años sean 18.`)
    
//  }
//  let descuento1 = 400;
//  let descuento2 = 700;
//  let descuento3 = 1000;

//  const resta = (a, b) => a - b;

//  const planes = [
// {plan: "1. Seguridad Baja / Se descuenta $400" },
// {plan: "2. Seguridad Media / Se descuenta $700" },
// {plan: "3. Seguridad Alta / Se descuenta $1000" },
//  ]
  
//  let edad = parseInt(prompt("Ingrese su edad"));


// if (edad >= 18) {
//     alert("Bienvenido a DeepMarket")
//     let nombre = prompt("Ingrese su Nombre")
//     usuarios.push(nombre)
//     console.log(usuarios);

//     alert(`Hola ${nombre} , A continuacion le mostraremos nuestros planes de seguridad para realizar el lavado de dinero`)
    
//     for (const plans of planes) {
//         parseInt(alert( plans.plan ))
        
//     }
//     let planselected = parseInt(prompt("Ingrese su Plan (1,2,3)"))
//     if (planselected === 1){
//         alert("Usted eligio el plan Seguridad Baja")
//         let dinero = parseInt(prompt("Ingrese el dinero a Lavar"))
//         if (dinero > 400){
//             alert(`A sus $${dinero} se le descontara lo acordado.`);
//             let resultado = resta(dinero,descuento1);
//             dineroLavado.push(resultado) 
//             console.log(dineroLavado);            
//             alert(`El total de $${resultado} sera lavado. ACEPTAS? `)
//             for (let i = 0; i < 100; i = i + 9) {
//                 alert(`Lavando dinero ${i} %`)  
//                  }
//                  alert(`${nombre} su dinero, $${resultado} ha sido lavado con exito. La Transaccion puede durar hasta 24hs.`)

//         }else{
//             alert(`Datos incorrectos. Recargue la pagina ${nombre}`)
//         }

//     }else;
//     if (planselected === 2){
//         alert("Usted eligio el plan Seguridad Media");
//         let dinero2 = parseInt(prompt("Ingrese el dinero a lavar"))
//         if (dinero2 > 700){
//             alert(`A sus $${dinero2} se le descontara lo acordado.`);
//             let resultado2 = resta(dinero2,descuento2);
//             dineroLavado.push(resultado2) 
//             console.log(dineroLavado); 
//             alert(`El total de $${resultado2} sera lavado . ACEPTAS?`);
            


//             for (let i = 0; i < 100; i = i + 9) {
//                 alert(`Lavando dinero ${i} %`)  
//                   }
//                  alert(` ${nombre} su dinero, $${resultado2} ha sido lavado con exito. La Transaccion puede durar hasta 24hs.`)

//         }else{
//             alert(`Datos incorrectos. Recargue la pagina ${nombre}`)
//         }       
//     }

//     if (planselected === 3){
//         alert("Usted eligio el plan Seguridad Alta");
//         let dinero3 = parseInt(prompt("Ingrese el dinero a lavar"))
//         if (dinero3 > 700){
//             alert(`A sus $${dinero3} se le descontara lo acordado.`);
//             let resultado3 = resta(dinero3,descuento3);
//             dineroLavado.push(resultado3) 
//             console.log(dineroLavado); 
//             alert(`El total de $${resultado3} sera lavado . ACEPTAS?`)

//             for (let i = 0; i < 100; i = i + 9) {
//                 alert(`Lavando dinero ${i} %`)  
//                   }
//                  alert(`${nombre} su dinero, $${resultado3} ha sido lavado con exito. La Transaccion puede durar hasta 24hs.`)

//         }else{
//             alert(`Datos incorrectos. Recargue la pagina ${nombre}`)
//         }  
       
//     }

    
  

// }else{
//  menores();
 
// }



function verificarMayorEdadYNombre() {
    const nombreGuardado = localStorage.getItem('nombre');
    const fechaNacimiento = localStorage.getItem('fechaNacimiento'); 
    if (!nombreGuardado || !fechaNacimiento) {
      Swal.fire({
        title: 'Por favor, ingresa tu nombre y fecha de nacimiento:',
        html: `
          <input type="text" id="nombre" placeholder="Nombre">
          <input type="date" id="fechaNacimiento" max="2005-12-31">
        `,
        showCancelButton: false,
        confirmButtonText: 'Verificar',
        preConfirm: () => {
          const nombre = document.getElementById('nombre').value;
          const fechaNacimiento = document.getElementById('fechaNacimiento').value;
          localStorage.setItem('nombre', nombre);
          localStorage.setItem('fechaNacimiento', fechaNacimiento);
          return { nombre, fechaNacimiento };
        }
      }).then((result) => {
        if (result.isConfirmed) {
          validarEdadYNombre(result.value.nombre, result.value.fechaNacimiento);
        }
      });
    } else {
      validarEdadYNombre(nombreGuardado, fechaNacimiento);
    }
  }
  
  function validarEdadYNombre(nombre, fechaNacimiento) {
    const fechaNacimientoDate = new Date(fechaNacimiento);
    const fechaHoy = new Date();
    const edad = fechaHoy.getFullYear() - fechaNacimientoDate.getFullYear();
  
    if (edad >= 18) {
      Swal.fire('¡Bienvenido!', `Hola ${nombre}, Compre mucho :)`, 'success');
    } else {
      Swal.fire('Acceso denegado', 'No puede ingresar a nuestra SuperTienda!.', 'error');
    }
  }
  
  window.onload = verificarMayorEdadYNombre;
 
  /* seccion carrito */
// let carrito = [];
// let total = 0;

// document.getElementById("boton3").onclick = function(){
//     agregarAlCarrito(`Katana Yasuo`, 999, );
    
// };
// document.getElementById("boton2").onclick = function(){
//     agregarAlCarrito(`Llavero Fizz`, 500)
// };
// document.getElementById("boton1").onclick = function(){
//     agregarAlCarrito(`Espada Aatrox`, 250)
// };

// const btnEliminarCarrito = document.getElementById("borrarCarrito");
// btnEliminarCarrito.addEventListener("click", function(){
//   localStorage.removeItem("carrito");
//   carrito.length= 0 ;
//     actualizarCarrito();
// });
// btnEliminarCarrito.addEventListener("click", function(){
//     localStorage.removeItem(total = 0)
//     total.length = 0;
//     actualizarCarrito();
// })

// if (localStorage.getItem('carrito')) {
//     carrito = JSON.parse(localStorage.getItem('carrito'));
//     total = parseFloat(localStorage.getItem('total'));
//     actualizarCarrito(); 

// }

// function actualizarCarrito() {
//     const carritoDiv = document.getElementById('carrito');
//     carritoDiv.innerHTML = '';
       

//     carrito.forEach(producto => {
//         const productoDiv = document.createElement('div');
//         productoDiv.innerText = `${producto.nombre} - $${producto.precio}`;
//         carritoDiv.appendChild(productoDiv); 
        
//     });

//     const totalSpan = document.getElementById('total');

//     totalSpan.innerText = total.toFixed(2);
 
//     localStorage.setItem('carrito', JSON.stringify(carrito));
//     localStorage.setItem('total', total.toFixed(2));
// }

// function agregarAlCarrito(nombre, precio) {     
//     carrito.push({ nombre, precio });
//     total += precio;
//     actualizarCarrito();  
// }


document.addEventListener('DOMContentLoaded', function () {
  const likeButton = document.getElementById('botonlikes');
  const likeCount = document.getElementById('likesdados');

  // Variable para almacenar el número de likes
  let likes = 0;

  // Manejador de eventos para el botón de "Me gusta"
  likeButton.addEventListener('click', function () {
      // Simula una solicitud al servidor con fetch
      fetch('http://127.0.0.1:5500/index.html', {
          method: 'POST', // Puedes usar POST para simular una actualización en el servidor
      })
      .then(response => response.json())
      .then(data => {
          // Incrementa el número de likes y actualiza la página
          likes++;
          likeCount.textContent = likes;
      })
      .catch(error => {
          console.error('Error:', error);
      });
  });
});










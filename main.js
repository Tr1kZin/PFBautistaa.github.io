
                 
             /* edad y nombre  */
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
  let carrito = [];
 let total = 0;

  document.getElementById("boton3").onclick = function(){
      agregarAlCarrito(`Katana Yasuo`, 999, );
    
  };
 document.getElementById("boton2").onclick = function(){
     agregarAlCarrito(`Llavero Fizz`, 500)
  };
  document.getElementById("boton1").onclick = function(){
     agregarAlCarrito(`Espada Aatrox`, 250)
 };

  const btnEliminarCarrito = document.getElementById("borrarCarrito");
  btnEliminarCarrito.addEventListener("click", function(){
    localStorage.removeItem("carrito");
    carrito.length= 0 ;
 });
 btnEliminarCarrito.addEventListener("click", function(){
     localStorage.removeItem(total = 0)
   total.length = 0;
     actualizarCarrito();
 })

  if (localStorage.getItem('carrito')) {
     carrito = JSON.parse(localStorage.getItem('carrito'));
     total = parseFloat(localStorage.getItem('total'));
     actualizarCarrito(); 

  }

  function actualizarCarrito() {
   const carritoDiv = document.getElementById('carrito');
     carritoDiv.innerHTML = '';
       

    carrito.forEach(producto => {
         const productoDiv = document.createElement('div');
        productoDiv.innerText = `${producto.nombre} - $${producto.precio}`;
       carritoDiv.appendChild(productoDiv); 
        
     });

     const totalSpan = document.getElementById('total');

     totalSpan.innerText = total.toFixed(2);
 
     localStorage.setItem('carrito', JSON.stringify(carrito));
      localStorage.setItem('total', total.toFixed(2));
 }

 function agregarAlCarrito(nombre, precio) {     
      carrito.push({ nombre, precio });
     total += precio;
     actualizarCarrito();  
  }



/* JSON , y despedida */
  
  document.addEventListener("DOMContentLoaded", function () {
    const titleElement = document.getElementById("tituloo");
    const descriptionElement = document.getElementById("descripcionn");

    
    fetch("info.json")
        .then(response => response.json())
        .then(data => {
            titleElement.textContent = data.titulo;
            descriptionElement.textContent = data.descripcion;
        })
        .catch(error => console.error("Error al cargar la información:", error));
});


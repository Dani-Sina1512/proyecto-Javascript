let btnSumar = document.getElementById("btnSumar")
let btnVaciar = document.getElementById("btnVaciar")
let btnVerTotal = document.getElementById("btnVerTotal")

btnSumar.addEventListener('click', agregarConWhile);
btnVaciar.addEventListener('click', vaciar);
btnVerTotal.addEventListener('click', verTotal);


let total = 0;


function agregarConWhile()
{
  let producto = NaN;
  while(isNaN(producto))
  {
    producto = parseInt(prompt("Ingrese el precio del producto"));
    if(isNaN(producto))
    {
      alert("El valor ingresado debe ser un número");
    }
    else
    {
      total = total + producto;
    }
  }
}


function vaciar()
{
  producto1 = NaN;
  producto2 = NaN;
  total = 0;
  alert('El carrito ha sido vaciado');
}


function verTotal()
{
  alert("El total a pagar es $" + total);
}
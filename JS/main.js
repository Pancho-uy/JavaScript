// Entrega desafío complementario JS

// 
//
document.getElementById("enviar").addEventListener("click", function ()
{
  let contador, primero, segundo, ultimo, fibo;
  let msg="";

  // Genero números de Fibonacci en base al ingresado por el usuario
  //
  ultimo=parseInt(document.getElementById("limite").value);
  primero=0
  segundo=1;
  fibo=primero+segundo;
  contador=2;

  if (!isNaN(ultimo))
  {
    while (fibo<ultimo)
    {
      anterior=(fibo-segundo);
      primero=fibo;
      segundo=anterior;
      fibo=(primero+segundo);
      msg=(msg+", "+new Intl.NumberFormat('de-DE').format(fibo));
      contador++;
    }
    ;
    document.getElementById("laCantidad").innerHTML = "La suceción generada tiene "+contador+" números de Fibonacci.";
    document.getElementById("elResultado").innerHTML = "0, 1"+msg;
  }
  else
  {
    alert("No se generaron números, suceción vacía");
  }

})


document.getElementById("resetear").addEventListener("click", function () {location.reload()})
// Fin del código.
// Entrega desafío complementario JS

// Inicio variables
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
    do
    {
      anterior=(fibo-segundo);
      primero=fibo;
      segundo=anterior;
      fibo=(primero+segundo);
      msg=(msg+", "+new Intl.NumberFormat('de-DE').format(fibo));
      contador++;
    }
    while (fibo<ultimo);
    document.getElementById("cantidad").innerHTML = "La suceción generada tiene "+contador+" números de Fibonacci.";
    document.getElementById("resultado").innerHTML = "0, 1"+msg;
  }
  else
  {
    alert("No se generaron números, suceción vacía");
  }

})
// Fin del código.
// Entrega desafío complementario JS

// Inicio variables
//
let contador, primero, segundo, ultimo, fibo;
let msg="";

// Genero números de Fibonacci en base al ingresado por el usuario
//
alert("SUCECIÓN DE FIBONACCI\nLa sucesión comienza con los números 0 y 1, a partir de estos, «cada término es la suma de los dos anteriores», es la relación de recurrencia que la define  (Fuente: Wikipedia)")

ultimo=parseInt(prompt("Se generará una suceción de Fibonacci hasta el número ingresado.\n(el último será el Fibonacci inmediato al ingresado).\nIngrese ultimo numero: "))

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
  alert("La suceción generada tiene "+contador+" números de Fibonacci. Click en ACEPTAR para verlos.");
  alert("Y aquí están: \n"+"0, 1"+msg);
}
else
{
  alert("No se generaron números, suceción vacía");
}


// Fin del código.
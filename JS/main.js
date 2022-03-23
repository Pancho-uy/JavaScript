// Entrega desafío complementario JS
//
//
  let salir=false;
  let descripcion=pedido=lineaFactura="";
  let cantidad=costo=costoFlete=subtotal=0;
  let iva=22;
  let flete=0;
  //
  // cuento paginas por tamaño
  //
  while (!salir)
  {
    lineaFactura = parseInt(prompt("¿Qué Servicio desea comprar?:\n 1: Impresión B/N A4 (UYU 5 por carilla)\n 2:Impresión Color A4 (UYU 25 por carilla)\n 3:Ploteo papel (UYU 175 el metro)\n 4:Encuadernados A4 rulo plástico.(UYU 190)\n\n\n5: Salir"));

    switch(lineaFactura)
    {
      case 1:
        descripcion="Impresión B/N A4";
        unidad="carillas";
        precio=5;
        break;
      case 2:
        descripcion="Impresión Color A4";
        unidad="carillas";
        precio=25;
        break;
      case 3:
        descripcion="Ploteo papel";
        unidad="metros";
        precio=175;
        break;
      case 4:
        descripcion="Encuadernados A4 rulo plástico";
        unidad="unidades"
        precio=190;
        break;
      case 5:
        salir=true;
        break;
    }
    if (!salir && (lineaFactura>0 && lineaFactura <6))
    {
      cantidad=parseInt(prompt("Ingrese cantidad a comprar ("+unidad+") "));
      costo=(precio*cantidad);
      pedido=pedido+"- "+descripcion+" "+cantidad+" "+unidad+" UYU "+new Intl.NumberFormat('de-DE').format(costo)+"\n";
      subtotal=subtotal+costo;
    }
  }
  subtotal=subtotal;
  ivafact=subtotal*(iva/100);
  total=subtotal+ivafact;
alert("ORDEN DE COMPRA \n\n"+pedido+"\n\n"+"Neto: UYU "+new Intl.NumberFormat('de-DE').format(subtotal)+"\nI.V.A. UYU "+new Intl.NumberFormat('de-DE').format(ivafact)+"\nTOTAL: UYU "+new Intl.NumberFormat('de-DE').format(total));



// Fin del código. 